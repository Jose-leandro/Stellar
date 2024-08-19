import React from 'react'
import header from '../app/components/header'
import { main } from '../app/components/main/main'
import footer from '../app/components/footer'
import Head from 'next/head';

export default function Home(): React.JSX.Element {

  return (
    <>
      <Head>
        <title>Welcome to Stellar</title>
        <meta
          name="Stellar"
          content=""
        />
      </Head>
      <header>
        <header />
      </header>

      <main>
        <main />
      </main>

      <footer>
        <footer />
      </footer>
    </>
  )
}
