import * as S from './Single.styles';
import Layout from '@components/Layout';
import MessageBuilder from './components/MessageBuilder';

export const SinglePage = (): JSX.Element => (
  <Layout title="Single">
    <S.Wrapper className="container">
      <h1>Single</h1>

      <MessageBuilder />
    </S.Wrapper>
  </Layout>
);

export default SinglePage;
