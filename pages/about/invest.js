import React from 'react'
import styled from "styled-components";

import Head from '../../components/Head'
import Lead from '../../components/About/Invest/Lead'
import Shares from '../../components/About/Invest/Shares'
import OwnershipStructure from '../../components/About/Invest/OwnershipStructure'
import Disclosure from '../../components/About/Invest/Disclosure'
import Feeds from '../../components/About/Invest/Feeds'
import Investors from '../../components/About/Invest/Investors'

const SectionWrapper = styled.section`
  padding: 4rem 0;
  background-color: ${p => p.bgColor}
`;

export default () => {
    return (
        <>
            <Head/>
            <SectionWrapper>
                <Lead/>
            </SectionWrapper>
            <SectionWrapper bgColor="rgba(234,237,239,.4)">
                <Shares/>
            </SectionWrapper>
            <SectionWrapper>
                <OwnershipStructure/>
            </SectionWrapper>
            <SectionWrapper bgColor="rgba(234,237,239,.4)">
                <Disclosure/>
            </SectionWrapper>
            <SectionWrapper>
                <Feeds/>
            </SectionWrapper>
            <SectionWrapper bgColor="rgba(234,237,239,.4)">
                <Investors/>
            </SectionWrapper>
        </>
    )
}