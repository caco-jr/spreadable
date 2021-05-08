import * as S from './UploadPanel.styles';
import Layout from '@components/Layout';
import FileUpload from '@components/FileUpload';
import { sheetToObject } from '@utils/file';
import { useSpreadsheet } from '@hooks/Spreadsheet/use-spreadsheet';

export const UploadPanelPage = (): JSX.Element => {
  const { setSpreadsheet } = useSpreadsheet();

  return (
    <Layout title="Large scale">
      <S.Wrapper className="container">
        <h1>LargeScale</h1>

        <FileUpload
          accept=".xls, .xlsx"
          onFileUpload={({ file }) => {
            sheetToObject(file.originFileObj, setSpreadsheet);
          }}
        />
      </S.Wrapper>
    </Layout>
  );
};

export default UploadPanelPage;
