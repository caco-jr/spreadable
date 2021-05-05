import * as S from './MessagePanel.styles';
import Layout from '@components/Layout';
import Table from './components/Table/Table';
import MessageAssembly from './components/MessageAssembly/MessageAssembly';

export const MessagePanelPage = (): JSX.Element => (
  <Layout title="Message panel">
    <S.Wrapper className="container">
      <h1>MessagePanel</h1>

      <Table />
      <MessageAssembly />
    </S.Wrapper>
  </Layout>
);

export default MessagePanelPage;
