import * as S from './Home.styles';
import Layout from '@components/Layout';
import { PROJECT_NAME } from '@utils/strings';

export const HomePage = (): JSX.Element => (
  <Layout title="Home">
    <S.Wrapper className="container">
      <S.Title>{PROJECT_NAME}</S.Title>
    </S.Wrapper>
  </Layout>
);

export default HomePage;
