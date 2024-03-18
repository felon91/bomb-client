import type { DocumentContext } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="yandex-verification" content="652945cd753d1c86" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
