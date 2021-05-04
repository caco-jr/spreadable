import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';

import 'antd/dist/antd.css';
import '@styles/main.scss';
import { SheetProvider } from '@views/LargeScale/hooks/Sheet/use-sheet';

const theme = {
  colors: {
    primary: 'var(--primary-color)',
  },
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SheetProvider>
        <Component {...pageProps} />
      </SheetProvider>
    </ThemeProvider>
  );
}
