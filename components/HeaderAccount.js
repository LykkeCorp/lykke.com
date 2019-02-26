import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished'
import Button from './Button';
import {Row, Col} from 'react-styled-flexboxgrid';
import getConfig from 'next/config'
import {UserManager} from "oidc-client";
const {publicRuntimeConfig} = getConfig()
const { WALLET_URL } = publicRuntimeConfig

const Wrapper = styled.div`
  flex-shrink: 0;
`;

const AccountLink = styled.a`
  color: ${p => p.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  font-size: ${rem('18px')}
`

class HeaderAccount extends React.Component {
    state = {
        buttonUrl: '',
        loggedIn: null
    };
    componentDidMount() {
        const config = {
            authority: "https://lykke.tech",
            client_id: "lykke_website",
            redirect_uri: "http://localhost:3000/auth",
            silent_redirect_uri: "http://localhost:3000/auth",
            post_logout_redirect_uri: "http://localhost:3000",
            response_type: "id_token token",
            scope: "openid profile email"
        };
        const mgr = new UserManager(config);
        mgr.createSigninRequest().then(res => {
            this.setState({ buttonUrl: res.url})
        });
        if(sessionStorage.getItem('token')) {
            this.setState({ loggedIn: true })
        } else {
            this.setState({ loggedIn: false })
        }
    }
    renderLoginButton = () => {
        const { loggedIn } = this.state;
        if( loggedIn === null ) return null;
        return loggedIn ? <Button href={WALLET_URL}>Go to dashboard</Button> : <AccountLink href={this.state.buttonUrl}>Login</AccountLink>
    };
    render() {
        return (
            <Wrapper>
                <Row className="justify-content-end">
                    <Col>
                        { this.renderLoginButton() }
                    </Col>
                </Row>
            </Wrapper>
        )
    }
}

export default HeaderAccount;

