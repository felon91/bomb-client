import type { AppProps } from 'next/app';
import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from '@/shared/styles/global.styled';
import Head from 'next/head';
import { PORTAL_ROOT } from '@/shared/components/portal';
import { OVERLAY_PORTAL_ROOT } from '@/shared/components/overlay/overlay';
import { reduxWrapper } from '@/shared/store/store';
import { Provider } from 'react-redux';
import type { AnyObj } from '@/shared/types/types';
import { ColorType, FontSizes, Indents } from '@/shared/types/types';

const theme: DefaultTheme = {
  colors: ColorType,
  indents: Indents,
  fontSize: FontSizes,
};

export default function MyApp({ Component, pageProps }: AppProps<AnyObj>) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { store, props } = reduxWrapper.useWrappedStore(pageProps);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <link href="./favicon.ico" rel="icon" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyled />
          <Component {...props} />
          <div id={PORTAL_ROOT} />
          <div id={OVERLAY_PORTAL_ROOT} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
