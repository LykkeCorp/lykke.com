import React from 'react';

import {rem} from 'polished'
import styled, { css } from "styled-components";

import TextSection from './TextSection'

const CenteredTitle = styled.h3`
  text-align: center;
  margin-bottom: 5rem;
`;

export default () => {
    return (
        <TextSection>
            <CenteredTitle>Investors about Lykke</CenteredTitle>
        </TextSection>
    )
}