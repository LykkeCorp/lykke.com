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
                This website uses cookies and similar technologies to help us provide you with a better service. They allow us to remember you and understand how you use this site.
                <br />NOTE: Your further use of this site will be considered consent.
            </div>
        );
    }

    renderFooter() {
        return (
            <CookieBannerButtons>
                <Link href="/privacy-policy">
                    <CookiePolicyButton>
                        <CookiePolicyIcon className="icomoon icomoon-blogpost-icn" /><span>Full cookie policy</span>
                    </CookiePolicyButton>
                </Link>
                <AgreeButton onClick={this.hideBanner.bind(this)}>
                    I agree
                </AgreeButton>
            </CookieBannerButtons>
        );
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
  