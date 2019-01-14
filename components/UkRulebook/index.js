import React from 'react'
import styled from 'styled-components'

import {Col, Grid, Row} from "react-styled-flexboxgrid";
import Link from 'next/link';

import { PolicyWrapper, List, TextLink } from "../PrivacyPolicy/styled";

const LotSizeTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    flex: 0 0 50%;
  }
`

const RulebookComponent = () => {
    return (
        <Grid className="container">
            <Row>
                <Col xs={12} sm={12} md={12}>
                    <PolicyWrapper>
                        <h1>Lykke Corp UK Rulebook</h1>
                        <p>20 JUNE 2018</p>
                        <h3>DEFINITIONS</h3>
                        <p>The official definitions are in the Lykke Rules.</p>
                        <p>Automatic Order Matching — The process in the order book whereby sell and buy orders are matched automatically when price, volume and other specifications for a given order correspond with order(s) previously entered in the order book.</p>
                        <p><strong>BBO</strong> — Best Bid Offer of an order book.</p>
                        <p><strong>Limit Order</strong> — A Limit order stipulates a maximum purchase price or minimum selling price.</p>
                        <p><strong>Market Order</strong> — A market order is an order to sell or buy an instrument at the current market price.</p>
                        <p><strong>Round Lot</strong> — The minimum volume for an instrument which is used for certain statistics and calculations.</p>
                        <p><strong>Trading Hours</strong> — Trading Hours for each market segment are found below in this document. Trading Hours start from the Uncross of the opening call and end at the transition to the Terminating session.</p>
                        <p><strong>Uncross</strong> — A call ends with an Uncross where price determination and share allocation together with order and trade information dissemination take place. Uncross lasts a short time, usually a fraction of a second.</p>
                        <h3>OVERVIEW</h3>
                        <p>This document describes the functionalities for trading on Lykke: the market structure, instrument types traded, trading methods, the registration of OTC-trades, order types and order functionality (insertion, modification and deletion). </p>
                        <p>While the document has been prepared on the basis of the best information available, the exchange accepts no liability for decisions taken, or systems work carried out by any party, based on this document. This document does not form part of the contractual documentation between the individual exchange and its customers. The content of this document may also be subject to discussions and in some cases approval from relevant authorities.</p>
                        <p>Additional documents referenced in this documentation can be found on the official websites of Lykke.</p>
                        <h3>MARKET PARTICIPANTS</h3>
                        <p>Market participants on Lykke are members, issuers, exchanges, and non-members reporting trades for publication. Each participant takes part in the trading activity with one or several unique participant identification codes. To each participant users are connected.</p>
                        <p>Lykke grants access to participants to trading on certain markets and products. Lykke personnel manage information relating to participants and their users’ access. On participant level access to trading certain products or order books is granted. Note: depending on where you are located and what you wish to trade there may be certain restrictions on which markets you can trade in and which products you can trade. You may also be required to provide additional identification or financial information.</p>
                        <h3>TRADING HOURS</h3>
                        <p>Lykke is open for trading 24/7 - every day of the year.</p>
                        <p>The opening hours are no assurance of liquidity; market liquidity depend on the time of the day and week and on public holidays.</p>
                        <p><strong>Suspension of trading (Trading halts)</strong></p>
                        <p>Trading may be suspended by the Lykke either for technical reasons or for regulatory reasons. Technical suspension means that trading is suspended when the order book(s) becomes inaccessible for technical reasons. In this case a trading halt will be imposed. Regulatory suspension means that the order book(s) is suspended due to rules and regulations. In this case a trading halt will be imposed too. The exchange shall provide its members with information on trading halts via suitably accessible information technology. In practice this means that Lykke publishes a system message and/or an exchange notice.</p>
                        <h3>TRADING METHODS</h3>
                        <p>Lykke market allows buy/sell operations only. Upon matching buying asset passes into the ownership of the trader and, at the same time, sell asset passes into the ownership of the counterparty.</p>
                        <p>Selling assets that are not in the possession of the trader is currently restricted.</p>
                        <h3>ORDERS</h3>
                        <p><strong>Lot types</strong></p>
                        <p>Minimum Lot Size are the following:</p>
                        <LotSizeTable>
                            <div>
                                <p><strong>Asset</strong></p>
                                <p>USD</p>
                                <p>EUR</p>
                                <p>GBP</p>
                                <p>CHF</p>
                                <p>JPY</p>
                                <p>Virtual Currency</p>
                            </div>
                            <div>
                                <p><strong>Minimum Lot Size</strong></p>
                                <p>USD 0.0001</p>
                                <p>EUR 0.0001</p>
                                <p>GBP 0.0001</p>
                                <p>CHF 0.0001</p>
                                <p>JPY 0.0001</p>
                                <p>0.00000001</p>
                            </div>
                        </LotSizeTable>
                        <h3>Order types</h3>
                        <p><strong>Limit order</strong></p>
                        <p>A limit order stipulates a maximum purchase price or minimum selling price. If not fully matched, the remainder of the order is stored in the order book in descending buy-price order or ascending sell-price order and joins the queue of orders having the same price according to time priority. If the price specified by a limit price is not valid according to the allowed tick sizes, it will be rejected. It will only execute at prices equal to or more generous than its specified limit price. Limit orders can be matched in part or in its entirety.</p>
                        <p><strong>Market order</strong></p>
                        <p>A market order is an order to sell or buy at the best available price and is therefore entered without a price. During continuous trading the time in force for a market order is always fill-or-kill (the order is matched in full or not at all). The order is never registered in the order book. Note that a market order will trade through the order book until the entire quantity is filled. This means that as long as there is an order on the opposite side of the order book there will be a match no matter the price level.</p>
                        <p><strong>Time in force</strong></p>
                        <p>Lykke supports GTC (Good till Cancelled) orders in markets that have no specified limit to the maximum number of days an order is allowed to stay in the book. In fact, GTC is the only order type allowed.</p>
                        <p><strong>Order modification</strong></p>
                        <p>All the changes such as increase or decrease of the quantity or change of the price are equivalent to cancellation of the order and the placing of a new order with a new ranking timestamp.</p>
                        <p><strong>Ranking of Orders</strong></p>
                        <p>The main rule for ranking of orders is based firstly upon best price/net price and secondly by the longest storage time.</p>
                        <p><strong>Tick sizes</strong></p>
                        <p>Tick size is the smallest allowed price movement and, thereby, is the smallest possible difference between the buy and sell price in an order book.</p>
                    </PolicyWrapper>
                </Col>
            </Row>
        </Grid>
    )
}

export default RulebookComponent