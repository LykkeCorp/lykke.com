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
    lyciChart: {
        hours24: [],
        days5: [],
        days30: []
    }
  };

  componentDidMount() {
    Promise.all([
        axios.get(`/indices/${LYCI_ASSET_INDEX}`),
        axios.get(`/indices/${LYCI_ASSET_INDEX}/history/Hour24`),
        axios.get(`/indices/${LYCI_ASSET_INDEX}/history/Day5`),
        axios.get(`/indices/${LYCI_ASSET_INDEX}/history/Day30`),
    ]).then(([lyciData, chart24h, chart5d, chart30d]) => {
        this.setState({
            lyci: lyciData.data,
            lyciChart: {
                ...this.state.lyciChart,
                hours24: chart24h.data,
                days5: chart5d.data,
                days30: chart30d.data
            }
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
