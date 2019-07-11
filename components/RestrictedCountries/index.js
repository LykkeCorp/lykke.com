import React from 'react'
import styled from 'styled-components'

import {Col, Grid, Row} from "react-styled-flexboxgrid";

import { PolicyWrapper, List } from "../PrivacyPolicy/styled";

const RestrictedCountriesComponent = () => {
    return (
        <Grid className="container">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <PolicyWrapper className="text-container">
                        <h1>Restricted countries</h1>
                        <p>Due to the regulatory restrictions, we are not yet permitted to approve residents from following countries for full trading:</p>
                        <List>
                            <li>Afghanistan</li>
                            <li>Canada British Columbia, Quebec, and Saskatchewan</li>
                            <li>China</li>
                            <li>Iran</li>
                            <li>Iraq</li>
                            <li>Japan</li>
                            <li>Lebanon</li>
                            <li>Libya</li>
                            <li>Namibia</li>
                            <li>New Zealand</li>
                            <li>North Korea</li>
                            <li>Syria</li>
                            <li>United States</li>
                            <li>Yemen</li>
                        </List>
                    </PolicyWrapper>
                </Col>
            </Row>
        </Grid>
    )
}

export default RestrictedCountriesComponent