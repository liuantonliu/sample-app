// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import { AppProps } from 'next/app';

import DataContext from '../src/application/contexts/data';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataContext>
      <Component {...pageProps} />
    </DataContext>
  );
}