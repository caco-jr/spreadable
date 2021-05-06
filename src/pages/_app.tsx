import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';

import 'antd/dist/antd.css';
import '@styles/main.scss';
import { SpreadsheetProvider } from '@hooks/Spreadsheet/use-spreadsheet';

const theme = {
  colors: {
    primary: 'var(--primary-color)',
  },
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SpreadsheetProvider>
        <Component {...pageProps} />
      </SpreadsheetProvider>
    </ThemeProvider>
  );
}
