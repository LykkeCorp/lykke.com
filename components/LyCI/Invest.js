import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Button from '../Button'
import {rem} from 'polished';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { WALLET_URL } = publicRuntimeConfig

export const Invest = styled.section``;

export const Card = styled.div`
  margin-bottom: ${rem('-80px')};
  padding: ${rem('20px')};
  background-color: ${p => p.theme.colors.white}; 
  border-radius: 8px;
  box-shadow: ${p => p.theme.boxShadow.light}; 
  line-height: normal;
  text-align: center;
    
  @media all and (min-width: 768px) {
    margin-bottom: ${rem('-123px')};
    padding: ${rem('40px')} ${rem('70px')};
  }
`;

export const CardTitle = styled.div`
  margin-bottom : ${rem('24px')};
  padding: 0 ${rem('38px')};
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.headings};
  font-size: ${rem('24px')};
  font-weight: 600; 
  
  @media all and (min-width: 768px) {
    margin-bottom: ${rem('10px')};
    padding: 0 ${rem('15px')};
  }
`;

export const CardText = styled.p`
  margin-bottom : ${rem('20px')};
  color: ${p => p.theme.colors.grey};
  line-height: 1.69;
`;

export const CardHint = styled.div`
  margin-top: ${rem('30px')};
  font-size: ${rem('12px')};
  text-align: center;

  a {
    color: ${p => p.theme.colors.primary};
    font-weight: 600;
  }
  
  @media all and (min-width: 768px) {
    margin-top: ${rem('20px')};
  }
`;

export const CardAction = styled.div`
  > a,
  > button {
    width: 330px;
    max-width: 100%;
  }
`;

export default () => (
  <Invest>
    <Grid className="container">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <Card>
            <CardTitle>25&nbsp;Cryptos&nbsp;&mdash; One click</CardTitle>
            <CardText className="d-none d-md-block">Don&rsquo;t put all your eggs in&nbsp;one basket.</CardText>
            <CardAction><Button href={WALLET_URL}>Start now</Button></CardAction>
            <CardHint>
              Please read full&nbsp;
              <Link href="/lyci-terms-of-service">
                <a>Terms of service</a>
              </Link>.
            </CardHint>
          </Card>
        </Col>
      </Row>
    </Grid>
  </Invest>
);