import React from 'react';
import {Col, Grid, Row} from 'react-styled-flexboxgrid';

import {ApiFeesWrapper, ApiFeesTable} from './styled';

export const ApiFees = () => {
    const assetFees = {
        'AE': 0.4,
        'AGI': 0.5,
        'APPC': 1,
        'AUD': 1,
        'BNT': 0.2,
        'BTC': 0.0001,
        'CAD': 1,
        'CAN': 1.5,
        'CHF': 1,
        'CZK': 25,
        'DKK': 6,
        'ETH': 0.001,
        'EUR': 1,
        'EVX': 0.5,
        'GBP': 1,
        'GNT': 3,
        'HCP': 1,
        'HGT': 10,
        'HKD': 8,
        'HMQ': 4,
        'HUF': 250,
        'KEY': 50,
        'ILS': 3,
        'JPY': 100,
        'LC': 5,
        'LKK': 4,
        'LKK1Y': 4,
        'LKK2Y': 4,
        'LRC': 1.5,
        'LTC': 0.01,
        'MCO': 0.1,
        'MXN': 20,
        'NOK': 7,
        'NZD': 1,
        'OMG': 0.1,
        'PKT': 1,
        'POW': 1,
        'PPT': 0.04,
        'PLN': 3,
        'REP': 0.03,
        'RUB': 50,
        'SEK': 7,
        'SGD': 1,
        'SLR': 2,
        'SNM': 7,
        'TIME': 0.04,
        'TRY': 3,
        'USD': 1,
        'XAG': 0.04,
        'XAU': 0.002,
        'XPD': 0.002,
        'XPT': 0.002,
        'ZAR': 10,
        'ZRX': 1
    };

    return (
        <Grid className="container">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <ApiFeesWrapper className="text-container">
                        <h1>API Wallet fees, and limits</h1>
                        <h3>Fees</h3>
                        <p>Lykke does not charge trading fees.</p>
                        <h3>Minimal order limits</h3>
                        <ApiFeesTable>
                            <thead>
                                <tr>
                                    <td>
                                        <strong>Asset</strong>
                                    </td>
                                    <td>
                                        <strong>Min order size</strong>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(assetFees).map(key => (
                                    <tr>
                                        <td>{key}</td>
                                        <td>{assetFees[key]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </ApiFeesTable>
                    </ApiFeesWrapper>
                </Col>
            </Row>
        </Grid>
    )
}