import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>10COUNT IS COMING...</title>
          <meta name="description" content="10COUNT IS COMING..." />
          <meta name="theme-color" content="#00020a" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Anton&amp;family=Noto+Sans+JP:wght@100;300;400;500;700&amp;display=swap"
            rel="stylesheet"
          />
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
