import React from 'react';
import styled from 'styled-components';
import {placeholder, rem} from 'polished';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Button from '../Button';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { WALLET_URL } = publicRuntimeConfig

import {InputGroup, Input, FormSubscribe} from '../Home/Lead';

const Lead = styled.section`
  position: relative;
  padding-top: ${rem('80px')};
  padding-bottom: ${rem('40px')};

  a.link {
    text-decoration: underline;
  }

  h1 {
    margin-bottom: ${rem('18px')};
  }

  .lead {
    margin-bottom: ${rem('40px')};
  }
  
  .form_button {
    width: 250px;
    max-width: 100%;
  }

  @media all and (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;

    h1 {
      margin-top: 0;
      margin-bottom: 12px;
    }

    .lead {
      margin-bottom: ${rem('10px')};
    }
    
    .form_button {
      width: 100%;
    }
  }

  @media all and (max-width: 420px) {
    padding-top: 10px;
  }
`;

export const Image = styled.div`
  position: relative;
  pointer-events: none;
  user-select: none;
  text-align: right;
  margin: -20px 0 100px 0;
  padding-left: 40px;

  img {
    max-width: 100%;
  }

  @media all and (max-width: 767px) {
    padding-left: 0;
    margin: 20px 0 50px 0;
  }
`;

export default () => (
  <Lead>
    <Grid className="container">
      <Row>
        <Col xs={12} sm={7} md={6}>
          <h1>Secure and trusted platform for pro traders.</h1>
          <p className="lead">
            Buy and sell FX, cryptocurrency such as <a className="link" href="https://www.lykke.com" target="_blank">Bitcoin</a> & <a className="link" href="https://www.lykke.com" target="_blank">Ethereum</a> and other digital assets on our Swiss based
            exchange.
          </p>
          <FormSubscribe>
            <Button className="form_button" href={WALLET_URL}>
              Get Started
            </Button>
            {/*<Row>
              <Col xs={12} sm={8} lg={9}>
                <InputGroup>
                  <Input
                    type="email"
                    placeholder="Enter your Email to get started"
                  />
                </InputGroup>
              </Col>
              <Col xs={12} sm={4} lg={3}>
                <Button className="form_button" block href={WALLET_URL}>
                  Get Started
                </Button>
              </Col>
            </Row>*/}
          </FormSubscribe>
        </Col>
        <Col xs={12} sm={5} md={6}>
          <Image>
            <img src="/static/images/hero-trade.svg" width={567} />
          </Image>
        </Col>
      </Row>
    </Grid>
  </Lead>
);
