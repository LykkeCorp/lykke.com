import React from 'react';
import { Grid, Row, Col} from 'react-styled-flexboxgrid'
import styled from 'styled-components'

import Head from '../components/Head';
import Link from "next/link";
import {List, PolicyWrapper} from "../components/PrivacyPolicy/styled";

const MinHeightGrid = styled(Grid)`
  min-height: calc(100vh - 300px);
  border-bottom: 1px solid ${p => p.theme.colors.greyLight}
`;

const StyledPolicyWrapper = styled(PolicyWrapper)`
  border-bottom: none;
`

const LyciTos = (props) => {
    return (
        <>
            <Head
                title="Lykke – Buy and sell cryptocurrency and digital assets"
                description="Global marketplace for any kind of assets built on the top of blockchain technology"
            />
            <MinHeightGrid className="container">
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        <StyledPolicyWrapper className="text-container">
                            <h1>
                                Lyci terms of service
                            </h1>
                            <List>
                                <li>
                                    <Link href="https://lkefiles.blob.core.windows.net:443/lykkecom/LyCI%20SERVICE%20TOKEN%20-%20TERMS%20OF%20SERVICE%20-%2025.01.2019%20(FINAL).pdf"><a target="_blank">LyCI Service Token - Terms of Service</a></Link>
                                </li>
                                <li>
                                    <Link href="https://lkefiles.blob.core.windows.net:443/lykkecom/ANNEX_1_LyCI_SERVICE_TOKEN_Service.pdf"><a target="_blank">LyCI Service Token - Service Methodology</a></Link>
                                </li>
                            </List>
                        </StyledPolicyWrapper>
                    </Col>
                </Row>
            </MinHeightGrid>
        </>
    )
};

export default LyciTos