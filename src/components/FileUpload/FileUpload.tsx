import { Upload, message } from 'antd';

import * as S from './FileUpload.styles';

const { Dragger } = Upload;

type IProps = {
  accept: string;
  onFileUpload: (file: any) => void;
  children: React.ReactNode;
};

const FileUpload = ({
  accept,
  onFileUpload,
  children,
}: IProps): JSX.Element => {
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
      <Dragger {...draggerProps}>{children}</Dragger>
    </S.Wrapper>
  );
};

export default FileUpload;
