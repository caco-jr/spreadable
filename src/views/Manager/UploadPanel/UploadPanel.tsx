import * as S from './UploadPanel.styles';
import Layout from '@components/Layout';
import FileUpload from '@components/FileUpload';
import { sheetToObject } from '@utils/file';
import { useSpreadsheet } from '@hooks/Spreadsheet/use-spreadsheet';
import PersonUpload from './components/PersonUpload';

export const UploadPanelPage = (): JSX.Element => {
  const { setSpreadsheet } = useSpreadsheet();

  return (
    <Layout title="Large scale">
      <S.Wrapper className="container">
        <FileUpload
          accept=".xls, .xlsx"
          onFileUpload={({ file }) => {
            sheetToObject(file.originFileObj, setSpreadsheet);
          }}
        >
          <PersonUpload style={{ maxWidth: '100%' }} />

          <S.Title>
            Clique ou arraste uma planilha para esta área para fazer o upload
          </S.Title>
        </FileUpload>
      </S.Wrapper>
    </Layout>
  );
};

export default UploadPanelPage;
