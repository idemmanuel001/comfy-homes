import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import NProgress from 'nprogress'
import Router from 'next/router';


function MyApp({ Component, pageProps}) {

  //setting up the progree bar for page loading
  NProgress.configure({showSpinner: false});

  Router.events.on('routeChangeStart', ()=> {
    NProgress.start();
  })
  Router.events.on('routeChangeComplete', ()=> {
    NProgress.done();
  })

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer  />
    </>
  );
}

export default MyApp;

