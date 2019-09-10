import App, {Container} from 'next/app';
import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import TagManager from 'react-gtm-module';
import CookieBanner from '../components/Banner/CookieBanner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MarketList from '../components/MarketList/MarketList';
import theme from '../theme';
import styled from 'styled-components';

import GlobalFontFace from '../utils/font-face';
import GlobalIcons from '../utils/icons';
import Icomoon from '../utils/icomoon';
import GlobalStyle from '../utils/global';

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Main = styled.main`
  flex-grow: 1;

  @media all and (max-width: 991px) {
    padding-top: 58px;
  }
`;

const htmlToElement = (html) => {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.childNodes;
}

const Layout = ({quotes, children, menuHandler, isMenuOpen}) => (
    <Wrapper>
        <MarketList quotes={quotes} />
        <Header isMenuOpen={isMenuOpen} menuHandler={menuHandler}/>
        <Main>{children}</Main>
        <CookieBanner />
        <Footer />
    </Wrapper>
);

export default class LykkeApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      const gtmHead = `<!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MRGJ9WT');</script>
      <!-- End Google Tag Manager -->
      <!-- Start Alexa Certify Javascript -->
      <script type="text/javascript">
      _atrk_opts = { atrk_acct:"38jqt1hNdI20fn", domain:"lykke.com",dynamic: true};
      (function() { var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = "https://certify-js.alexametrics.com/atrk.js"; var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(as, s); })();
      </script>
      <noscript><img src="https://certify.alexametrics.com/atrk.gif?account=38jqt1hNdI20fn(43 B)
      https://certify.alexametrics.com/atrk.gif?account=38jqt1hNdI20fn
      " style="display:none" height="1" width="1" alt="" /></noscript>
      <!-- End Alexa Certify Javascript -->`;
      const gtmBody = `<!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRGJ9WT"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->`;

      const headElement = htmlToElement(gtmHead);
      for (let i = headElement.length-1; i >= 0; i--) {
        document.head.prepend(headElement[i]);
      }
      const bodyElement = htmlToElement(gtmBody);
      for (let i = bodyElement.length-1; i >= 0; i--) {
        document.body.prepend(bodyElement[i]);
      }
    }
  }

  openMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  };

  render() {
    const {Component, pageProps} = this.props;
    return (
      <div className={this.state.isMenuOpen ? 'menu-opened' : ''}>
        <ThemeProvider theme={theme}>
          <Container>
            <GlobalFontFace />
            <GlobalStyle />
            <GlobalIcons />
            <Icomoon />
            { this.props.router.pathname !== '/auth' ? <Layout
              menuHandler={this.openMenu}
              isMenuOpen={this.state.isMenuOpen}
            >
              <Component {...pageProps} />
            </Layout> : <Component {...pageProps} /> }
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}
