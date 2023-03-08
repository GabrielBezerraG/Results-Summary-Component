import Head from 'next/head';
import '../src/styles/reset.css';
import '../src/styles/globalStyles.css';

export default function App({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>Results Summary Component</title>
         </Head>
         <Component {...pageProps} />
      </>
   )
}