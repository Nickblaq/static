import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <>
       <Head>
        <title>Cusor</title>
      </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
  

}

export default MyApp
