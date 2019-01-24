import React from 'react';
import {Col, Grid, Row} from 'react-styled-flexboxgrid';
import Link from 'next/link';
import {Nav} from '../../components/Nav/Nav';

import {FeesAndLimitsWrapper, List, TextLink, FeesAndLimitsTable, AssetLimitsTable} from './styled';

export const FeesAndLimits = () => {
    const navItems = [
        {
            href: '/wallet-fees-and-limits',
            active: true,
            text: 'Fees and limits'
        },
        {
            href: 'https://blockchainexplorer.lykke.com/',
            text: 'Blockchain explorer'
        }
    ];
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
            <Row>
                <Col md={12}>
                    <Nav items={navItems} />
                    <FeesAndLimitsWrapper>
                        <h1>Fees and limits</h1>
                        <h3>Trading</h3>
                        <p>There are no fees for trading.</p>
                        <h3>Fees and limits for cryptocurrency transactions</h3>
                        <br />
                        <p>AE, AGI, AION, AIR, AMLT, APPC, BCH, BMC, BNT, BSV, BTC, BTG, BTS, CAN, CLN, CVC, DASH, DAT, DEB, DENT, DNT, DTH, ENG, EOS, EOSold, ETC, ETH, ETHOS, ETM, ETM, EVX, FDZ, FREC, GAT, GCP, GCPold, GNO, GNT, GVT, HBZ, HGT, HVN, ICX, IND, IOST, IPS, KEY, LC, LGL, LOC, LRC, LTC, MANA, MSP, MTL, MWAT, MYST, old_PCL, OMG, PASS, PKT, POWR, PPT, QNTU, REP, REQ, SLR, SNM, STORJ, SUB, TIME, TREE, VEE, VIB, VLD, WAX, WPR, WTC, XLM, XRP, ZEC, ZIL, ZRX</p>
                        <br />
                        <h4>for Deposits</h4>
                        <p>There are no fees or limits for cryptocurrency deposits.</p>
                        <h4>for Withdrawals</h4>
                        <p>There are no maximum withdrawal limits.</p>
                        <p>All withdrawal operations including transfer from Trading Wallet to Private Wallet have the following fees and minimum limits:</p>
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
                        <br />
                        <h3>Fees and limits for credit cards and payment systems</h3>
                        <p><strong>CHF, USD, EUR, GBP</strong></p>
                        <h4>for Deposits</h4>
                        <List>
                            <li>Deposit transaction fee is 3.9%</li>
                            <li>There's a 3 transaction limit a day</li>
                            <li>There's a $3 000 (or equal amount in other currency) per transaction limit</li>
                            <li>There's a $16 000 (or equal amount in other currency) monthly limit</li>
                            <li>All of these numbers are fixed</li>
                        </List>
                        <p>Based on our current logic for monthly limit, the reset does not depend on the 1st day of the month. It depends on the day when you started depositing. For example, for credit card limit = 16 000 USD for 30 days. If you deposited 8 000 from the credit card on the 1st of November, then 3 000 on 11/02 and 5 000 on 11/30, you will be able to deposit 8 000 USD on the 1st of December, then 3 000 USD on 12/02 and 5 000 on 12/30.</p>
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
                                    <td>1 CHF</td>
                                </tr>
                                <tr>
                                    <td>United States dollar</td>
                                    <td>1 USD</td>
                                </tr>
                                <tr>
                                    <td>Euro</td>
                                    <td>1 EUR</td>
                                </tr>
                                <tr>
                                    <td>Pound sterling</td>
                                    <td>1 GBP</td>
                                </tr>
                            </tbody>                    
                        </AssetLimitsTable>
                        <p><strong>Requirements:</strong> KYC, Credit Card matching with Lykke Wallet details (No card on the third person)</p>
                        <h4>for Withdrawals</h4>
                        <p>Withdrawals not allowed</p>
                        <h3>Bank wire fees and limits</h3>
                        <p><strong>CHF, EUR, GBP, USD</strong></p>
                        <h4>for Deposits</h4>
                        <List>
                            <li>There is no fee for deposits</li>
                            <li>Maximum deposit is 1 000 000 USD (or equal amount in other currency)</li>
                        </List>
                        <p>If a single transfer (or cumulative of multiple transfers) is less than 17 000 USD per month (or equal amount for other currencies), then regular KYC will apply. In case a single transfer or cumulative of multiple transfers is above 17 000 USD, then the compliance team will follow Enhanced KYC procedure including the request for Proof of Funds. Please note that the funds are not granted until the enhanced KYC is passed successfully.</p>
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
                        <h4>for Withdrawals</h4>
                        <List>
                            <li>Lykke does not charge any fees for withdrawal operations.<br />Please note, that receiving or intermediary banks might charge a fee for the operation.</li>
                            <li>Maximum withdrawal is 1 000 000 USD (or equal amount in other currency)</li>
                        </List>      
                        <p>In case a single withdrawal (or cumulative of multiple withdrawals) is above 17 000 USD; if Enhanced KYC is requested at the fiat deposit stage, there will be no additional requirements, if Enhanced KYC has not been required at the deposit stage (multiple small deposits less than 17 000 USD / month) then the Compliance Team will follow Enhanced KYC procedure including request for Proof of Funds; In case the source of the withdrawal is crypto assets and the client requests a single withdrawal (or cumulative of multiple withdrawals) above 17 000 USD then the Lykke Compliance Team will follow Enhanced KYC Procedure including request for Proof of Funds. Please note that Lykke is required to act in accordance with AML/CTF rules.</p>
                        <AssetLimitsTable>
                            <thead>
                                <tr>
                                    <td><strong>Asset</strong></td>
                                    <td><strong>Minimum withdrawal</strong></td>
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
                        <h2>Limitations</h2>
                        <p>Due to the regulatory restrictions, we are not yet permitted to onboard residents from this <Link href="/restricted-countries"><TextLink>country list</TextLink></Link>.</p>  
                    </FeesAndLimitsWrapper>
                </Col>
            </Row>
        </Grid>
    )
}


