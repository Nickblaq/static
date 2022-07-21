import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'

function MyApp({ Component, pageProps }) {
  return (
    <>
       <Head>
        <title>Cusor</title>
      </Head>
      <div className='sticky top-0 z-40'>
      {/* <Announcement /> */}
      <Navbar />
      </div>
    <Component {...pageProps} />
    <Footer />
    </>
  )
  

}

export default MyApp
