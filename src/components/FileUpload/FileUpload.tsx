import { useState } from 'react';
import XLSX from 'xlsx';
import { Upload, message } from 'antd';

import * as S from './FileUpload.styles';
import { toCamelCase } from '@utils/strings/index';

const { Dragger } = Upload;

type IProps = {
  accept: string;
};

const FileUpload = ({ accept }: IProps): JSX.Element => {
  const [selectedFileObject, setSelectedFileObject] = useState();

  const draggerProps = {
    name: 'file',
    multiple: false,
    accept,
    onChange(info) {
      const { status } = info.file;

      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);

        handleFileChange(info.file.originFileObj);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleFileChange = file => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const data = e.target.result;
      const dataRead = XLSX.read(data, { type: 'binary' });
      const workSpaceName = dataRead.SheetNames[0];
      const ws = dataRead.Sheets[workSpaceName];

      /* Convert array to json*/
      const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });

      setSelectedFileObject(builder(dataParse));
    };

    reader.readAsBinaryString(file);
  };

  const builder = sheetList => {
    const headerList = sheetList[0].map(item => toCamelCase(item));

    const buildObject = list =>
      list.reduce(
        (accumulator, item, index) => ({
          ...accumulator,
          [headerList[index]]: item,
        }),
        {}
      );

    return sheetList.slice(1).map(item => buildObject(item));
  };

  return (
    <S.Wrapper>
      <Dragger {...draggerProps}>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>

        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>

      {selectedFileObject && 'Olá'}
    </S.Wrapper>
  );
};

export default FileUpload;
