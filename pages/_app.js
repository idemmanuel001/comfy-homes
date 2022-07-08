import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  //setting up the progree bar for page loading
  NProgress.configure({ showSpinner: true });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

