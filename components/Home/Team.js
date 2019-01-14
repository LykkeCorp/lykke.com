import React from 'react';
import {Grid} from 'react-styled-flexboxgrid';
import Button from '../Button';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { WALLET_URL } = publicRuntimeConfig

import {Section, SectionHeader, SectionLink} from './styled';

export default () => (
  <Section grey>
    <Grid className="container">
      <SectionHeader>
        <h3>Join the voices of the future of finance</h3>
      </SectionHeader>

      <SectionLink>
        <Button href={WALLET_URL}>Sign up</Button>
      </SectionLink>
    </Grid>
  </Section>
);
