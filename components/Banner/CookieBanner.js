import React, {Component} from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie'
import Banner from './Banner';
import Checkbox from '../Checkbox/Checkbox';
import {CookieFooter, CookieCheckboxes, AgreeButton} from './styled'

const STATS_COOKIE_NAME = "collect-stats";
const BANNER_HIDDEN_COOKIE_NAME = "cookie-banner-hidden";

export default class extends Component {
    state = {
      visible: false,
      statisticsCheck: false
    };

    constructor(props) {
      super(props);
      // registered to listen toggle visibility from <footer />
      this.onWindowMessage = this.onWindowMessage.bind(this);
    }
  
    componentDidMount() {
        this.migrateFromLocalStorageToCookies();
        let statisticsCheck = false;
        const statisticsCookieValue = Cookies.get(STATS_COOKIE_NAME);
        if(statisticsCookieValue === undefined) {
          statisticsCheck = true;
        } else {
          statisticsCheck = parseInt(statisticsCookieValue) ? true : false;
        }
        this.setState({
          visible: Cookies.get(BANNER_HIDDEN_COOKIE_NAME) !== "1",
          statisticsCheck
        });

        window.addEventListener("message", this.onWindowMessage);
    }

    componentWillUnmount() {
      window.removeEventListener("message", this.onWindowMessage);
    }

    onWindowMessage(event) {
      if (event.data === "showCookieBanner") {
        this.setState({ visible: true });
      }
    }

    migrateFromLocalStorageToCookies() {
      // if no localstorage, skip
      if (!localStorage.getItem('isCookieBannerHidden')) {
        return;
      }

      // since he already accept, we can hide banner
      Cookies.set(BANNER_HIDDEN_COOKIE_NAME, "1", this.getCookieConfiguration());
      // stats are 1 by default
      Cookies.set(STATS_COOKIE_NAME, "1", this.getCookieConfiguration());
      localStorage.removeItem('isCookieBannerHidden');
    }

    getCookieConfiguration() {
      const rootDomain = this.getRootDomain();
      let domain = "";
      if (rootDomain.indexOf("localhost") > -1) {
        domain = "localhost";
      } else {
        domain = "." + rootDomain;
      }

      return { expires: 365, domain };
    }

    renderText() {
        return (
            <div>
                We use cookies to offer you a better browsing experience and analyze site traffic.
                Necessary cookies are essential to browse the website and use it's features. Additional cookies are only used if you consent to it.
                They serve statistical purposes and you can always change your privacy settings.
                For more information, see our <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
        );
    }

    renderFooter() {
        return (
            <CookieFooter>
                <CookieCheckboxes>
                  <Checkbox
                    label="Necessary"
                    checked
                    onChange={() => {}} />
                  <Checkbox
                    label="Statistics"
                    style={{ marginLeft: 10 }}
                    checked={this.state.statisticsCheck}
                    onChange={() => this.setState({ statisticsCheck: !this.state.statisticsCheck })}
                  />
                </CookieCheckboxes>
                <AgreeButton onClick={this.hideBanner.bind(this)}>
                    Apply selection and agree
                </AgreeButton>
            </CookieFooter>
        );
    }

    getRootDomain() {
        let url = document.location.href;
        url = url.replace(/(https?:\/\/)?(www.)?/i, '');
        if (url.indexOf('/') !== -1) {
            return url.split('/')[0];
        }
        return url;
    }

    hideBanner() {
        const config = this.getCookieConfiguration();
        Cookies.set(BANNER_HIDDEN_COOKIE_NAME, "1", config);

        this.setState({visible: false});

        const {statisticsCheck} = this.state;
        if (statisticsCheck) {
          Cookies.set(STATS_COOKIE_NAME, "1", config);
        } else {
          Cookies.set(STATS_COOKIE_NAME, "0", config);
        }
    }
  
    render() {
        const {visible} = this.state;
        return (
            visible && <Banner
                wide
                smallText
                text={this.renderText()}
                footer={this.renderFooter()}
            />
        );
    }
}
  