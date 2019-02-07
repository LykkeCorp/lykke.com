import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import {Col, Grid, Row} from 'react-styled-flexboxgrid';
import Link from 'next/link';

import { PolicyWrapper, List, TextLink } from '../PrivacyPolicy/styled';
import { ColumnList } from './styled';

const AnchorTitle = styled.h2`
  @media all and (max-width: 991px) {
    padding-top: ${rem('60px')};
    margin-top: ${rem('-60px')};
  }
`;

const StyledColumnList = styled(ColumnList)`
  @media all and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const TermsAndRegulation = props => {
    return (
        <Grid className="container">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <PolicyWrapper className="text-container">
                        <h1>Terms and regulation</h1>
                        <p>This page discusses all the terms, regulations, and other rules that apply to your use of Lykke’s services, including:</p>
                        <List>
                            <li>
                                <Link href="#walletAndExchange"><a>Terms of use for the Lykke Wallet and Lykke Exchange</a></Link>
                            </li>
                            <li>
                                <Link href="#b2bServices"><a>Terms and conditions for Lykke’s B2B services</a></Link>
                            </li>
                        </List>
                        <AnchorTitle id="walletAndExchange">Terms of use for the Lykke Wallet and Lykke Exchange</AnchorTitle>
                        <p>The Lykke Wallet mobile app, which is available for iOS and Android, has two functions. First, it enables a user to store various types of digital coins and tokens, including Lykke fiat money, cryptocurrencies, utility tokens, security tokens, and other instruments. Second, it provides an access point to the Lykke Exchange, which comprises a number of Lykke trading venues and services:</p>
                        <List>
                            <li>
                                <span>A trading venue maintained by Lykke Corp UK for trading Lykke FX Colored Coins (lkeCHF, lkeEUR, lkeGBP, and lkeUSD), cryptocurrencies (BTC and ETH), Litecoin (LTC), SolarCoin (ccSLR), Zcash (ZEC), Bitcoin Cash (BCH), Bitcoin Gold (BTG), Dash (DASH), TreeCoin (TREE), Stellar (XLM), Bitshares (BTS), Ethereum Classic (ETC), and TIME, and for depositing fiat or cryptocurrencies to or from the wallet</span>
                            </li>
                            <li>
                                <span>A trading venue maintained by Lykke Netherlands, for trading a number of utility tokens: 0x (ZRX), Aeternity (AE), AION (AION), Augur (REP), AppCoins (APPC), AirToken (AIR), Bancor (BNT), Blackmoon (BMC), BlockV (VEE),  Blockpass (PASS), CanYaCoin (CAN), Civic (CVC), Coinfirm (AMLT), Colu (CLN), Datum (DAT), Debitum (DEB), Decentraland (MANA), DENT Wireless (DENT), Dether (DTH), District0X (DNT), Enigma (ENG), EOS (EOS), Ethos (ETHOS), Everex (EVX), FriendZ (FDZ), Freyrchain (FREC), Gatcoin (GAT), Genesis Vision(GVT), Globcoin (GCP), Gnosis (GNO), Golem (GNT), Helbiz (HBZ), HelloGold (HGT), Hive Project (HVN), Icon (ICX), IpStock (IPS), Indorse (IND), IOStoken (IOST), Lockchain (LOC), Loopring (LRC),Lordcoin (LC), Lucyd (LCD), Mothership (MSP), Musereum (ETM), Metalpay (MTL), Mysterium (MYST), OmiseGO (OMG), Peculium (PCL),  Playkey (PKT), Populous (PPT), Powerledger (POWR), Quanta (QNTU), Request Network (REQ), Restart Energy (MWAT), Selfkey (KEY), SingularityNET (AGI), SmartOne Legal (LGL), SONM (SNM), Storj (STORJ), Substratum (SUB), Vetri (VLD), VeChain (VET), Viberate (VIB), Waltonchain(WTC), WAX token (WAX),  Wepower (WPR)</span>
                            </li>
                            <li>
                                <span>Lykke Corp AG, for trading Lykke coins (LKK) and one and two year forwards on Lykke coins (LKK1Y and LKK2Y)</span>
                            </li>
                            <li>
                                <span>Lykke Vanuatu, for margin trading</span>
                            </li>
                        </List>
                        <p>When trading through the Lykke Wallet app, any of the coins, tokens, and services listed above, you are using the corresponding trading venue on which those coins or tokens are traded or by which those services are offered. When engaging with any of the trading venues, you are bound by the applicable rules:</p>
                        <List>
                            <li>
                                <Link href="#uk"><a>Rules for engaging with Lykke Corp UK</a></Link>
                            </li>
                            <li>
                                <Link href="#nl"><a>Rules for trading with Lykke Netherlands</a></Link>
                            </li>
                            <li>
                                <Link href="#ag"><a>Rules for trading with Lykke Corp AG</a></Link>
                            </li>
                            <li>
                                <Link href="#vanuatu"><a>Rules for trading with Lykke Vanuatu</a></Link>
                            </li>
                        </List>
                        <h3 id="uk">Rules for engaging with Lykke Corp UK</h3>
                        <p>The following rules apply to engaging with Lykke Corp UK.</p>
                        <p>Lykke's general <Link href="/terms-of-use"><TextLink href="/terms-of-use">Terms of Use</TextLink></Link> .</p>
                        <p><Link href="/uk-rulebook"><TextLink href="/uk-rulebook" noUnderline>The Rulebook</TextLink></Link>, which describes the functionality of trading on the trading venue maintained by Lykke Corp UK.</p>
                        <p><Link href="/privacy-policy"><TextLink href="/privacy-policy" noUnderline>The Privacy Policy</TextLink></Link>, which applies for trading on the trading venue maintained by Lykke Corp UK.</p>
                        <h3 id="nl">Rules for trading with Lykke Netherlands</h3>
                        <p>The following rules apply to trading with Lykke Netherlands.</p>
                        <List>
                            <ul>
                                <li>
                                    <Link href="https://www.lykke.com/media/documents/20180129_Lykke_NL_-_Terms_and_Conditions_for_Participants.pdf"><a>Terms and conditions for participants</a></Link>
                                </li>
                                <li>
                                    <Link href="https://www.lykke.com/media/documents/20180129_Lykke_NL_-_Trading_Rules.pdf"><a>Trading Rules</a></Link>
                                </li>
                                <li>
                                    <Link href="https://www.lykke.com/media/documents/Lykke_NL-Listing_Rules.pdf"><a>Listing Rules</a></Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy"><a>Privacy Policy</a></Link> of Lykke Corp, that applies to personal data obtained by Lykke Netherlands B.V.
                                </li>
                            </ul>
                        </List>
                        <h3 id="ag">Rules for trading with Lykke Corp AG</h3>
                        <p>The following rules apply to trading with Lykke Corp AG.</p>
                        <p>Lykke's general <Link href="/terms-of-use"><TextLink href="/terms-of-use" noUnderline>Terms of Use</TextLink></Link>.</p>
                        <p><Link href="/uk-rulebook"><TextLink href="/uk-rulebook" noUnderline>The Rulebook</TextLink></Link>, which describes the functionality of trading on the trading venue maintained by Lykke Corp UK, applies mutatis mutandis to the functionality and trading by Lykke Corp AG. </p>
                        <p>The privacy policy applicable to trading with Lykke Corp AG is included in Lykke’s general <Link href="/privacy-policy"><TextLink href="/privacy-policy" noUnderline>Privacy Policy</TextLink></Link>.</p>
                        <h3 id="vanuatu">Rules for trading with Lykke Vanuatu</h3>
                        <p>The following rules apply to trading with Lykke Vanuatu.</p>
                        <StyledColumnList>
                            <li>
                                <Link href="https://www.lykke.com/media/documents/Privacy_Policy.pdf"><a>Privacy Policy</a></Link>
                            </li>
                            <li>
                                <Link href="https://www.lykke.com/media/documents/Order_Execution_Policy.pdf"><a>Order Execution Policy</a></Link>
                            </li>
                            <li>
                                <Link href="https://lykke.vu/Product_Description_MT.pdf"><a>Trading Conditions</a></Link>
                            </li>
                            <li>
                                <Link href="https://www.lykke.com/media/documents/Conflict_of_Interest_Policy.pdf"><a>Conflict of Interest Policy</a></Link>
                            </li>
                            <li>
                                <Link href="https://www.lykke.com/media/documents/Client_Agreement.pdf"><a>Client Agreement</a></Link>
                            </li>
                            <li>
                                <Link href="https://www.lykke.com/media/documents/Terms_of_Withdrawal.pdf"><a>Terms of Withdrawal</a></Link>
                            </li>
                            <li>
                                <Link href="https://www.lykke.com/media/documents/Complaints_Handling_Policy.pdf"><a>Complaints Handling Policy</a></Link>
                            </li>
                        </StyledColumnList>
                        <AnchorTitle id="b2bServices">Terms and conditions for Lykke’s B2B services</AnchorTitle>
                        <p>All B2B advisory and technical services, such as blockchain technology implementation and advisory services for ICOs, are provided by Lykke Accelerator AG. <TextLink noUnderline href="https://lykkecomdb.blob.core.windows.net/documents/Terms_and_Conditions%20applicable_to_Lykke%20Accelerator%E2%80%99s_services.pdf">These terms and conditions</TextLink> apply to such an engagement.</p>
                        <p>The privacy policy applicable to Lykke’s B2B Services is included in Lykke’s general <Link href="/privacy-policy"><TextLink href="/privacy-policy" noUnderline>Privacy Policy</TextLink></Link>.</p>
                        <h2>Limitations</h2>
                        <p>Due to the regulatory restrictions, we are not yet permitted to onboard residents from this <Link href="/restricted-countries"><TextLink href="/restricted-countries" noUnderline>country list</TextLink></Link>.</p>
                    </PolicyWrapper>
                </Col>
            </Row>
        </Grid>
    )
}

export default TermsAndRegulation