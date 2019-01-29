import React, {Component} from 'react';
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
  
  img {
    max-width: 100%;
  }
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

export const List = styled.div`
  max-width: 330px;
  margin: 0 auto;
  text-align: left;
`;

export const ListItem = styled.div`
  margin-bottom: 30px;
  overflow: hidden;
`;

export const ListColor = styled.div`
  float: left;
  width: 13px;
  height: 48px;
  margin-right: 10px;
  background-color: ${p => p.theme.colors.greyLight};
  border-radius: 10px;
`;

export const ListContent = styled.div`
  overflow: hidden;
  padding-top: 5px;
`;

export const ListTitle = styled.div`
 color: ${p => p.theme.colors.black};
 font-size: 23px;
 line-height: normal;
`;

export const ListDesc = styled.div`
  color: ${p => p.theme.colors.grey};
  font-size: 16px;
  line-height: normal;
`;

class LyciList extends Component {
  render() {
    return (
      <List as={Row}>
        <ListItem as={Col} xs={4}>
          <ListColor style={{backgroundImage: 'linear-gradient(165deg, #3023ae, #c86dd7)'}}/>
          <ListContent>
            <ListTitle>57.8%</ListTitle>
            <ListDesc>BTC</ListDesc>
          </ListContent>
        </ListItem>
        <ListItem as={Col} xs={4}>
          <ListColor style={{backgroundImage: 'linear-gradient(165deg, #ae23a1, #d76d6d)'}}/>
          <ListContent>
            <ListTitle>11.3%</ListTitle>
            <ListDesc>ETH</ListDesc>
          </ListContent>
        </ListItem>
        <ListItem as={Col} xs={4}>
          <ListColor style={{backgroundImage: 'linear-gradient(165deg, #2399ae, #6dd0d7)'}}/>
          <ListContent>
            <ListTitle>11.1%</ListTitle>
            <ListDesc>XRP</ListDesc>
          </ListContent>
        </ListItem>
        <ListItem as={Col} xs={4}>
          <ListColor style={{backgroundImage: 'linear-gradient(165deg, #ff4121, #e4b086)'}}/>
          <ListContent>
            <ListTitle>5.1%</ListTitle>
            <ListDesc>BCH</ListDesc>
          </ListContent>
        </ListItem>
        <ListItem as={Col} xs={4}>
          <ListColor style={{backgroundImage: 'linear-gradient(165deg, #2a70c0, #00bb80)'}}/>
          <ListContent>
            <ListTitle>2.6%</ListTitle>
            <ListDesc>EOS</ListDesc>
          </ListContent>
        </ListItem>
        <ListItem as={Col} xs={4}>
          <ListColor style={{backgroundImage: 'linear-gradient(165deg, #c03f2a, #bb008a)'}}/>
          <ListContent>
            <ListTitle>2.5%</ListTitle>
            <ListDesc>XLM</ListDesc>
          </ListContent>
        </ListItem>
        <ListItem as={Col} xs={4}>
          <ListColor style={{backgroundImage: 'linear-gradient(165deg, #2aa3c0, #bb008a)'}}/>
          <ListContent>
            <ListTitle>1.7%</ListTitle>
            <ListDesc>LTC</ListDesc>
          </ListContent>
        </ListItem>
        <ListItem as={Col} xs={4}>
          <ListColor style={{backgroundImage: 'linear-gradient(165deg, #ffb300, #bb7500)'}}/>
          <ListContent>
            <ListTitle>1.1%</ListTitle>
            <ListDesc>ADA</ListDesc>
          </ListContent>
        </ListItem>
        <ListItem as={Col} xs={4}>
          <ListColor style={{backgroundImage: 'linear-gradient(165deg, #23ae77, #6d7bd7)'}}/>
          <ListContent>
            <ListTitle>6.8%</ListTitle>
            <ListDesc>Other</ListDesc>
          </ListContent>
        </ListItem>
      </List>
    )
  }
}

export default () => (
  <Wrapper grey>
    <Grid className="container">
      <Row className="align-items-center">
        <Col xs={12} sm={6} md={4}>
          <AccentText>Not sure which crypto is right for you?</AccentText>

          <Title>
            <span>Buy them all with</span>
            <Gradient>Lykke Index</Gradient>
          </Title>

          <div className="d-md-none">
            <LyciList/>
          </div>

          <Text>
            LyCI&nbsp;is a&nbsp;weighted index that consolidates and tracks
            a&nbsp;selection of&nbsp;the worlds top performing cryptocurrencies.
            It&nbsp;provides a&nbsp;snapshot of&nbsp;the crypto market
            in&nbsp;one single, easily understandable measure.
          </Text>

          <ButtonContainer>
            <Link href="/lyci">
              <Button href="/lyci" bordered>Learn more about Lykke Index</Button>
            </Link>
          </ButtonContainer>
        </Col>
        <Col xs={12} sm={6} md={8} className="text-center ">
          <div className="d-none d-lg-block">
            <Image>
              <img src="/static/images/chart.png" width="538px" alt="chart" />
            </Image>
            <Hint>
              At the time of writing the cryptocurrencies with the highest market
              cap and corresponding weights are data from coinmarketcap
            </Hint>
          </div>
          <div className="d-none d-md-block d-lg-none">
            <LyciList/>
          </div>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
