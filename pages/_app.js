import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../src/ui/Theme';
import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";
import Fonts from '../src/ui/Font';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useRouter } from "next/router";
import { pageview } from "../lib/ga";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    Fonts();
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Theme}>
        <Header tabIndex={value} setTabindex={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Component  />
        <LazyLoadComponent threshold={400}>
          <Footer />
        </LazyLoadComponent>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
