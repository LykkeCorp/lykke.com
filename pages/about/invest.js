import React from 'react'
import styled from "styled-components";

import Head from '../../components/Head'
import Lead from '../../components/About/Invest/Lead'
import Shares from '../../components/About/Invest/Shares'
import Disclosure from '../../components/About/Invest/Disclosure'
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
                Ownership structure
            </SectionWrapper>
            <SectionWrapper bgColor="rgba(234,237,239,.4)">
                <Disclosure/>
            </SectionWrapper >
            <SectionWrapper>
                Lykke feeds
            </SectionWrapper>
            <SectionWrapper bgColor="rgba(234,237,239,.4)">
                <Investors/>
            </SectionWrapper>
        </>
    )
}