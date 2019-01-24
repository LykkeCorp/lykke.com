import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import { rem } from 'polished'
import styled from 'styled-components'

import Button from '../../Button';

const LargeNumber = styled.p`
    font-size: ${rem('50px')};
    font-weight: 300;
    span {
        font-weight: 600
    };
    @media all and (max-width: 768px) {
        font-size: ${rem('32px')}
    }
`;

const Number = styled.p`
  font-size: ${rem('28px')};
  font-weight: 300;
  line-height: 2.5rem;
  color: ${p => p.theme.colors.dark};
  margin: 0 20px 0 0;
  span {
    font-weight: 600;
  }
`;

const Percentage = styled.p`
  font-size: ${rem('28px')};
  font-weight: 600;
  line-height: ${rem('40px')};
  color: ${p => p.theme.colors.primary};
  margin: 0 20px 0 0;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 0 ${rem('25px')} 0;
  @media all and (max-width: 768px) {
    margin: ${rem('25px')} 0;
    justify-content: center;
  }
`

const Line = styled.div`
  height: 3px;
  border-radius: 10px;
  flex: 0 0 20%;
  background-color: ${p => p.theme.colors.primary};
  @media all and (max-width: 768px) {
    margin: ${rem('20px')} 0;
  }
`;

const Text = styled.p`
    flex: 0 0 100%;
    font-weight: 400;
    font-size: ${rem('18px')};
    line-height: ${rem('30px')};
    color: ${p => p.theme.colors.greyBluey};
    margin: 0;
    a {
      color: ${p => p.theme.colors.primary};
    }
    @media all and (max-width: 768px) {
        text-align: center;
    }
`

export default () => {
    return (
        <Grid className="container">
            <Row>
                <Col xs={12} sm={12} lg={12}>
                    <h3>Lykke ownership structure</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} lg={6}>
                    <LargeNumber><span>1,285,690,000</span> LKK</LargeNumber>
                    <Button href="https://blockchainexplorer.lykke.com/asset/AXkedGbAH1XGDpAypVzA5eyjegX4FaCnvM">View Lykke coinholders</Button>
                </Col>
                <Col xs={12} sm={6} lg={6}>
                    <ItemWrapper>
                        <Number><span>603,613,098</span> LKK</Number>
                        <Percentage>46.9%</Percentage>
                        <Line/>
                        <Text>Private Wallets</Text>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Number><span>681,976,415</span> LKK</Number>
                        <Percentage>53.0%</Percentage>
                        <Line/>
                        <Text>Trading wallets</Text>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Number><span>100,485</span> LKK</Number>
                        <Percentage>0.0%</Percentage>
                        <Text>Owned by <a href="https://blockchainexplorer.lykke.com/address/akFi7XEmeEXPw5zPBxtktGWf4NiqJJpFvGK">Lykke Corp treasury</a></Text>
                    </ItemWrapper>
                </Col>
            </Row>
        </Grid>
    )
}