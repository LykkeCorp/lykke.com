import React from 'react';

import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import {rem} from 'polished'
import styled, { css } from "styled-components";

import { investorItems } from "./config";

import TextSection from './TextSection'
import InvestorsItem from './InvestorsItem'

const CenteredTitle = styled.h3`
  text-align: center;
  margin-bottom: 5rem;
`;

const ItemsList = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 30px;
    grid-auto-rows: 10px;
    max-width: 720px;
    margin: 0 auto;
    @media all and (max-width: 768px) {
        grid-template-columns: 1fr
    }
`



export default () => {
    const mapItems = (items) => items.map((item, i) => <InvestorsItem key={i} author={item.author} authorInfo={item.authorInfo} text={item.text}/>);
    return (
        <Grid className="container">
            <Row>
                <Col xs={12} sm={12} lg={12}>
                    <CenteredTitle>Investors about Lykke</CenteredTitle>
                    <ItemsList>
                        {mapItems(investorItems)}
                    </ItemsList>
                </Col>
            </Row>
        </Grid>
    )
}