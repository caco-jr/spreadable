import * as S from './LargeScale.styles';
import Layout from '@components/Layout';
import FileUpload from '@components/FileUpload';

export const LargeScalePage = (): JSX.Element => (
  <Layout title="Large scale">
    <S.Wrapper className="container">
      <h1>LargeScale</h1>

      <FileUpload accept=".xls, .xlsx" />
    </S.Wrapper>
  </Layout>
);

export default LargeScalePage;
