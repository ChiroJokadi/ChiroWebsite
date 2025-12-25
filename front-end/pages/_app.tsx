import "@styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Chiro Jokadi</title>
        <meta name="description" content="Hallo hallo... Chiro!" />

        {/* Open Graph */}
        <meta property="og:title" content="Chiro Jokadi" />
        <meta property="og:description" content="Hallo hallo... Chiro!" />
        <meta
          property="og:image"
          content="https://chirojokadi.be/chiro-jokadi.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chirojokadi.be" />
      </Helmet>
      <Component {...pageProps} />
    </HelmetProvider>
  );
};

export default appWithTranslation(App);
