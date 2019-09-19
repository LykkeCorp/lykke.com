import React from 'react';
import styled from 'styled-components';

import Head from '../components/Head';
import Actions from '../components/Home/Actions';
import Disclaimer from '../components/Home/Disclaimer';
import LykkeIndex from '../components/Home/LykkeIndex';
import News from '../components/Home/News';
import Team from '../components/Home/Team';

import Lead from '../components/Trade/Lead';
import Chips from '../components/Trade/Chips';
import Features from '../components/Trade/Features';

import {SectionHeader} from '../components/Home/styled';

export const Dark = styled.div`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.inverse};

  ${SectionHeader} p,
  .lead {
    color: ${p => p.theme.colors.greyBluey};
  }
`;

const Trade = () => (
  <>
    <Head
      title="Trade Bitcoin & Cryptocurrency 0% Trading Fees - Lykke"
      description="Swiss based digital asset exchange with trading & FX Easily deposit funds with Lykke, bank transfer, wire transfer, or digital currency with zero fees!"
    />
    <Dark>
      <Lead />
      <Chips />
      <Features />
    </Dark>
    <LykkeIndex />
    <News />
    <Team />

    <Actions />
    <Disclaimer />
  </>
);

export default Trade;
