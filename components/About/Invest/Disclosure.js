import React from 'react'
import {rem} from 'polished'
import styled, { css } from "styled-components";

import { disclosureItems } from './config';

import TextSection from './TextSection'
import DisclosureItem from './DisclosureItem'

const CenteredTitle = styled.h3`
  text-align: center;
  margin-bottom: 5rem;
`;

export default props => {
    const items = disclosureItems.map((item, i) => {
        return (
            <DisclosureItem settings={item} key={i}/>
        )
    });
    return (
        <TextSection>
            <CenteredTitle>
                Information disclosure
            </CenteredTitle>
            {items}
        </TextSection>
    )
}