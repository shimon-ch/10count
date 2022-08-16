import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>10COUNT OFFICIAL SITE</title>
          <meta
            name="description"
            content="10COUNTは30代限界男性3人組によるゲーム実況グループです。"
          />
          <meta name="theme-color" content="#1f1f1f" />
          <meta property="og:title" content="10COUNT OFFICIAL SIT" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/ogp.png" />
          <meta property="og:url" content="https://10count.site/" />
          <meta
            property="og:description"
            content="10COUNTは30代限界男性3人組によるゲーム実況グループです"
          />
          <meta property="og:site_name" content="10COUNT OFFICIAL SITE" />
          <meta property="og:locale" content="ja_JP" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Twitter" />
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
