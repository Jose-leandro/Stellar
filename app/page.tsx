
import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Main } from './components/main/main'

/**
 * Page is a React component that sets up the page layout.
 * @return {ReactElement} The rendered page layout.
 */
export default function Page (): React.JSX.Element {
  
  return (
    <>
      <header>
        <Header estadoUsuario={false} />
      </header>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
};
