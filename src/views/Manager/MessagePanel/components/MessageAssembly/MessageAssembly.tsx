import { FormEvent, useState } from 'react';
import { Mentions } from 'antd';

import * as S from './MessageAssembly.styles';
import { useSpreadsheet } from '@hooks/Spreadsheet/use-spreadsheet';
import { replaceMe } from '@utils/strings';
import { buildWhatsAppURI } from '@utils/url/index';

const { Option } = Mentions;

const MessageAssembly = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const { spreadsheet, selectedItems } = useSpreadsheet();

  const getBeautyMessage = (sheetObject): string => {
    if (!spreadsheet) {
      return '';
    }

    return replaceMe(message, sheetObject);
  };

  const openInNewTab = (url: string): void => {
    window.open(url, '_blank');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    for (const item of selectedItems) {
      const socialNetworkURL = buildWhatsAppURI({
        phoneNumber: `${item.telefone}`,
        message: getBeautyMessage(item),
      });

      openInNewTab(socialNetworkURL);
    }
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <h2>Monte o template da mensagem</h2>

      <section>
        {spreadsheet?.headers.map(header => (
          <span key={header}>{header}</span>
        ))}
      </section>

      <Mentions rows={3} onChange={setMessage} prefix={['{']}>
        {spreadsheet?.headers.map(item => (
          <Option key={`suggestion-${item}`} value={`${item}}`}>
            {item}
          </Option>
        ))}
      </Mentions>

      {getBeautyMessage(spreadsheet.refinedData[0])}

      <button type="submit" disabled={!selectedItems.length || !message}>
        Enviar
      </button>
    </S.Wrapper>
  );
};

export default MessageAssembly;
