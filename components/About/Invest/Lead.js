import React from 'react';
import styled from 'styled-components'

import { leadItems } from "./config";

import {Col, Grid, Row} from "react-styled-flexboxgrid";

import LeadItem from './LeadItem'

const CenteredTitle = styled.h1`
  text-align: center;
  margin-bottom: 5rem;
`;

const Lead = () => {
    // Hardcoded items, probably replace with some API results

    const itemSettings = leadItems.map((item, i) => (
        <Col xs={12} sm={6} md={3} key={i}>
            <LeadItem settings={item}/>
        </Col>
    ));
    return (
        <Grid className="container">
            <Row>
                <Col xs={12} sm={12} md={12}>
                    <CenteredTitle>Invest</CenteredTitle>
                </Col>
            </Row>
            <Row>
                {itemSettings}
            </Row>
        </Grid>
    )
}

export default Lead