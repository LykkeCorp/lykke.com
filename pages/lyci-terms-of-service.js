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
                                    <Link href="https://info.lykke.com/wp-content/uploads/2019/10/LyCI-SERVICE-TOKEN-TERMS-OF-SERVICE-25.01.2019-FINAL.pdf"><a target="_blank">LyCI Service Token - Terms of Service</a></Link>
                                </li>
                                <li>
                                    <Link href="https://info.lykke.com/wp-content/uploads/2019/03/ANNEX_1_LyCI_SERVICE_TOKEN_Service.pdf"><a target="_blank">LyCI Service Token - Service Methodology</a></Link>
                                </li>
                                <li>
                                    <Link href="https://info.lykke.com/wp-content/uploads/2019/10/PayLyCI-SERVICE-TOKEN-TERMS-OF-SERVICE-20.03.2019-FINAL.pdf"><a target="_blank">PayLyCI Service Token - Terms of Service</a></Link>
                                </li>
                                <li>
                                    <Link href="https://info.lykke.com/wp-content/uploads/2019/03/ANNEX-1-PayLyCI-SERVICE-TOKEN-Service-Methodology-20.03.2019-FINAL-1.pdf"><a target="_blank">PayLyCI Service Token - Service Methodology</a></Link>
                                </li>
                                <li>
                                    <Link href="https://info.lykke.com/wp-content/uploads/2019/10/SmartLyCI-SERVICE-TOKEN-TERMS-OF-SERVICE-20.03.2019-FINAL.pdf"><a target="_blank">SmartLyCI Service Token - Terms of Service</a></Link>
                                </li>
                                <li>
                                    <Link href="https://info.lykke.com/wp-content/uploads/2019/03/ANNEX-1-SmartLyCI-SERVICE-TOKEN-Service-Methodology-20.03.2019-FINAL.pdf"><a target="_blank">SmartLyCI Service Token - Service Methodology</a></Link>
                                </li>
                                <li>
                                    <Link href="https://info.lykke.com/wp-content/uploads/2019/10/SHORT-LyCI-SERVICE-TOKEN-TERMS-OF-SERVICE-1.pdf"><a target="_blank">Short LyCI Service Token - Terms of Service</a></Link>
                                </li>
                                <li>
                                    <Link href="https://info.lykke.com/wp-content/uploads/2019/10/Annex1_Service-Methodology_Short-LyCI.pdf"><a target="_blank">Short LyCI Service Token - Service Methodology</a></Link>
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