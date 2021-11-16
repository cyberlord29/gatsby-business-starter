import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../SiteMetadata';
import { withPrefix } from 'gatsby';
import { Navbar, Footer } from '../../components';
import GlobalStyle from '../../globalStyles';
import "@fontsource/lato";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  useEffect(() => {
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

    if (document.getElementById("widget")) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
      script.async = true;
      script.innerHTML = JSON.stringify(
        {
          "colorTheme": "dark",
          "dateRange": "12M",
          "showChart": true,
          "locale": "in",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true,
          "showFloatingTooltip": false,
          "width": "400",
          "height": "660",
          "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
          "plotLineColorFalling": "rgba(41, 98, 255, 1)",
          "gridLineColor": "rgba(240, 243, 250, 0)",
          "scaleFontColor": "rgba(120, 123, 134, 1)",
          "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
          "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
          "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
          "tabs": [
            {
              "title": "Indices",
              "symbols": [
                {
                  "s": "FOREXCOM:SPXUSD",
                  "d": "S&P 500"
                },
                {
                  "s": "FOREXCOM:NSXUSD",
                  "d": "US 100"
                },
                {
                  "s": "FOREXCOM:DJI",
                  "d": "Dow 30"
                }
              ],
              "originalTitle": "Indices"
            },
            {
              "title": "Forex",
              "symbols": [
                {
                  "s": "FX:EURUSD"
                },
                {
                  "s": "FX:GBPUSD"
                },
                {
                  "s": "FX:USDJPY"
                }
              ],
              "originalTitle": "Forex"
            }
          ]
      });
      document.getElementById("widget").appendChild(script);;
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
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
