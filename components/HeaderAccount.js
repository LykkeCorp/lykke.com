import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {Row, Col} from 'react-styled-flexboxgrid';
import getConfig from 'next/config'
<<<<<<< Updated upstream
=======
import {AuthService} from "../authService";
>>>>>>> Stashed changes
const {publicRuntimeConfig} = getConfig()
const { WALLET_URL } = publicRuntimeConfig

const Wrapper = styled.div`
  flex-shrink: 0;
`;

<<<<<<< Updated upstream
export default () => (
  <Wrapper>
    <Row className="justify-content-end">
      <Col>
        <Button href={WALLET_URL}>Go to dashboard</Button>
      </Col>
    </Row>
  </Wrapper>
);
=======
const AccountLink = styled.a`
  color: ${p => p.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  font-size: ${rem('18px')}
`

class HeaderAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonUrl: '',
            loggedIn: false
        };
    }

    componentDidMount() {
        this.authService = new AuthService();
    }

    handleLogin = () => {
        this.authService.login();
    };
    renderLoginButton = () => {
        const { loggedIn } = this.state;
        if( loggedIn === null ) return null;
        return loggedIn ? <Button href={WALLET_URL}>Go to dashboard</Button> : <AccountLink onClick={this.handleLogin}>Login</AccountLink>
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

>>>>>>> Stashed changes
