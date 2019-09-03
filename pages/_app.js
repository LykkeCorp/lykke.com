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
      const tagManagerArgs = {
        gtmId: 'GTM-MRGJ9WT'
      };
      TagManager.initialize(tagManagerArgs);
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
