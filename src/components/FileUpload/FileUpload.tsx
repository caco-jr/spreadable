import { useState } from 'react';
import XLSX from 'xlsx';

import * as S from './FileUpload.styles';
import { toCamelCase } from '@utils/strings/index';

type IProps = {
  accept: string;
};

const FileUpload = ({ accept }: IProps): JSX.Element => {
  const [selectedFileObject, setSelectedFileObject] = useState();

  const changeHandler = event => {
    const files = event.target.files;
    const file = files[0];
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
      <input type="file" accept={accept} onChange={changeHandler} />

      {selectedFileObject && 'Olá'}
    </S.Wrapper>
  );
};

export default FileUpload;
