import * as S from './MessagePanel.styles';
import Layout from '@components/Layout';
import DataTable from './components/DataTable';
import MessageAssembly from './components/MessageAssembly/MessageAssembly';

export const MessagePanelPage = (): JSX.Element => (
  <Layout title="Message panel">
    <S.Wrapper className="container">
      <h1>MessagePanel</h1>

      <DataTable />
      <MessageAssembly />
    </S.Wrapper>
  </Layout>
);

export default MessagePanelPage;
