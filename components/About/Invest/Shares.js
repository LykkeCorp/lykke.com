import React from 'react'
import {rem} from 'polished'
import styled, { css } from "styled-components";

import TextSection from './TextSection'

const CenteredTitle = styled.h3`
  text-align: center;
  margin-bottom: 5rem;
`;

const TextSectionP = styled.p`
    line-height: ${rem('29px')};
    font-size: ${rem('18px')};
    color: ${p => p.theme.colors.dark}
`;

export default () => {
    return (
        <TextSection>
            <CenteredTitle>
                Lykke coins and shares
            </CenteredTitle>
            <TextSectionP>The share capital in the amount of <strong>CHF 128,569</strong> is divided into <strong>12,856,900</strong> fully-paid registered shares with a nominal value of CHF 0.01 per share.</TextSectionP>
            <TextSectionP>The shares are registered on blockchain. In total 1,285,690,000 Lykke coins (LKK) are issued. Each registered share of Lykke Corp corresponds to <strong>100</strong> Lykke coins.</TextSectionP>
        </TextSection>
    )
}