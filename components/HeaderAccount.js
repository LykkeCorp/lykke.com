import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished'
import Button from './Button';
import {Row, Col} from 'react-styled-flexboxgrid';
import getConfig from 'next/config';
import {AuthService} from "../authService";
const {publicRuntimeConfig} = getConfig();
const { WALLET_URL } = publicRuntimeConfig;

const Wrapper = styled.div`
  flex-shrink: 0;
`;

const AccountLink = styled.a`
  color: ${p => p.theme.colors.primary};
  margin-right: ${rem('40px')};
  font-weight: 600;
  cursor: pointer;
  font-size: ${rem('18px')}
`;

class HeaderAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonUrl: '',
            loggedIn: null,
            user: {}
        };
    }

    componentDidMount() {
        this.authService = new AuthService();
        this.authService.getUser().then(user => {
            console.log("user: ", user);
        });
        if (sessionStorage.getItem('oidc.user:https://lykke.tech:lykke_website')) {
            const user = JSON.parse(sessionStorage.getItem('oidc.user:https://lykke.tech:lykke_website'))
            this.setState({
                user,
                loggedIn: true
            })
        } else {
            this.setState({
                user: {},
                loggedIn: false
            })
        }
    }

    handleLogin = () => {
        this.authService.login();
    };
    renderLoginButton = () => {
        const { loggedIn } = this.state;
        if( loggedIn === null ) return null;
        return loggedIn ? <Button href={WALLET_URL}>Go to dashboard</Button> :
            <>
            <AccountLink onClick={this.handleLogin}>Login</AccountLink>
            <Button href='/signup'>Get Started</Button>
            </>
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
