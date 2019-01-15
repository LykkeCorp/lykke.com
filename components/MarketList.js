import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {rem} from 'polished';
import config from '../config';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { LYCI_ASSET_INDEX } = publicRuntimeConfig

import axios from '../axios'

const MarketList = styled.div`
  min-height: ${rem('50px')};
  padding-top: ${rem('9px')};
  padding-bottom: ${rem('9px')};
  background-color: ${p => p.theme.colors.greyPale};

  @media all and (max-width: 991px) {
    position: fixed;
    top: ${rem('8px')};
    right: 0;
    background-color: transparent;
    z-index: 201;
    transition: opacity ${p => p.theme.transition.primary},
      visibility ${p => p.theme.transition.primary};

    .menu-opened & {
      opacity: 0;
      visibility: 0;
    }
  }

  @media all and (max-width: 767px) {
    top: 4px;
  }
`;

const Wrapper = styled.div`
  padding-right: ${rem('12px')};
  padding-left: ${rem('12px')};

  @media all and (max-width: 991px) {
    padding: 0;
  }
`;

const Title = styled.div`
  color: ${p => p.theme.colors.greyBluey};
  font-size: ${rem('15px')};
  font-weight: 600;
  line-height: 1;
`;

const Value = styled.span`
  margin-left: ${rem('8px')};
  color: ${p =>
    p.dir === 'up' ? p.theme.colors.green : p.theme.colors.orangeRed};
  font-weight: 600;
`;

const Desc = styled.div`
  margin-top: ${rem('2px')};
  color: ${p => p.theme.colors.greyBluey};
  font-size: ${rem('14px')};
  line-height: 1;


  ${Value} {
    display: inline-block;
    vertical-align: middle;
    margin-top: ${rem('-1px')};
    font-size: ${rem('12px')};
  }
`;

export const Label = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding: ${rem('5px')} ${rem('7px')} ${rem('4px')};
  padding: ${p => 
    (p.big ? `${rem('6px')} ${rem('12px')} ${rem('5px')}` :
    `${rem('5px')} ${rem('7px')} ${rem('4px')}`)};
  color: ${p => p.theme.colors.white};
  background-color: ${p =>
    p.dir === 'up' ? p.theme.colors.green : p.theme.colors.orangeRed};
  border-radius: ${p => 
    (p.big ? p => p.theme.corners.secondary : p.theme.corners.primary)};
  font-size: ${p => 
    (p.big ? `${rem('24px')}` : `${rem('12px')}`)};
  font-weight: 600;
  letter-spacing: ${p => (p.big ? '1.7px' : '0.8px')};
  line-height: 1;
`;

const AccentDesc = styled(Desc)`
  margin-top: ${rem('5px')};
  color: ${p => p.theme.colors.slate};
  font-size: ${rem('11px')};
  line-height: 1;
  opacity: 0.6;
`;

const AccentTitle = styled(Title)`
  color: ${p => p.theme.colors.dark};
  font-size: ${rem('16px')};
`;

const ListItem = styled.div``;

// TODO: find me the better place to live
export const mapToProduct = x => ({
  ticker: x.AssetPair,
  price: x.LastPrice,
  change: x.PriceChange24H
});

export default class extends Component {
  state = {
    quotes: [],
    lyci: {
        ticker: 'LCI',
        price: 0,
        change: 0
    }
  };

  componentDidMount() {
      Promise.all([
        axios.get(`/indices/${LYCI_ASSET_INDEX}`),
        axios.get('/markets')
      ])
          .then(([lyci, markets]) => {
              this.setState({
                  lyci: {
                      ...this.state.lyci,
                      price: lyci.data.Value,
                      change: lyci.data.Return5D
                  }
              });
              let quotes = [];
              for (let i = 0; i < config.PRODUCTS.length; i++) {
                  const {ticker, name} = config.PRODUCTS[i];
                  const idx = markets.data.findIndex(x => x.AssetPair === ticker);
                  if (idx > -1) {
                      quotes.push({
                          ...mapToProduct(markets.data[idx]),
                          name
                      });
                  }
              }
              this.setState({
                  quotes
              });
          });
  }

  render() {
    const {
      quotes: [...rest],
      lyci
    } = this.state;
    return (
      <MarketList>
        <Grid>
          <Wrapper>
            <Row className="justify-content-between align-items-center">
              {lyci && (
                <Col>
                  <ListItem>
                    <Row className="align-items-center">
                      <Col>
                        <AccentTitle>
                          LyCI{' '}
                          <Value dir={lyci.change > 0 ? 'up' : 'down'}>
                            {lyci.price.toLocaleString()}
                          </Value>
                        </AccentTitle>
                        <AccentDesc>Lykke Crypto Index</AccentDesc>
                      </Col>
                      <Col className="clear-height">
                        <Label dir={lyci.change > 0 ? 'up' : 'down'}>
                            {lyci.change} %
                          {/*{lyci.change.toLocaleString(undefined, {*/}
                            {/*style: 'percent',*/}
                            {/*minimumFractionDigits: 2*/}
                          {/*})}*/}
                        </Label>
                      </Col>
                    </Row>
                  </ListItem>
                </Col>
              )}

              {rest.map(quote => (
                <Col key={quote.ticker} className="d-none d-lg-block">
                  <ListItem>
                    <Title>{quote.name}</Title>
                    <Desc>
                      ${quote.price}
                      <Value
                        green={quote.change > 0}
                        dir={quote.change > 0 ? 'up' : 'down'}
                      >
                        {quote.change.toLocaleString(undefined, {
                          style: 'percent',
                          minimumFractionDigits: 2
                        })}
                      </Value>
                    </Desc>
                  </ListItem>
                </Col>
              ))}
            </Row>
          </Wrapper>
        </Grid>
      </MarketList>
    );
  }
}
