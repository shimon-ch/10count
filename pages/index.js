import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>10COUNT IS COMING...</title>
          <meta name="description" content="10COUNT IS COMING..." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            10COUNT IS COMING...
          </h1>
        </main>
      </div>
  )
}
