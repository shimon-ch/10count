import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>10COUNT OFFICIAL SITE</title>
          <meta
            name="description"
            content="10COUNTは30代限界男性達によるゲーム実況グループです。"
          />
          <meta name="theme-color" content="#00020a" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
