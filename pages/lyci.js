import React, {Component} from 'react';
import axios from '../axios'

import Head from '../components/Head';
import Lead from '../components/LyCI/Lead';
import Invest from '../components/LyCI/Invest';
import Documentation from '../components/LyCI/Documentation';

import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { LYCI_ASSET_INDEX } = publicRuntimeConfig
import {mapToProduct} from '../components/MarketList';

class LyCI extends Component {
  state = {
    lyci: {},
    lyciChart: []
  };

  componentDidMount() {
    axios.get(`/indices/${LYCI_ASSET_INDEX}`)
      .then(res => {
        this.setState({
            lyci: res.data
        })
      });
    axios.get(`/indices/${LYCI_ASSET_INDEX}/history/Hour24`)
        .then(res => {
            this.setState({
                lyciChart: res.data
            })
        })
  }

  render() {
    const {lyci, lyciChart} = this.state;
    return (
      <>
        <Head
          title="Lykke – Buy and sell cryptocurrency and digital assets"
          description="Global marketplace for any kind of assets built on the top of blockchain technology"
        />
        <Lead lyci={lyci} lyciChart={lyciChart}/>
        <Invest />
        {lyci && <Documentation lyci={lyci} />}
      </>
    );
  }
}

export default LyCI;
