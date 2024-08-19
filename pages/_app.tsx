import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../app/lib/redux/store';
import RootLayout from '../app/layout';
import { Dosis } from 'next/font/google';

const dosis = Dosis({
  weight: '400',
  subsets: ['latin'],
  style: ['normal'],
});

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <Provider store={store}>
      <RootLayout>
      <div className={dosis.className}>
          <Component {...pageProps} />
      </div>
      </RootLayout>
    </Provider>
  )
}
