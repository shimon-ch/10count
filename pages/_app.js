import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>10COUNT IS COMING...</title>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
