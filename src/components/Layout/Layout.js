import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../SiteMetadata';
import { withPrefix } from 'gatsby';
import { Navbar, Footer } from '../../components';
import GlobalStyle from '../../globalStyles';
import "@fontsource/league-spartan/600.css";
import "./index.css";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  useEffect(() => {

    //trustpilot
    if (document.getElementById("banner")) {
      const script = document.createElement('script');
      script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.sync.bootstrap.min.js';
      script.async = true;
      document.getElementById('trustpilot').appendChild(script)

      //calendly
      // if (document.getElementById("calendly")) {
      const calendlyScript = document.createElement('script');
      calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
      calendlyScript.async = true;
      document.getElementById('trustpilot').appendChild(calendlyScript)
    }
    // }
    if (document.getElementById("banner")) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [{
          "proName": "OANDA:SPX500USD",
          "title": "S&P 500"
        }, {
          "proName": "OANDA:NAS100USD",
          "title": "Nasdaq 100"
        }, {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        }, {
          "proName": "BITSTAMP:BTCUSD",
          "title": "BTC/USD"
        }, {
          "proName": "BITSTAMP:ETHUSD",
          "title": "ETH/USD"
        }],
        "colorTheme": "dark",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "in"
      });
      document.getElementById("banner").appendChild(script);;
    }
  }, []);
  
  return (
    <div>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div style={{
        overflow: "hidden"
      }}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
