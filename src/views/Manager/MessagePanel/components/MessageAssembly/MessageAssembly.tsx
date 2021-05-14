import { FormEvent, useState } from 'react';
import { Mentions, Divider, Button } from 'antd';

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

  const getPhoneVariable = (): string => {
    const phoneNames = ['whatsApp', 'celular', 'telefone', 'phoneNumber'];

    return phoneNames.find(phoneName =>
      spreadsheet.headers.includes(phoneName)
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const phoneNumberVariable = getPhoneVariable();

    for (const item of selectedItems) {
      const socialNetworkURL = buildWhatsAppURI({
        phoneNumber: `55${phoneNumberVariable}`,
        message: getBeautyMessage(item),
      });

      openInNewTab(socialNetworkURL);
    }
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Title>Monte a mensagem</S.Title>

      <Mentions
        rows={3}
        onChange={setMessage}
        prefix={['{']}
        placeholder={`Experimente digitar "{" para ver as tags disponíveis`}
        className="c-message"
      >
        {spreadsheet?.headers.map(item => (
          <Option key={`suggestion-${item}`} value={`${item}}`}>
            {item}
          </Option>
        ))}
      </Mentions>

      <S.MessagePreviewTitle>
        <Divider orientation="left">Prévia</Divider>
      </S.MessagePreviewTitle>

      <S.MessagePreviewWrapper>
        {getBeautyMessage(selectedItems[0] || spreadsheet?.refinedData[0])}
      </S.MessagePreviewWrapper>

      <Button
        type="primary"
        block
        disabled={!selectedItems.length || !message}
        htmlType="submit"
        color="#FFF"
        className="c-message-submit"
      >
        Enviar
      </Button>
    </S.Wrapper>
  );
};

export default MessageAssembly;
