import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {rem} from 'polished';
import Button from '../Button';
import Link from 'next/link';

import {Section} from './styled';

export const AccentText = styled.div`
  margin-top: ${rem('10px')};
  margin-bottom: ${rem('25px')};
  font-family: ${p => p.theme.fonts.headings};
  font-size: ${rem('20px')};
  font-weight: 600;
  line-height: normal;

  @media all and (max-width: 767px) {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  button,
  a {
    width: 100%;
    max-width: 335px;
  }
`;

export const Wrapper = styled(Section)`
  @media all and (max-width: 767px) {
    padding-top: 34px;
  }
`;

export const Image = styled.div`
  margin-top: ${rem('-15px')};
  margin-bottom: ${rem('50px')};
`;

export const Hint = styled.div`
  max-width: 365px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem('-30px')};
  color: ${p => p.theme.colors.grey};
  font-size: ${rem('9px')};
  line-height: 1.78;
`;

export const Text = styled.p`
  margin-bottom: ${rem('40px')};
  color: ${p => p.theme.colors.grey};
  line-height: 1.69;
`;

export const Title = styled.h2`
  margin-bottom: ${rem('10px')};
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.headings};
  font-size: ${rem('60px')};
  font-weight: 900;
  line-height: ${rem('72px')};
  letter-spacing: -0.02em;

  @media all and (max-width: 767px) {
    margin-bottom: 20px;
    font-size: 46px;
    line-height: 58px;
  }
`;

export const Gradient = styled.div`
  background: linear-gradient(
    to right,
    #ff9100 0%,
    #ff0029 20%,
    #ab00ff 50%,
    #ab00ff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: ${rem('-10px')};
`;

export default () => (
  <Wrapper grey>
    <Grid className="container">
      <Row>
        <Col xs={12} sm={6} md={4}>
          <AccentText>Not sure which crypto is right for you?</AccentText>

          <Title>
            <span>Buy them all with</span>
            <Gradient>Lykke Index</Gradient>
          </Title>

          <Text>
            LyCI&nbsp;is a&nbsp;weighted index that consolidates and tracks
            a&nbsp;selection of&nbsp;the worlds top performing cryptocurrencies.
            It&nbsp;provides a&nbsp;snapshot of&nbsp;the crypto market
            in&nbsp;one single, easily understandable measure.
          </Text>

          <ButtonContainer>
            <Link href="/lyci">
              <Button bordered>Learn more about Lykke Index</Button>
            </Link>
          </ButtonContainer>
        </Col>
        <Col xs={12} sm={6} md={8} className="text-center d-none d-md-block">
          <Image>
            <img src="/static/images/chart.png" width="538px" alt="chart" />
          </Image>
          <Hint>
            At the time of writing the cryptocurrencies with the highest market
            cap and corresponding weights are (data from coinmarketcap):
          </Hint>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
