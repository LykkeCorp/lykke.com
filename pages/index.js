import React from 'react';

import Head from '../components/Head';
import Lead from '../components/Home/Lead';
import Chips from '../components/Home/Chips';
import Features from '../components/Home/Features';
import Actions from '../components/Home/Actions';
import Disclaimer from '../components/Home/Disclaimer';
import LykkeIndex from '../components/Home/LykkeIndex';
import News from '../components/Home/News';
import Team from '../components/Home/Team';
import Testimonials from '../components/Home/Testimonials';

const Home = ({posts}) => (
  <>
    <Head
      title="Buy & Sell Cryptocurrency & Bitcoin Online - Lykke"
      description="Lykke is a secure platform that makes it easy to buy, sell, and store cryptocurrency like Bitcoin, Ethereum, and more"
    />
    <Lead />
    <Chips />
    <Features />
    <LykkeIndex />
    <News posts={posts} />
    <Testimonials />
    <Team />

    <Actions />
    <Disclaimer />
  </>
);

export default Home;
