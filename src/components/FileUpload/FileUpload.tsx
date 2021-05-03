import { Upload, message } from 'antd';

import * as S from './FileUpload.styles';

const { Dragger } = Upload;

type IProps = {
  accept: string;
  onFileUpload: (file: any) => void;
};

const FileUpload = ({ accept, onFileUpload }: IProps): JSX.Element => {
  const draggerProps = {
    name: 'file',
    multiple: false,
    accept,
    onChange(info) {
      const { status } = info.file;

      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);

        onFileUpload(info);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
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
    </S.Wrapper>
  );
};

export default FileUpload;
