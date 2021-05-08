import { useSpreadsheet } from '@hooks/Spreadsheet/use-spreadsheet';
import UploadPanelPage from '@views/Manager/UploadPanel';
import MessagePanelPage from '@views/Manager/MessagePanel';

const Manager = (): JSX.Element => {
  const { spreadsheet } = useSpreadsheet();

  return spreadsheet ? <MessagePanelPage /> : <UploadPanelPage />;
};

export default Manager;
