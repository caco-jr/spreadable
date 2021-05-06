import { useState } from 'react';
import { Mentions } from 'antd';

import * as S from './MessageAssembly.styles';
import { useSheet } from '@hooks/Sheet/use-sheet';
import { replaceMe } from '@utils/strings/index';

const { Option } = Mentions;

const MessageAssembly = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const { sheet } = useSheet();

  const getBeautyMessage = (): string => {
    if (!sheet) {
      return '';
    }

    const exampleObject = sheet.refinedData[0];

    return replaceMe(
      message,
      (exampleObject as unknown) as Record<string, string>
    );
  };

  return (
    <S.Wrapper>
      <h2>MessageAssembly</h2>

      <section>
        {sheet?.headers.map(header => (
          <span key={header}>{header}</span>
        ))}
      </section>

      <Mentions rows={3} onChange={setMessage} prefix={['{']}>
        {sheet?.headers.map(item => (
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
