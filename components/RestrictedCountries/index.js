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
                            <li>American Samoa</li>
                            <li>Anguilla</li>
                            <li>Antarctica</li>
                            <li>Bonaire, Sint Eustatius and Saba</li>
                            <li>Bouvet Island</li>
                            <li>British Indian Ocean Territory</li>
                            <li>Cabo Verde</li>
                            <li>Canada British Columbia, Quebec, and Saskatchewan</li>
                            <li>Chad</li>
                            <li>China</li>
                            <li>Christmas Island</li>
                            <li>Cocos (Keeling) Islands</li>
                            <li>Comoros</li>
                            <li>Congo (Democratic Republic of the)</li>
                            <li>Curaçao</li>
                            <li>Eritrea</li>
                            <li>French Guiana</li>
                            <li>French Polynesia</li>
                            <li>French Southern Territories</li>
                            <li>Greenland</li>
                            <li>Guadeloupe</li>
                            <li>Guam</li>
                            <li>Guinea-Bissau</li>
                            <li>Guyana</li>
                            <li>Haiti</li>
                            <li>Heard Island and McDonald Islands</li>
                            <li>Holy See</li>
                            <li>Iran</li>
                            <li>Iraq</li>
                            <li>Japan</li>
                            <li>Kiribati</li>
                            <li>Korea (Democratic People’s Republic of)</li>
                            <li>Lao People’s Democratic Republic</li>
                            <li>Lebanon</li>
                            <li>Liberia</li>
                            <li>Libya</li>
                            <li>Macao</li>
                            <li>Madagascar</li>
                            <li>Maldives</li>
                            <li>Marshall Islands</li>
                            <li>Martinique</li>
                            <li>Mayotte</li>
                            <li>Micronesia (Federated States of)</li>
                            <li>Mongolia</li>
                            <li>Myanmar</li>
                            <li>Namibia</li>
                            <li>Nauru</li>
                            <li>New Zealand</li>
                            <li>Niue</li>
                            <li>North Korea</li>
                            <li>Northern Mariana Islands</li>
                            <li>Palau</li>
                            <li>Papua New Guinea</li>
                            <li>Pitcairn</li>
                            <li>Réunion</li>
                            <li>Saint Barthélemy</li>
                            <li>Saint Helena, Ascension and Tristan da Cunha</li>
                            <li>Saint Martin (French part)</li>
                            <li>Saint Pierre and Miquelon</li>
                            <li>Sao Tome and Principe</li>
                            <li>Senegal</li>
                            <li>Seychelles</li>
                            <li>Sierra Leone</li>
                            <li>Sint Maarten (Dutch part)</li>
                            <li>Solomon Islands</li>
                            <li>South Georgia and the South Sandwich Islands</li>
                            <li>South Sudan</li>
                            <li>Suriname</li>
                            <li>Svalbard and Jan Mayen</li>
                            <li>Swaziland</li>
                            <li>Syria</li>
                            <li>Timor-Leste</li>
                            <li>Tokelau</li>
                            <li>United States</li>
                            <li>United States Minor Outlying Islands</li>
                            <li>Virgin Islands (U.S.)</li>
                            <li>Wallis and Futuna</li>
                            <li>Western Sahara</li>
                            <li>Yemen</li>
                        </List>
                    </PolicyWrapper>
                </Col>
            </Row>
        </Grid>
    )
}

export default RestrictedCountriesComponent