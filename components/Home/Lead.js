import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {placeholder, rem} from 'polished';
import Button from '../Button';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { WALLET_URL } = publicRuntimeConfig

export const Lead = styled.section`
  position: relative;
  padding-top: ${rem('80px')};
  padding-bottom: ${rem('40px')};

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
  margin: -130px 0 -8px -80px;
  z-index: -1;
  pointer-events: none;
  user-select: none;

  @media all and (max-width: 767px) {
    margin: -15px 0 5px -185px;

    img {
      max-width: 100%;
    }
  }
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: ${rem('54px')};
  padding: ${rem('13px')} ${rem('40px')} ${rem('15px')};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.corners.round};
  border: 1px solid ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.headings};
  font-size: ${rem('20px')};
  font-weight: 600;
  appearance: none;

  &:focus {
    outline: none;
  }

  ${placeholder({color: '#8c94a0'})};
`;

export const FormSubscribe = styled.div`
  width: 590px;
  max-width: 100%;

  ${Row} {
    margin: 0;
  }

  ${Col} {
    padding: 0;
  }

  /*.form_button {
    width: 100%;
    height: ${rem('54px')};
    padding: ${rem('18px')} ${rem('25px')};
  }*/

  @media all and (max-width: 767px) {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 360px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 15px;

    .form_button {
      box-shadow: 0 4px 15px 0 rgba(25, 112, 236, 0.5);
    }

    ${Input} {
      text-align: center;
    }

    ${InputGroup} {
      margin-bottom: 12px;
    }
  }

  @media all and (min-width: 768px) {
    /*border-radius: ${p => p.theme.corners.round};
    box-shadow: 0 4px 15px 0 rgba(25, 112, 236, 0.5);*/

    ${Input} {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    /*.form_button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }*/
  }
`;

export default () => (
  <Lead>
    <Grid className="container">
      <Row>
        <Col xs={12} sm={7} md={6}>
          <h1>
            Swiss Quality Exchange
          </h1>
          <p className="lead">
            <span>
              Securely buy, exchange and sell any digital assets & cryprocurrencies with Lykke such as Bitcoin, Ethereum, Litecoin and more.
            </span>
            <b className="d-none d-md-block">No hidden costs. Swiss quality.</b>
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
            <img
              src="/static/images/hero-mobile.jpg"
              width="502px"
              className="d-md-none"
            />
            <img
              src="/static/images/hero.jpg"
              width="778px"
              className="d-none d-md-block"
            />
          </Image>
        </Col>
      </Row>
    </Grid>
  </Lead>
);
