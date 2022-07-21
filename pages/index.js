import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Step } from '../components/Step'






export default function Home() {



  return (
    <div className={styles.container}>
      <Head>
        <title>Pisaar</title>
        <meta name="description" content="Pisaar secure Nft whitelist marketplace" />
        <link rel="icon" href="/flame.svg" />
      </Head>

      <main className={styles.main}>
        <Step />
        {/* <Message /> */}
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
