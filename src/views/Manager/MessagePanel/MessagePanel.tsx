import * as S from './MessagePanel.styles';
import Layout from '@components/Layout';
import DataTable from './components/DataTable';
import MessageAssembly from './components/MessageAssembly/MessageAssembly';

export const MessagePanelPage = (): JSX.Element => (
  <Layout title="Painel de Mensagem">
    <S.Wrapper>
      <MessageAssembly />
      <DataTable />
    </S.Wrapper>
  </Layout>
);

export default MessagePanelPage;
