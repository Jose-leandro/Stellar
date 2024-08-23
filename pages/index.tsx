import React from 'react'
import Header from '../app/components/header'
import Footer from '../app/components/footer'
import Head from 'next/head'
import Main from '../app/components/landing-page/main'

export default function Index (): React.JSX.Element {
  return (
    <>
      <Head>
        <title>Welcome to Stellar</title>
        <meta name="description" content="Welcome to Stellar, a dynamic marketplace." />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
