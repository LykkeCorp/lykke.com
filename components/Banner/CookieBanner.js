import React, {Component} from 'react';
import Link from 'next/link';
import Banner from './Banner';
import {CookieBannerButtons, CookiePolicyButton, CookiePolicyIcon, AgreeButton} from './styled'

export default class extends Component {
    state = {
      visible: false
    };
  
    componentDidMount() {
        this.setState({visible: !localStorage.getItem('isCookieBannerHidden')});
    }

    renderText() {
        return (
            <div>
                This website stores cookies on your computer. We use this information to customize your browsing experience and for analytics and metrics about our visitors both on this website and other devices.
                <br />If you decline, your personal information won’t be tracked when you visit this website. You can also use the settings of your browser to turn them off.
                <br />To find out more about the cookies we use, see our <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
        );
    }

    renderFooter() {
        return (
            <CookieBannerButtons>
                <AgreeButton onClick={this.hideBanner.bind(this)}>
                    Accept
                </AgreeButton>
                <AgreeButton onClick={this.handleDecline.bind(this)}>
                    Decline
                </AgreeButton>
            </CookieBannerButtons>
        );
    }

    deleteAllCookies() {
        const cookies = document.cookie.split(';');
    
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
    }

    handleDecline() {
        this.setState({visible: false});
        this.deleteAllCookies();
    }

    hideBanner() {
        localStorage.setItem('isCookieBannerHidden', true);
        this.setState({visible: false});        
    }
  
    render() {
        const {visible} = this.state;
        return (
            visible && <Banner
                title="Cookie notice"
                text={this.renderText()}
                footer={this.renderFooter()}
            />
        );
    }
}
  