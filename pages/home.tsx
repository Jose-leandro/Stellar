
import React from 'react'
import Header from '../app/components/header'
import Footer from '../app/components/footer'
import { Main } from '../app/components/main/main'

export default function Home(): React.JSX.Element {
  return (
    <>
      <Header estadoUsuario={false} />

      <Main />

      <Footer />
    </>
  )
};
