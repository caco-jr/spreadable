import * as S from './UploadPanel.styles';
import Layout from '@components/Layout';
import FileUpload from '@components/FileUpload';
import { sheetToObject } from '@utils/file';
import { useSpreadsheet } from '@hooks/Spreadsheet/use-spreadsheet';
import PersonUpload from './components/PersonUpload';
import { PROJECT_NAME } from '@utils/strings';

export const UploadPanelPage = (): JSX.Element => {
  const { setSpreadsheet } = useSpreadsheet();

  return (
    <Layout title={`${PROJECT_NAME}`}>
      <S.Wrapper className="container">
        <FileUpload
          accept=".xls, .xlsx, .csv"
          onFileUpload={({ file }) => {
            sheetToObject(file.originFileObj, setSpreadsheet);
          }}
        >
          <PersonUpload style={{ maxWidth: '100%' }} />

          <S.Title>
            Clique ou arraste uma planilha nessa área para iniciar
          </S.Title>
        </FileUpload>
      </S.Wrapper>
    </Layout>
  );
};

export default UploadPanelPage;
