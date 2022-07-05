import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'
import { Step } from '../components/Step'
import { Statistic } from '../components/Statistic'
import { Pricing } from '../components/Pricing'
import { Faq } from '../components/Faq'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nft Cursor</title>
        <meta name="description" content="Nft Cursor secure Nft whitelist marketplace" />
        <link rel="icon" href="/flame.svg" />
      </Head>

      <main className={styles.main}>
        {/* <Landing /> */}
        <Step />
        <Pricing />
        <Faq />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
