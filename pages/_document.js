import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
         <Head>
            <meta name="description" content="" />
            <link rel="icon" href="/flame.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <script src="../path/to/flowbite/dist/flowbite.js"></script>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ramaraja&display=swap" rel="stylesheet" />
    </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument