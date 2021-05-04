import * as S from './LargeScale.styles';
import Layout from '@components/Layout';
import FileUpload from '@components/FileUpload';
import { sheetToObject } from '@utils/file';
import { useSheet } from './hooks/Sheet/use-sheet';

export const LargeScalePage = (): JSX.Element => {
  const { setSheet } = useSheet();

  return (
    <Layout title="Large scale">
      <S.Wrapper className="container">
        <h1>LargeScale</h1>

        <FileUpload
          accept=".xls, .xlsx"
          onFileUpload={({ file }) => {
            sheetToObject(file.originFileObj, setSheet);
          }}
        />
      </S.Wrapper>
    </Layout>
  );
};

export default LargeScalePage;
