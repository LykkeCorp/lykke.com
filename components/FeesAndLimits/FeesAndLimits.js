import React from 'react';
import {Col, Grid, Row} from 'react-styled-flexboxgrid';
import Link from 'next/link';

import {FeesAndLimitsWrapper, List, TextLink, FeesAndLimitsTable, AssetLimitsTable} from './styled';

export const FeesAndLimits = () => {
    const assetFees = [
        {
            name: 'AE',
            minWithdraw: 0.4,
            fee: 1.6
        },
        {
            name: 'AGI',
            minWithdraw: 0.5,
            fee: 8
        },
        {
            name: 'AION',
            minWithdraw: 0.25,
            fee: 1
        },
        {
            name: 'AIR',
            minWithdraw: 90,
            fee: 360
        },
        {
            name: 'AMLT',
            minWithdraw: 0.3,
            fee: 1.4
        },
        {
            name: 'APPC',
            minWithdraw: 1,
            fee: 5
        },
        {
            name: 'BCH',
            minWithdraw: 0.001,
            fee: 0.001
        },
        {
            name: 'BMC',
            minWithdraw: 1.8,
            fee: 6.5
        },
        {
            name: 'BNT',
            minWithdraw: 0.2,
            fee: 0.8
        },
        {
            name: 'BSV',
            minWithdraw: 0.001,
            fee: 0.001
        },
        {
            name: 'BTC',
            minWithdraw: 0.0007,
            fee: 0.0005
        },
        {
            name: 'BTG',
            minWithdraw: 0.005,
            fee: 0.1
        },
        {
            name: 'BTS',
            minWithdraw: 20,
            fee: 1
        },
        {
            name: 'CAN',
            minWithdraw: 1.5,
            fee: 6
        },
        {
            name: 'CLN',
            minWithdraw: 10,
            fee: 35
        },
        {
            name: 'CVC',
            minWithdraw: 3,
            fee: 13
        },
        {
            name: 'DASH',
            minWithdraw: 0.003,
            fee: 0.002
        },
        {
            name: 'DAT',
            minWithdraw: 35,
            fee: 140
        },
        {
            name: 'DEB',
            minWithdraw: 8,
            fee: 30
        },
        {
            name: 'DENT',
            minWithdraw: 100,
            fee: 400
        },
        {
            name: 'DNT',
            minWithdraw: 16,
            fee: 60
        },
        {
            name: 'DTH',
            minWithdraw: 12,
            fee: 55
        },
        {
            name: 'ENG',
            minWithdraw: 0.4,
            fee: 1.6
        },
        {
            name: 'EOS',
            minWithdraw: 2,
            fee: 0.1
        },
        {
            name: 'EOSold',
            minWithdraw: 0.1,
            fee: 0.5
        },
        {
            name: 'ETC',
            minWithdraw: 0.001,
            fee: 0.15
        },
        {
            name: 'ETH',
            minWithdraw: 0.02,
            fee: 0.005
        },
        {
            name: 'ETHOS',
            minWithdraw: 0.4,
            fee: 1.5
        },
        {
            name: 'ETM',
            minWithdraw: 4,
            fee: 20
        },
        {
            name: 'EVX',
            minWithdraw: 0.5,
            fee: 2.5
        },
        {
            name: 'FDZ',
            minWithdraw: 40,
            fee: 200
        },
        {
            name: 'FREC',
            minWithdraw: 50,
            fee: 250
        },
        {
            name: 'GAT',
            minWithdraw: 30,
            fee: 170
        },
        {
            name: 'GCP',
            minWithdraw: 1,
            fee: 4.8
        },
        {
            name: 'GCPold',
            minWithdraw: 1,
            fee: 4.8
        },
        {
            name: 'GNO',
            minWithdraw: 0.006,
            fee: 0.023
        },
        {
            name: 'GNT',
            minWithdraw: 3,
            fee: 12
        },
        {
            name: 'GVT',
            minWithdraw: 0.03,
            fee: 0.1
        },
        {
            name: 'HBZ',
            minWithdraw: 50,
            fee: 250
        },
        {
            name: 'HGT',
            minWithdraw: 10,
            fee: 60
        },
        {
            name: 'HVN',
            minWithdraw: 15,
            fee: 70
        },
        {
            name: 'ICX',
            minWithdraw: 0.25,
            fee: 1.45
        },
        {
            name: 'IND',
            minWithdraw: 15,
            fee: 70
        },
        {
            name: 'IOST',
            minWithdraw: 20,
            fee: 80
        },
        {
            name: 'IPS',
            minWithdraw: 2,
            fee: 5
        },
        {
            name: 'KEY',
            minWithdraw: 50,
            fee: 250
        },
        {
            name: 'LC',
            minWithdraw: 5,
            fee: 40
        },
        {
            name: 'LGL',
            minWithdraw: 0.03,
            fee: 0.15
        },
        {
            name: 'LOC',
            minWithdraw: 1,
            fee: 4
        },
        {
            name: 'LRC',
            minWithdraw: 1.5,
            fee: 8
        },
        {
            name: 'LTC',
            minWithdraw: 0.04,
            fee: 0.001
        },
        {
            name: 'MANA',
            minWithdraw: 10,
            fee: 50
        },
        {
            name: 'MSP',
            minWithdraw: 8,
            fee: 30
        },
        {
            name: 'MTL',
            minWithdraw: 0.25,
            fee: 0.8
        },
        {
            name: 'MWAT',
            minWithdraw: 10,
            fee: 40
        },
        {
            name: 'MYST',
            minWithdraw: 3,
            fee: 15
        },
        {
            name: 'old_PCL',
            minWithdraw: 0,
            fee: 1800
        },
        {
            name: 'OMG',
            minWithdraw: 0.1,
            fee: 0.35
        },
        {
            name: 'PASS',
            minWithdraw: 2,
            fee: 10
        },
        {
            name: 'PKT',
            minWithdraw: 1,
            fee: 3
        },
        {
            name: 'POWR',
            minWithdraw: 1,
            fee: 6.09
        },
        {
            name: 'PPT',
            minWithdraw: 0.04,
            fee: 0.12
        },
        {
            name: 'QNTU',
            minWithdraw: 150,
            fee: 600
        },
        {
            name: 'REP',
            minWithdraw: 0.03,
            fee: 0.08
        },
        {
            name: 'REQ',
            minWithdraw: 6,
            fee: 14
        },
        {
            name: 'SLR',
            minWithdraw: 0,
            fee: 0.001
        },
        {
            name: 'SNM',
            minWithdraw: 7,
            fee: 20
        },
        {
            name: 'STORJ',
            minWithdraw: 1,
            fee: 4
        },
        {
            name: 'SUB',
            minWithdraw: 2,
            fee: 9
        },
        {
            name: 'TIME',
            minWithdraw: 0.04,
            fee: 0.15
        },
        {
            name: 'TREE',
            minWithdraw: 0,
            fee: 5
        },
        {
            name: 'VEE',
            minWithdraw: 25,
            fee: 100
        },
        {
            name: 'VIB',
            minWithdraw: 8,
            fee: 30
        },
        {
            name: 'VLD',
            minWithdraw: 15,
            fee: 60
        },
        {
            name: 'WAX',
            minWithdraw: 2.5,
            fee: 12
        },
        {
            name: 'WPR',
            minWithdraw: 10,
            fee: 50
        },
        {
            name: 'WTC',
            minWithdraw: 0.2,
            fee: 0.5
        },
        {
            name: 'XLM',
            minWithdraw: 22,
            fee: 0.01
        },
        {
            name: 'XRP',
            minWithdraw: 20,
            fee: 0.25
        },
        {
            name: 'ZEC',
            minWithdraw: 0.003,
            fee: 0.005
        },
        {
            name: 'ZIL',
            minWithdraw: 0,
            fee: 40.7
        },
        {
            name: 'ZRX',
            minWithdraw: 1,
            fee: 4
        }
    ];

    return (
        <Grid className="container">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <FeesAndLimitsWrapper className="text-container">
                        <h1>Fees, limits and account levels</h1>
                        <h3>Trading</h3>
                        <p>There are no fees for trading.</p>
                        <h3>Fees and limits for cryptocurrency transactions</h3>
                        <h4>for Deposits</h4>
                        <p>There are no fees or limits for cryptocurrency deposits.</p>
                        <h4>for Withdrawals</h4>
                        <p>There are no maximum withdrawal limits.</p>
                        <p>All withdrawal operations have the following fees and minimum limits:</p>
                        <FeesAndLimitsTable>
                            <thead>
                                <tr>
                                    <td><strong>Asset</strong></td>
                                    <td><strong>Minimum withdrawal</strong></td>
                                    <td><strong>Withdrawal transaction fee</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                {assetFees.map(asset => (
                                    <tr>
                                        <td>{asset.name}</td>
                                        <td>{asset.minWithdraw}</td>
                                        <td>{asset.fee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </FeesAndLimitsTable>
                        <h3>Fees and limits for fiat transactions</h3>
                        <p>Deposits can be made via credit card and wire transfer in the following currencies: CHF, EUR, GBP.</p>
                        <p>USD is available only for withdrawals.</p>
                        <h4>Fees for Deposits via credit card:</h4>
                        <List>
                            <li>Deposit transaction fee is 3.9%.</li>
                        </List>
                        <h4>Fees for Deposits via wire transfer:</h4>
                        <List>
                            <li>There is no fee for deposits.</li>
                        </List>
                        <h4>Account Levels</h4>

                        <p>Deposit amounts are based on the approved level for your account. Please review the levels you may have after signing up for a Lykke account:</p>
                        <List>
                          <li>Beginner</li>
                          <li>Advanced</li>
                          <li>Pro Individual</li>
                        </List>

                        <p>More information on account levels can be found <Link href="https://support.lykke.com/hc/en-us/articles/360010340059-Account-levels-and-Limits-for-fiat-"><TextLink href="https://support.lykke.com/hc/en-us/articles/360010340059-Account-levels-and-Limits-for-fiat-">here</TextLink></Link>.</p>
                        <p>Please note that  limits may vary according to your country of residence. These limits were set based on the AML Basel Index, FATF high risk jurisdiction list and EU high risk third country list.</p>
                        <p>To ensure you can avail of our product offering please refer to our list of unsupported countries <Link href="/restricted-countries"><TextLink href="/restricted-countries">here</TextLink></Link>.</p>
                        <p>Requirements: NO third party deposits or withdrawals are accepted. Customers can use only their personal bank accounts or credit cards.</p>
                        
                        <h4>Withdrawals to credit card</h4>
                        <p>
                          <u>NOT</u> available
                        </p>

                        <h4>Withdrawals to bank account</h4>
                        <List>
                          <li>Lykke does not charge any fees for withdrawal operations. Please note that the receiving or intermediary banks might charge a fee for the operation.</li>
                          <li>Maximum withdrawal is based on the approved level of your account.</li>
                        </List>

                        <p>Note that the following minimum amount is applied for wire transfer regardless of the account level for <strong>deposits and withdrawals</strong>. If the transferred amount is less than indicated below, Lykke may not accept it. </p>
                        <AssetLimitsTable>
                            <thead>
                                <tr>
                                    <td><strong>Asset</strong></td>
                                    <td><strong>Minimum deposit</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Swiss franc</td>
                                    <td>50 CHF</td>
                                </tr>
                                <tr>
                                    <td>United States dollar</td>
                                    <td>50 USD</td>
                                </tr>
                                <tr>
                                    <td>Euro</td>
                                    <td>50 EUR</td>
                                </tr>
                                <tr>
                                    <td>Pound sterling</td>
                                    <td>50 GBP</td>
                                </tr>
                            </tbody>                    
                        </AssetLimitsTable>
                    </FeesAndLimitsWrapper>
                </Col>
            </Row>
        </Grid>
    )
}


