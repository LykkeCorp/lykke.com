import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {placeholder, rem} from 'polished';
import Button from '../Button';
import {SectionHeader} from './styled';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { TERMINAL_URL } = publicRuntimeConfig

const ExchangeButton = styled(Button)`
  span {
    display: flex !important;
    justify-content: center;
    align-items: center;

    img {
      padding-right: 13px;
    }
  }
`;

export const Lead = styled.section`
  overflow: hidden;
  position: relative;
  padding-top: 20vh;
  padding-bottom: ${rem('210px')};
  text-align: center;
  background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F9 100%);

  mix-blend-mode: normal;

  a.link {
    text-decoration: underline;
  }

  h1 {
    margin-bottom: ${rem('18px')};
  }

  .description {
    margin-bottom: ${rem('40px')};
  }
  
  .form_button {
    z-index: 999999;
    width: 250px;
    max-width: 100%;
    text-decoration: none;
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
  z-index: -1;
  pointer-events: none;
  user-select: none;

  @media all and (min-width: 767px) {
    margin: -130px 0px -8px -80px;
  }

  @media all and (max-width: 767px) {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    max-width: 100%;

    img {
      max-height: 400px;
    }
  }

  @media all and (max-width: 414px) {
    img {
      max-height: 300px;
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
  @media all and (max-width: 767px) {
    width: 360px;
    max-width: 100%;
    margin: 0 auto;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  top: -23px;
  height: calc(100% + 26px);

  @media all and (max-width: 1600px) {
    height: calc(100% + 60px);
  }

  @media all and (max-width: 1400px) {
    height: calc(100% + 80px);
  }

  @media all and (max-width: 1260px) {
    display: none;
  }
`;

export default () => (
  <Lead>
    <Grid className="container">
      <Row>
        <Col xs={12}>
          <FormSubscribe>
            <SectionHeader>
              <h1>
                Swiss‐based Blockchain company and Financial Product provider
              </h1>
              <p className="description">
                <span>
                Lykke is a Fintech company bridging the gap between traditional finance and Blockchain. Lykke operates a commission free exchange for digital assets.
                </span>
              </p>
              <ExchangeButton className="form_button" href={TERMINAL_URL}>
                <img
                  src="/static/lykke_exchange_logo__white.svg"
                  alt="Lykke"
                />{' '}Lykke trade
              </ExchangeButton>
            </SectionHeader>
          </FormSubscribe>
          <BackgroundImage src="/static/images/lead-bg.svg" />
        </Col>
      </Row>
    </Grid>
  </Lead>
);
