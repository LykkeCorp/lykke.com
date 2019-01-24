import React from 'react';

import {rem} from 'polished'
import styled, { css } from "styled-components";

import TextSection from './TextSection'
import InvestorsItem from './InvestorsItem'

const CenteredTitle = styled.h3`
  text-align: center;
  margin-bottom: 5rem;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill);
`

export default () => {
    return (
        <TextSection>
            <CenteredTitle>Investors about Lykke</CenteredTitle>

        </TextSection>
    )
}