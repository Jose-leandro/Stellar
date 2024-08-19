import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Documento é um componente de documento personalizado para Next.js.
 * É usado para aumentar o aplicativo <html> e <body> tags.
 * @return {React.ReactElement} O elemento React que
 *  representa a estrutura do documento.
 */
export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
      <link rel="icon" type="image/x-icon" href="/img/icons8-forma-starburst-48.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}