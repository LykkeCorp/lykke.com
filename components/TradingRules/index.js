import React from 'react'
import styled from 'styled-components'
import {Col, Grid, Row} from "react-styled-flexboxgrid";
import Link from 'next/link';

import { PolicyWrapper, List, TextLink } from "../PrivacyPolicy/styled";

const ListGray = styled.ol`
  color: ${p => p.theme.colors.slate};
  padding-left: 20px;
  
  li {
    margin-bottom: 10px;
  }
`;

const TradingRules = props => {
    return (
        <Grid className="container">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <PolicyWrapper className="text-container">
                        <h1>Trading Rules – Lykke Corp UK and Lykke Netherland</h1>
                        <h2>General Provisions</h2>
                        <h3>General Descriptions</h3>
                        <p>Lykke Corp is a registered FinTech company incorporated in Switzerland with registration number CHE-345.258.499 and is building a global marketplace based on blockchain for all asset classes and financial instruments.</p>
                        <p>Lykke Corp UK Ltd. (“Lykke Corp UK”) is a company registered in England with company number 10093552, and maintains a trading venue as a subsidiary of Lykke Corp.</p>
                        <p>Lykke Netherlands B.V. (“Lykke Netherlands”) is a company registered in the Netherlands with company number 70603219, and maintains a trading venue as a subsidiary of Lykke Corp.</p>
                        <p>Lykke Corp, its subsidiaries Lykke Corp UK and Lykke Netherlands, are hereinafter referred to as “Lykke”. When engaging with any of the two above mentioned trading venues of Lykke Corp UK or Lykke Netherlands (both trading venues, individually or collectively, are hereinafter referred to as the “Lykke Exchange”), the Participant (as defined below), is bound by these Trading Rules, as amended from time to time. Unless mentioned otherwise the Trading Rules concern Lykke in its function as the operator of the Lykke Exchange.</p>
                        <p>Admission for trading on the Lykke Exchange is open to all individuals or entities (hereinafter referred to as "Participant" or "it") which meet the requirements of, and accept, the Lykke Terms and Conditions of the respective Lykke Exchange. Therefore these Trading Rules need to be read, understood and acknowledged along with the Lykke Terms and Conditions available on www.lykke.com. The suspension or termination of the admission of a Participant is governed by the Lykke Terms and Conditions which, together with these Trading Rules, discipline the use of the exchanges managed by Lykke Corp UK and Lykke Netherlands, namely the Lykke Exchange.</p>
                        <p>Lykke will determine in its absolute discretion the products that are available for trading on the Lykke Exchange. The conditions for adding and removal of the products are set out in the Listing Rules, as updated from time to time.</p>
                        <p>The Lykke Exchange is accessible only from those jurisdictions approved by Lykke and only to those Participants who have confirmed to Lykke that they are compliant with the respective local regulation. Participants represent and warrant that, at all applicable times, they have all permissions, licenses and approvals required by applicable law in order to be a Participant on the Lykke Exchange.</p>
                        <h3>Participants</h3>
                        <p>Lykke grants access to Participants to trading on certain markets and products. Lykke personnel manage information relating to Participants and their users’ access. On the participant level, access to trading certain products or order books is granted.</p>
                        <p>Depending on where the Participant is located and what it wishes to trade there may be certain restrictions on which markets it can operate in and which products it can trade. The Participant may also be required to provide additional identification or financial information.</p>
                        <h3>Trading Wallet and Products</h3>
                        <p>Prior to the first transaction, the Participant needs to fund its Lykke Trading Wallet as indicated under the Terms and Conditions.</p>
                        <p>On its web and mobile interfaces (hereinafter referred to as the "Lykke Apps"), Lykke lists the types of transactions that the Participant may conclude and the types of products that may be purchased and sold. Lykke reserves the right, at its sole discretion, to modify the types of transactions and type of products available at the Lykke Exchange at any time, without prior notice.</p>
                        <h3>Acceptance of Risk involved with the Use of the Lykke Exchange</h3>
                        <p>In addition to the risks - accepted, acknowledged and fully understood by the Participant - that are expressly indicated under the Lykke Terms and Conditions, the Participant also accepts, acknowledges and understands that the transactions:</p>
                        <ListGray>
                            <li>are or might be highly speculative;</li>
                            <li>pose very significant financial risk and might cause unlimited losses or exceed the investments in certain cases; there is no guarantee that the capital invested will be retained or that any profits will be made;</li>
                            <li>are only suitable for persons who are able to bear the financial losses arising from such associated risks.</li>
                        </ListGray>
                        <p>The Participant is aware of the fact that using electronic devices and the internet exposes it to a number of risks, including but not limited to the possibility that:</p>
                        <ListGray>
                            <li>an unauthorized third party might access the Lykke Wallets;</li>
                            <li>the relationship between the Participant and Lykke might be revealed;</li>
                            <li>computer viruses might infect the Participant's computer system without the Participant's knowledge;</li>
                            <li>third parties might send messages to the Participant, alleging to represent Lykke;</li>
                            <li>chat conversation between the Participant and Lykke might be visible to third parties;</li>
                            <li>partial or total loss might result from the transactions.</li>
                        </ListGray>
                        <p>The Participant is fully aware that the access to the Lykke Exchange through the Lykke Apps, the Lykke application programming interface (hereinafter referred to as the "Lykke API"), and the use of Lykke's services from abroad might violate foreign laws applicable to the Participant. The Participant undertakes to make  himself aware and assumes sole liability for any risks relating to such foreign legislation. Any responsibility of Lykke regarding the possible infringement of foreign laws in connection with the Participant's use of Lykke's services or services from abroad is expressly and completely excluded.</p>
                        <p>The Participant undertakes to obtain full information (and acknowledges that it is solely responsible for doing so) regarding the risks to which it may be exposed and regarding any necessary security measures. Further, the Participant is responsible to minimize the security risks resulting from the use of Lykke's services by using the appropriate and state-of-the-art security measures (e.g. antivirus program).</p>
                        <p>The Participant shall take the necessary precautions to ensure the confidentiality of all information, including, among other things, the system password, user ID, portfolio details, transaction activities, account balances, as well as all other information and orders.</p>
                        <p>The Participant acknowledges that due to the safety features of the private key, should the Participant lose the private key seed to a private wallet, Lykke will not be able to recover digital assets from that wallet.</p>
                        <h3>Confirmations and Obligations of the Participant</h3>
                        <p>By submitting an order, the Participant confirms that it consents to adhere to these Trading Rules  and confirms and undertakes that:</p>
                        <ListGray>
                            <li>it is familiar with the products, the transactions and the functioning of financial markets;</li>
                            <li>it understands the functionality, usage, storage, transmission mechanisms and complexity associated with blockchain-based systems;</li>
                            <li>it is able to bear losses connected with the transactions;</li>
                            <li>Any decision to conclude a transaction shall be taken by the Participant, based on its own assessment of its financial situation and its investment objectives;</li>
                            <li>it will monitor the open positions on its Lykke Trading Wallet;</li>
                            <li>Lykke will not supply any service other than carrying out the Participant's orders relating to the transactions and, in particular, will neither give the Participant advice nor manage assets;</li>
                            <li>Any discussions between the Participant and Lykke's employees or any information provided by them will not give rise to any advisory or asset management relationship, nor do they constitute recommendations of Lykke;</li>
                            <li>Lykke will not examine whether any transaction or any decision made by the Participant or whether its trading or investment strategy pursued are justified, suitable or reasonable;</li>
                            <li>Prior to issuing orders, the Participant will familiarize himself with the Lykke Exchange, its functionalities and features and with the type of orders that are possible of being carried out;</li>
                            <li>Further, the Participant confirms to check the content of each document, including documents sent electronically by Lykke or made available to the Participant on the Lykke Exchange and to immediately inform Lykke in case of any discrepancies. Such documents shall be deemed to be binding without immediate opposition of the Participant.</li>
                        </ListGray>
                        <h3>Relation between the Lykke Exchange, the Participant and Lykke</h3>
                        <p>The Lykke Exchange is the platform on which the Participant may sell or buy products.</p>
                        <p>Lykke Corp UK is the operator of the Lykke Exchange, to which Lykke Netherlands BV is a part thereof.</p>
                        <p>Lykke Corp Uk and Lykke Netherlands may act as a Participant of their own platforms.</p>
                        <h3>Relation to Third Parties</h3>
                        <p>In case the Participant has been recommended to use the Lykke Exchange by a third party such as, but not limited to, an external asset manager or a referring agent, Lykke shall not be liable for any agreement or terms that may exist between the Participant and the respective third party.</p>
                        <h3>Communications from the Participant to Lykke</h3>
                        <p>Instructions to correct, amend or withdraw orders can be submitted via the standard Lykke order entry channels such as the Lykke Apps accessible via electronic devices or the Lykke API;</p>
                        <p>The Participant is responsible to communicate immediately to Lykke any change of its details (including but not limited to its email address, home address, phone number, and beneficial ownership of its Lykke Wallets etc.) via the authorized channels such as the mobile and web interface and the Lykke Participant Support (<TextLink href="mailto:support@lykke.com">support@lykke.com</TextLink>).</p>
                        <p>In any particular case, Lykke reserves the right to request another communication method than the one chosen by the Participant.</p>
                        <p>Lykke shall be entitled to follow the instructions received through the above-mentioned means from persons authorised by the Participant or by the Participant himself.</p>
                        <p>Lykke reserves the right to request at any time an original written confirmation duly signed by the Participant prior to the execution of an order.</p>
                        <p>The Participant confirms that it is aware of the risks associated with using these communication methods, in particular the risks that could result from the execution, non-execution, late or wrong execution, fault or misunderstanding at the time instructions are transmitted to Lykke or from improper use of Participant identification methods towards Lykke. The Participant acknowledges and declares that it assumes responsibility for all the consequences that could result therefrom. Further, the Participant understands and agrees that Lykke shall not incur any liability by refusing to carry out orders given by a person whose identity has not in its opinion been sufficiently verified.</p>
                        <p>If the Participant gives its instructions in writing, Lykke will verify its identity in particular by comparing its signature on the copy of the passport provided in the on-boarding process. Nevertheless, Lykke shall not be liable for any fraud and/or lack of identification that it has not discovered despite applying all reasonable diligence.</p>
                        <p>The Participant shall be responsible for all instructions and for the accuracy of all information sent via the standard Lykke communication channels by using the Participant's name, his/her password or any other personal identification credentials used to identify the Participant, regardless of who is the actual user. Any Person who identifies himself in accordance with the Participant's identification credentials shall be considered as being the Participant itself. Lykke shall consider such orders or communications as having been authorized and issued by the Participant and is allowed to fully rely on the use of the respective Participant credentials.</p>
                        <p>The Participant authorizes Lykke to record, to listen and/or produce a written transcript of all telephone conversations, electronic communications, internet-based conversations (chats) and meetings between the Participant and representatives of Lykke and to use such records or transcripts as evidence in relation to any parties (including but not limited to a regulatory authority and/or a court) to whom Lykke, at its entire discretion, regards it as desirable and necessary to disclose such information as part of any litigation and procedure that it expects to arise between it and the Participant. Any records or transcriptions produced by Lykke will be treated in accordance with the Lykke's Data Protection Policy.</p>
                        <h3>Communications from Lykke to the Participant</h3>
                        <p>All notices or other communications made by Lykke to the Participant, including Trading Wallet statements and transaction confirmations may, at Lykke's sole discretion, be sent to the Participant by email to the address specified by the Participant or made available on the Lykke Apps. Such notices or communications shall be deemed to have been received by the Participant and transmitted in the proper manner once Lykke has made them available on the Lykke Apps or sent them by email. It shall be the Participant's responsibility to take the necessary actions to ensure that it is able to access any communications sent to him. Lykke shall not be liable for any delay, modification, re-routing or any other modification that the message might undergo after being sent by Lykke unless it is a result of gross negligence, willful default or fraud attributable to Lykke.</p>
                        <h3>Transactions, Cancellation and Irrevocability</h3>
                        <p>The Participant accepts, acknowledges and understands that:</p>
                        <p>All orders are executed subject to and in conformity with these Trading Rules;</p>
                        <p>At the discretion of Lykke, these Trading Rules may exceptionally make it possible to retroactively intervene and cancel, amend or correct trades. The following situations shall be deemed as exceptional for the purposes of this section:</p>
                        <ListGray>
                            <li>Technical failure, </li>
                            <li>Incorrect execution of an order due to human error, </li>
                            <li>Erroneous or invalid order, </li>
                            <li>Illegal or abnormal transactions,</li>
                            <li>Exceptional market situations, </li>
                            <li>Orderly and fair trading was not ensured at the time of an order execution,</li>
                            <li>To preserve the integrity and proper functioning of the Lykke Exchange,</li>
                            <li>Lykke is required to do so by applicable law or governmental authorities,</li>
                            <li>Other occurrences or circumstances which Lykke deems as objectively exceptional.</li>
                        </ListGray>
                        <p>In such circumstances, the Participant accepts any losses or other consequences of the cancellation. The cancellation provisions of the Lykke Terms and Conditions apply in addition.</p>
                        <p>The Participant may revoke an instruction until Lykke has debited the Participant's account.</p>
                        <h3>Participant Complaints</h3>
                        <p>The Participant undertakes to inform Lykke immediately if an incorrect transaction appears in the Lykke Apps or API or it has concluded a transaction which does not appear in the Lykke Apps or API.</p>
                        <p>Any complaints in relation to the execution or non-execution of a transaction will be resolved in accordance with the Lykke Terms and Conditions. </p>
                        <h3>Erroneous Transaction</h3>
                        <p>In the event that there is an obvious error in the price quoted by Lykke, Lykke shall not be bound by any transaction whatsoever (whether or not confirmed) which is, or purports to have been entered into, at a price which Lykke is able to substantiate to the Participant was manifestly incorrect at the time of the transaction or which was or ought to have reasonably been known by the Participant to be incorrect at the time of the execution of the transaction. In such situation Lykke may at its sole discretion either not execute the transaction or execute the transactions at the quoted price or the correct price and, if it does so, Lykke may close out the transaction executed (including by correcting either the price at which Lykke hedged the transaction or the historic market price). In any such situation, Lykke shall not be liable for any losses, damages, costs, expenses, liabilities or claims except to the extent that they arise directly out of Lykke’s gross negligence, willful default or fraud.</p>
                        <h3>Blocking of the Lykke Trading Wallet</h3>
                        <p>The Participant may request Lykke to block the access to its Lykke Trading Wallet. Such a blockage may only be requested by the Participant itself via e-mail to the Lykke Support (<TextLink href="mailto:support@lykke.com">support@lykke.com</TextLink>).</p>
                        <p>Lykke shall have the right to block the Participant's access to the Lykke Trading Wallet at any time, without any further explanation or notice, whenever Lykke is legally required to do so or considers this to be an appropriate course of action.</p>
                        <h3>Participant’s Liability</h3>
                        <p>The Participant shall indemnify and hold Lykke harmless against any and all losses, taxes, expenses, costs and commitments (present, future, unexpected or otherwise and which include reasonable legal fees) that Lykke may sustain or incur as a result of or in relation to:</p>
                        <ListGray>
                            <li>Breach of duties by the Participant; </li>
                            <li>Measures taken by Lykke to safeguard its own interests.</li>
                        </ListGray>
                        <h2>Trading Procedures</h2>
                        <h3>General Trading Rules</h3>
                        <p>The Lykke Exchange is ordinarily open for trading 24/7, every day of the year, with the exception of maintenance work which will be announced in advance by Lykke.</p>
                        <p>The opening hours of the Lykke Exchange are no assurance of liquidity. Market liquidity depends on the time of day and week and on public holidays.</p>
                        <p>Lykke may, upon reasonable notice to the Participant, audit the Participant’s access to the Lykke Exchange to ensure its compliance with these Trading Rules.</p>
                        <h3>Trading Methods</h3>
                        <p>Lykke allows buy/sell operations only. Upon matching buying asset passes into the ownership of the trader and, at the same time, sell asset passes into the ownership of the counterparty. </p>
                        <p>Selling assets that are not in the possession of the trader is currently restricted (i.e. margin trading not offered).</p>
                        <h3>Suspension of trading (Trading halts)</h3>
                        <p>Lykke may at its own discretion at any time temporarily suspend the trading on the Lykke Exchange. The time period of the trading halts will be determined by Lykke on a case by case basis and best efforts are used to make it as short as possible.</p>
                        <p>Lykke shall provide Participants with information on trading halts via suitably accessible communication channels. </p>
                        <h3>Market Disorder</h3>
                        <p>Each Participant shall be deemed to acknowledge that, in accordance with applicable laws, Lykke as operator of the Lykke Exchange may:</p>
                        <ListGray>
                            <li>exercise certain rights in respect of the non-performance or Default (according to the Lykke Terms and Conditions) of a Participant; </li>
                            <li>in certain circumstances, cancel or amend a transaction, permit a "contra trade" in respect of a transaction or suspend or halt trading in specific products;</li>
                            <li>intervene as a result of a special situation in accordance with this section;</li>
                            <li>and Participants shall, in such circumstances, be bound by such measures.</li>
                        </ListGray>
                        <p>Special situations shall be defined as exceptional situations and emergency situations. Lykke decides at its own discretion whether there is a special situation.</p>
                        <p>The following specific circumstances shall be deemed to be exceptional situations:</p>
                        <ListGray>
                            <li>major price volatility, especially where a trade differs significantly from the market price;</li>
                            <li>decisions or information which are to be published imminently and which might have a significant influence on the price of a product or its underlying (price-sensitive facts); or</li>
                            <li>other situations that might compromise fair and orderly trading.</li>
                        </ListGray>
                        <p>Should an exceptional situation arise, Lykke may institute all the market control measures which it deems necessary to maintain fair and orderly trading as far as possible (incl. deleting orders or declaring transactions invalid).</p>
                        <p>The following specific circumstances shall be deemed to be emergency situations:</p>
                        <ListGray>
                            <li>failure of Lykke's system or its access infrastructure or parts thereof;</li>
                            <li>failure of a Participant's access system;</li>
                            <li>failure of the technical clearing and settlement infrastructure;</li>
                            <li>Force Majeure according to the Lykke Terms and Conditions; or</li>
                            <li>other situations that might compromise fair and orderly trading.</li>
                        </ListGray>
                        <p>In emergency situations Lykke may suspend these Trading Rules in full or in part, including the Lykke Terms and Conditions, and replace them temporarily with new provisions instead. In particular, Lykke may temporarily interrupt trading in full or in part.</p>
                        <p>Neither Lykke nor a Participant (an "Affected Party") shall be liable for any failure or delay in performing any of its obligations under or pursuant to these Trading Rules and the Lykke Terms and Conditions to the extent that such failure or delay is due to an Event of Force Majeure and it shall be entitled to a reasonable extension of the time for performing such obligations as a result of such Event of Force Majeure.</p>
                        <p>On the occurrence of an Event of Force Majeure:</p>
                        <ListGray>
                            <li>the Affected Party shall immediately notify Lykke of the same (or if the Affected Party is Lykke, it shall issue a circular to affected Participants in relation to the Event of Force Majeure) and the Affected Party shall exercise reasonable endeavours to resume performance of any of its obligations affected by the Event of Force Majeure;</li>
                            <li>Lykke shall be entitled to require any Participant to take such action as Lykke may direct in respect of a transaction affected by the Event of Force Majeure; and</li>
                            <li>Lykke shall be entitled but not obliged to subject affected transactions according to Lykke's directions, and Lykke shall be entitled to require or implement appropriate measures to achieve such transactions. Lykke shall, where practicable, consult affected Parties in advance of requiring or implementing any such measures.  </li>
                        </ListGray>
                        <h3>Order book</h3>
                        <p>Lykke maintains one order book for each asset pair. This order book shall classify and manage all orders according to price and the time at which they are received by Lykke.</p>
                        <h3>Orders</h3>
                        <p>An order is a binding offer to buy or sell a certain quantity of products at an unlimited or limited price.</p>
                        <p>Execution of an order will result in a trade.</p>
                        <p>Orders may be entered in the order book, amended or deleted, during set periods. All incoming orders shall be assigned a timestamp and an identification number. Amended orders shall lose their original time priority and be given a new timestamp.</p>
                        <h3>Order Types & Validity</h3>
                        <p>Market Order</p>
                        <p>A market order is an order to sell or buy which is executed immediately at the current volume weighted average price for the respective order size and is therefore entered without a price. During continuous trading the time in force for a market order is always fill-or-kill (the order is matched in full or not at all). The order is never registered in the order book. A market order will trade through the order book until the entire quantity is filled. As long as there is an order on the opposite side of the order book there will be a match no matter the price level.</p>
                        <p>Limit Order</p>
                        <p>A limit order is designed to buy or sell a product at a specific price or better. It will only be executed at prices equal to or better than its specified limit price. A limit order is usually executed not immediately but when the price reaches a specified level for the respective order size when the market liquidity allows for execution. Limit orders can be matched in part or in its entirety. If not fully matched, the remainder of the order is stored in the order book in descending buy-price order or ascending sell-price order and joins the queue of orders having the same price according to time priority. If the price specified by a limit price is not valid according to the allowed tick sizes, it will be rejected.  A Limit orders is valid until it is cancelled.</p>
                        <p>For limit orders Lykke may request a collateral from the Participant.</p>
                        <h3>Order Priority</h3>
                        <p>The main rule for ranking of orders is based firstly upon best price bid/ask price and secondly by the longest storage time.</p>
                        <p>Buy orders with a higher price take precedence over buy orders with lower prices. Conversely, sell orders with a lower price take precedence over sell orders with higher prices. Time is used as a second criterion when several orders have the same limit. In this case, orders that were entered earlier take precedence. Market orders take precedence in the order book over limit orders. The rule of time priority also applies to market orders.</p>
                        <h3>Order validation (pre-trade control) </h3>
                        <p>Any new incoming limit or market order is examined immediately to determine whether it can be matched against orders on the opposite side of the order book. Any incoming order is passing validation tests, including but not limited to:</p>
                        <ListGray>
                            <li>Price accuracy: If the price specified by an order price is not valid according to the allowed tick size (has greater accuracy than specified), it will be rejected.</li>
                            <li>Minimum order volume: If volume of incoming order is less than Min order volume parameter value specified for the asset pair it will be rejected.</li>
                            <li>Volume accuracy: If volume of incoming order is not valid according to the allowed accuracy parameter (has greater accuracy than specified) it will be rejected. Volume rounding is always in favour of market makers, i.e. taker’s volume of the asset he buys is rounding down, volume of the asset he sells is rounding up. </li>
                        </ListGray>
                        <h3>Position Closure Orders</h3>
                        <p>Whenever the Participant issues an instruction to Lykke to open a position which is contrary to one or more of its other open positions, Lykke shall (in the absence of any contrary instruction or order from the Participant) act according to the principle of FIFO (First In - First Out) and shall therefore close the contrary position that was opened first.</p>
                        <h3>Withdrawal from the Trading Wallet</h3>
                        <p>The Participant acknowledges and agrees that if it withdraws a product from the Lykke Trading Wallet, the laws under which the Lykke Exchange operates might not be applicable anymore. </p>
                        <p>Lykke declines any responsibility and liability in case of a withdrawal from the Lykke Trading Wallet.</p>
                        <h2>Miscellaneous</h2>
                        <h3>Cooperation with Regulators</h3>
                        <p>Lykke will provide full assistance to and may also supply any relevant information without delay to the relevant regulators.</p>
                        <p>Lykke will comply with all relevant laws and regulations, and any request of the relevant regulators.</p>
                        <h3>Participant Support and Deal Queries</h3>
                        <p>The Lykke Participant Support (<TextLink href="mailto:support@lykke.com">support@lykke.com</TextLink>) is available on a 24x7 basis to assist Participants with all issues pertaining to Lykke's services.</p>
                        <p>If the Participant requests actual information related to a trade query, Lykke Participant Support will gather relevant trade information from the Participant and subsequently, will, where possible, use reasonable endeavours to supply the Participant with Lykke market data.</p>
                        <h3>Amendments</h3>
                        <p>Lykke shall be authorized to change or amend these Trading Rules at any time. Such amendments will be communicated to the Participants in an appropriate manner and shall enter into effect on the date determined by Lykke.</p>
                        <h3>Severability, Delegation to Third Party, No Waiver</h3>
                        <p>Should any clause in these Trading Rules be or become illegal, invalid or unenforceable in any manner whatsoever, this shall not affect the remaining provisions of these Trading Rules.</p>
                        <p>The Participant may not assign any of its rights or delegate any of its duties arising out of or in connection with these Trading Rules to a third party.</p>
                        <p>Any delay or omission by Lykke in relation to the exercise of any right granted by the law or under these Trading Rules, or the partial or incomplete exercise of such a right, power or action shall not as a result exclude or prevent the later exercise of such a right.</p>
                        <h3>Applicable Law and Place of Jurisdiction</h3>
                        <p>This Agreement shall exclusively be governed by and construed in accordance with the substantive laws of England and Wales, as amended from time to time. </p>
                        <p>All disputes arising out of or in connection with these Trading Rules, including disputes on its conclusion, binding effect, amendment and termination, shall be resolved by the exclusive jurisdiction of the courts of London, England.</p>
                    </PolicyWrapper>
                </Col>
            </Row>
        </Grid>
    )
}

export default TradingRules;