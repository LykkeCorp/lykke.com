import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import config from '../../config';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { LYCI_ASSET_INDEX, P_LYCI_ASSET_INDEX, SC_LYCI_ASSET_INDEX, LYCIUSD_ASSET_PAIR } = publicRuntimeConfig

import axios from '../../axios'

import { MarketList, Wrapper, ListItem, Title, Desc, Value } from './styled';
import LyciMarketList from './LyciMarketList'

// TODO: find me the better place to live
export const mapToProduct = x => ({
  ticker: x.AssetPair,
  price: x.LastPrice.toFixed(2),
  change: `${(x.PriceChange24H*100).toFixed(2)}`
});

const MARKETS_INTERVAL = 5000;

export default class extends Component {
  state = {
    quotes: [],
    lyci: {
        name: '',
        price: 0,
        change: 0
    },
    pLyci: {
        name: '',
        price: 0,
        change: 0
    },
    scLyci: {
        name: '',
        price: 0,
        change: 0
    },
    lyciUsd: {
        name: '',
        price: 0,
        change: 0
    },
    showCount: 0,
    sliderStarted: false
  };

  startLyciSlider = (numOfSlides) => {
      return setInterval(() => {
          if(this.state.showCount < (numOfSlides-1)) {
              this.setState((prevState) => ({showCount: ++prevState.showCount, sliderStarted: true}))
          } else {
              this.setState({showCount: 0, sliderStarted: false})
          }
      }, 3000);
  };

  componentDidMount() {
    this.fetchIndicesAndMarkets();
  }

  fetchIndicesAndMarkets() {
      Promise.all([
        axios.get(`/indices/${LYCI_ASSET_INDEX}`),
        axios.get(`/indices/${P_LYCI_ASSET_INDEX}`),
        axios.get(`/indices/${SC_LYCI_ASSET_INDEX}`),
        axios.get('/markets')
      ])
          .then(([lyci, pLyci, scLyci, markets]) => {
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
              const lyciIdx = markets.data.findIndex(x => x.AssetPair === LYCIUSD_ASSET_PAIR);
              let lyciToUsd;
              if (lyciIdx > -1) {
                  lyciToUsd = mapToProduct(markets.data[lyciIdx]);
              }
              this.setState({
                  lyci: {
                      ...this.state.lyci,
                      name: lyci.data ? lyci.data.Name : '',
                      price: lyci.data ? lyci.data.Value : '',
                      change: lyci.data ? `${lyci.data.Return24H}` : ''
                  },
                  pLyci: {
                      ...this.state.pLyci,
                      name: pLyci.data ? pLyci.data.Name : '',
                      price: pLyci.data ? pLyci.data.Value : '',
                      change: pLyci.data ? `${pLyci.data.Return24H}` : ''
                  },
                  scLyci: {
                      ...this.state.scLyci,
                      name: scLyci.data ? scLyci.data.Name : '',
                      price: scLyci.data ? scLyci.data.Value : '',
                      change: scLyci.data ? `${scLyci.data.Return24H}` : ''
                  },
                  lyciUsd: {
                      ...this.state.lyciUsd,
                      name: 'LyCI',
                      price: `$ ${lyciToUsd.price}`,
                      change: `${lyciToUsd.change}`
                  },
                  quotes,
              });
              if (!this.state.sliderStarted) {
                this.startLyciSlider(4);
              }
              // get new values every a few seconds
              setTimeout(() => this.fetchIndicesAndMarkets, MARKETS_INTERVAL);
          });
  }

  componentWillUnmount() {
      clearInterval(this.startLyciSlider())
  }

  render() {
    const {
      quotes: [...rest],
      lyci,
      pLyci,
      scLyci,
      lyciUsd
    } = this.state;
    return (
      <MarketList>
        <Grid>
          <Wrapper>
            <Row className="justify-content-between align-items-center">
              {lyci && (
                <Col xs={12} md={3}>
                  <ListItem>
                    <Row className="align-items-center">
                        {/*POSSIBLE CHANGES DO NOT REMOVE COMMENTED CODE FOR NOW*/}

                        <LyciMarketList lyci={lyci} show={this.state.showCount === 0} name="LyCI" desc="Lykke Crypto Index"/>
                        <LyciMarketList lyci={pLyci} show={this.state.showCount === 1} name="PLYCI" desc="Top-10 Payment Coins"/>
                        <LyciMarketList lyci={scLyci} show={this.state.showCount === 2} name="SLYCI" desc="Top-10 Smart Contract Coins"/>
                        <LyciMarketList black lyci={lyciUsd} show={this.state.showCount === 3} name="LYCI" desc="LyCI Service Token"/>
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
                        {(quote.change).toLocaleString(undefined, {
                          style: 'percent',
                          minimumFractionDigits: 2
                        })} %
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
