import "../styles/globals.css";
import Head from "next/head";
import screenWidth from "../hooks/windowSize";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title key={'title'}>Power Rangers Free</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Online power ranger games"
          />
      </Head>
      <div className="overflow-x-hidden main-bg ">
        <Navbar />
            <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
