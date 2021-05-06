import { useState } from 'react';
import { Mentions } from 'antd';

import * as S from './MessageAssembly.styles';
import { useSpreadsheet } from '@hooks/Spreadsheet/use-spreadsheet';
import { replaceMe } from '@utils/strings/index';

const { Option } = Mentions;

const MessageAssembly = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const { spreadsheet } = useSpreadsheet();

  const getBeautyMessage = (): string => {
    if (!spreadsheet) {
      return '';
    }

    const exampleObject = spreadsheet.refinedData[0];

    return replaceMe(
      message,
      (exampleObject as unknown) as Record<string, string>
    );
  };

  return (
    <S.Wrapper>
      <h2>MessageAssembly</h2>

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

      {getBeautyMessage()}
    </S.Wrapper>
  );
};

export default MessageAssembly;
