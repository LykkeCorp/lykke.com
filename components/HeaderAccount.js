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
    renderLoginButton = () => {
        const { loggedIn } = this.props;
        if( loggedIn === null ) return null;
        return loggedIn ? <Button href={WALLET_URL}>Go to dashboard</Button> :
            <>
            <AccountLink onClick={this.props.handleLogin}>Login</AccountLink>
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
