import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../app/lib/redux/store';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
