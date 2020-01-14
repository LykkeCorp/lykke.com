import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {Row, Col} from 'react-styled-flexboxgrid';
import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();
const { AUTH_REDIRECT_URL, WALLET_URL } = publicRuntimeConfig;

const Wrapper = styled.div`
  flex-shrink: 0;
`;

class HeaderAccount extends React.Component {
    renderLoginButton = () => {
        const { loggedIn } = this.props;
        if( loggedIn === null ) return null;
        return loggedIn ? <Button href={AUTH_REDIRECT_URL || WALLET_URL}>Go to dashboard</Button> :
            <>
            <Button href={WALLET_URL}>Get Started</Button>
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
