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

const TermsOfUseComponent = props => {
    return (
        <Grid className="container">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <PolicyWrapper className="text-container">
                        <h1>Terms of Use</h1>
                        <p><b>8 JUNE 2018</b></p>
                        <p>PLEASE READ THESE TERMS OF USE CAREFULLY. BY CLICKING TO ACCEPT, AND BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS OF USE AND ALL TERMS INCORPORATED BY REFERENCE.</p>
                        <p>If you are accepting these terms on behalf of an entity, you confirm that you are authorized on behalf of that entity to agree to be bound by these Terms of Use (the “Terms of Use” or “Terms”) and all terms incorporated by reference and to enter into a legally binding transaction (a transaction means the creation of a binding contract with counterparties).</p>
                        <h3>1. Scope</h3>
                        <p>These are the Terms of Use of Lykke Corp UK Ltd and all its affiliates or subsidiaries or entities of the Lykke Group (hereinafter referred “Lykke,” ”we,” or “us”).</p>
                        <p>These Terms apply to any access and use of our Android and iOS mobile apps, our website at <TextLink noUnderline href="https://www.lykke.com/">https://www.lykke.com/</TextLink>, our online services, and any of our services related to or utilizing any of the foregoing, which we refer to in these Terms, collectively, as “Services,” “Lykke Services,” or “our Services”.</p>
                        <h3>2. Eligibility and agreement</h3>
                        <p>Participation in Lykke Services is open to all who want to trade in the digital assets listed on Lykke. You must ensure that you use and access Lykke Services only in your own name and for your own account.</p>
                        <p>If you are acting as a legal entity, you must ensure that you:</p>
                        <ListGray>
                            <li>Use and access Lykke Services on behalf of the legal entity; and</li>
                            <li>That you are authorized to enter into transactions on behalf of the legal entity.</li>
                        </ListGray>
                        <p>Lykke may, at any time and for any reason and without notice, terminate, suspend, or change the username and/or password of any Authorised Person.</p>
                        <p>To use Lykke Services, you must provide a valid mobile phone number and email address. The number is used as part of the authentication process. As part of using Lykke Services, you agree to receive unencrypted emails and SMS/text messages from us. Please note that while we do not charge you for SMS/text messages, your mobile carrier’s standard messaging rates will apply. Failure to provide a valid mobile phone number may result in the restriction of your use or access to Lykke Services. If Lykke suspects that your mobile number is invalid or that you are using a VOIP service to circumvent the requirement to provide a valid mobile phone number, Lykke may suspend, terminate, or otherwise restrict your access and use of Lykke Services.</p>
                        <h3>3. Anti-Money-Laundering (AML) regulations</h3>
                        <p>You acknowledge and agree that Lykke must conduct all necessary checks according to the applicable AML regulations, in particular but not limited to Know Your Customer (KYC) checks, before allowing you to use Lykke Services. You acknowledge and agree to provides such information and details as may be necessary to allow Lykke to fulfil its legal obligations in this regard and that failure to provide such information may result in your not being able to access or use Lykke Services.</p>
                        <h3>4. Registration requirements</h3>
                        <p>Lykke Services are for the use only of the registered account holder. You agree that the information you provide to Lykke during account creation and any subsequent identity verification processes is accurate and complete, and will be updated as necessary to keep it so. If you are under 18 years of age, you are not authorized to use Lykke Services.</p>
                        <p>It is at the sole discretion of Lykke whether it will approve the opening of accounts. Additionally, Lykke reserves the right to suspend accounts temporarily or permanently, including where required or recommended by applicable governmental, regulatory, or law enforcement requirements or where you fail to provide sufficient information to verify your identity.</p>
                        <h3>5. Lykke Services</h3>
                        <p>Lykke Corp (Switzerland), the parent entity of Lykke Corp UK Ltd, is a provider of an electronic wallet service (Lykke Wallet). This Wallet can be accessed by the use of the Lykke app. The purpose of this electronic Wallet is the trading in and storing of digital assets. The assets being traded and stored in the Lykke Wallet are accepted to be listed on Lykke trading venues.</p>
                        <p>Within the Lykke app, the user can buy or sell digital assets by using a national currency or the digital currencies bitcoin (BTC) and ether (ETH) as the payment option for buying and selling.</p>
                        <h3>6. Your responsibilities regarding the Use of the Services</h3>
                        <p>You are responsible for ensuring that your personal information in your account profile is updated and correct, including your email address and mobile phone number, as well as the KYC data provided and Lykke reserves the right to regularly verify that such information is up-to-date. You are also responsible for maintaining adequate security, control, and confidentiality of your device access, your account information, including any personal identification numbers (PINs), passwords, 12-word-backup/restore keys, API keys, or other codes associated with your account and any activity occurring within that account. The loss or compromise of this information may result in unauthorized access to your account, which may result in the loss or theft of any securities, derivatives, and financial instruments held in your account.</p>
                        <p>If you believe your account has been compromised, or you need to report a security incident, or you have experienced any operational problems, or have a security concern, please contact us immediately and We have no responsibility and specifically disclaim any liability for any loss that you suffer as a result of failing to comply with this section or failure to follow or act on any notices or alerts that we may send to you.</p>
                        <h3>7. Availability of Services</h3>
                        <p>Lykke, via Lykke Corp (Switzerland), provides a wallet on a mobile application, a web application, communication tools, and an API interface. You provide the requirements to use these instruments. Lykke is not liable for the functionality of any other systems beyond the ones that it provides.</p>
                        <p>Subject to these Terms, Lykke shall use reasonable efforts to make available, operate, and maintain Lykke Services during the term of these Terms and to permit you to access and use Lykke Services in accordance with these Terms. Lykke shall use all reasonable efforts to notify you promptly of any difficulties experienced by us or other participants with respect to their access to or the use of Lykke Services, but only to the extent that Lykke is aware of such difficulties and reasonably determines that they are material to your access and use of Lykke Services. Similarly, you shall notify Lykke at the soonest possible time in case you become aware of any material technical failures of or difficulties with Lykke Services or upon becoming aware of any material breach (or any event which, by giving notice and/or the lapse of time, would constitute a material breach) of these Terms.</p>
                        <p>Our Services may evolve over time. This means we may apply changes, replace, or discontinue (temporarily or permanently) our Services at any time for any reasonable cause with two days’ notice or without notice in case of a Force Majeure. In this case, you may be prevented from accessing or using our Services. If, in our sole discretion, we decide to discontinue our Services permanently, we will provide you with a notice via our website and via email.</p>
                        <h3>8. Force Majeure</h3>
                        <p>A Force Majeure Event includes without limitation each of the following:</p>
                        <ListGray>
                            <li>Government actions, the outbreak of war or hostilities, the threat of war, acts of terrorism, national emergency, riot, civil disturbance, sabotage, requisition, or any other international calamity or economic or political crisis;</li>
                            <li>Act of God, earthquake, tsunami, hurricane, typhoon, accident, storm, flood, fire, epidemic, or other natural disasters;</li>
                            <li>Labor disputes and lock-out;</li>
                            <li>Breakdown, failure, or malfunction of any electronic, network, and communication lines (not due to the fault of Lykke);</li>
                            <li>Any event, act, or circumstances not reasonably within Lykke’s control and the effect of that event or events is such that Lykke is not in a position to take any reasonable action to cure the default.</li>
                        </ListGray>
                        <h3>9. Deposit, trading, and withdrawal</h3>
                        <p>Where you are accepted by Lykke as its participant, Lykke will open a Client Account for you, which will be activated upon your deposit of funds.</p>
                        <p>You may deposit funds into your Client Account at any time during the duration of the contractual relationship established by these Terms. Funds as means of payment for securities, derivatives, and financial instruments will be accepted via bank transfer, debit/credit card (MasterCard, Visa, etc.), digital currency transfer (BTC, ETH, etc.), or any other method of electronic money transfer (where the originator is you) acceptable by Lykke from time to time. Lykke will not accept third -party or anonymous payments in favor of your account.</p>
                        <p>To buy or sell digital assets with the Lykke Wallet, simply click the price button under the Exchange tab of our App. You will be taken through a process that specifies and confirms the buy or sell order.</p>
                        <p>Lykke's settlement process is based on public blockchains operated by a decentralized network of independent third parties. You acknowledge, agree, and accept that a transaction on Lykke may not be completed, or may be substantially delayed, by the network.</p>
                        <p>Lykke will perform withdrawals of your funds, upon an application for withdrawal made via the Lykke Wallet.</p>
                        <p>Upon Lykke receiving an instruction from you to withdraw funds from your Account, Lykke shall pay the said amount within five Business Days, if the following requirements are met:</p>
                        <ListGray>
                            <li>The withdrawal instruction includes all necessary information;</li>
                            <li>The instruction is to make a bank transfer to your bank account or digital currency to your blockchain address; and</li>
                            <li>At the moment of payment, your Client Account balance exceeds or is equal to the amount specified in the withdrawal instruction, including all payment charges.</li>
                        </ListGray>
                        <p>Withdrawals will only be executed by crediting your personal bank account. Lykke will not effect withdrawals by transferring the funds to any other third party or to an anonymous account.</p>
                        <p>Lykke reserves the right to decline a withdrawal request when you ask for a specific transfer method and Lykke has the right to suggest an alternative.</p>
                        <p>All payment and transfer charges will be borne by you, and Lykke is entitled to debit your Client Account for these charges.</p>
                        <p>If you make a payment by bank transfer, by credit card, or by any other method of electronic money transfer, Lykke shall credit your Client Account with the relevant amount within one Business Day after the amount is credited to the bank account of Lykke.</p>
                        <h3>10. Finality and Irrevocability</h3>
                        <p>Any transaction is only final when settled on the blockchain.</p>
                        <p>Trades can be revoked by either you or Lykke unless commitment transactions are signed and sent to the blockchain.</p>
                        <h3>11. Cancellation</h3>
                        <p>Lykke shall, in its discretion, elect to avoid any transaction rendering the transaction void ab initio where:</p>
                        <ListGray>
                            <li>Your admission as a participant has been suspended by Lykke;</li>
                            <li>The listing of the assets in respect of which a transaction is instructed has been suspended;</li>
                            <li>You are in Default (see section 16);</li>
                            <li>Lykke determines at its discretion that incomplete or conflicting details have been submitted by you or any third parties in relation to a transaction;</li>
                            <li>The transaction results or appears to result from a communication or information technology error or problem or to be a mistake;</li>
                            <li>The transaction is or appears in the sole discretion of Lykke to be tainted by or connected with fraud, illegality, insider dealing, market abuse, money laundering, or any other breach of applicable laws and regulations or contractual arrangements;</li>
                            <li>The transaction is or appears to be the result of an Event of Force Majeure;</li>
                            <li>The transaction is one that any governmental authority requires or requests that Lykke treat as void and Lykke considers, in its discretion, that compliance with such a request would be appropriate.</li>
                        </ListGray>
                        <p>Lykke shall not incur and specifically disclaims any liability as a result of losses sustained by you by reason of such cancellation.</p>
                        <h3>12. Risks and price volatility</h3>
                        <p>You understand and accept the risks in connection with trading securities, derivatives, and financial instruments on Lykke and using the Services as set forth above and hereinafter. In particular, but not limited to, you understand the inherent risks listed hereinafter:</p>
                        <ListGray>
                            <li>Risk of software weaknesses: You understand and accept that the underlying software application and software platform (i.e., the Bitcoin and Ethereum blockchain) is still in an early development stage and unproven, why there is no warranty that the Services will be uninterrupted or error-free, and why there is an inherent risk that the software could contain weaknesses, vulnerabilities, or bugs causing, inter alia, the complete loss of funds.</li>
                            <li>Regulatory risk: You understand and accept that the blockchain technology allows new forms of interaction and that it is possible that certain jurisdictions will apply existing regulations on, or introduce new regulations addressing, blockchain technology-based applications, which may be contrary to the current setup of Lykke and which may, inter alia, result in substantial modifications of Lykke Services, including their termination.</li>
                            <li>Risk of loss of private key: Lykke can only be accessed by using the wallet with a combination of your account information (address), private key, and password. The private key is encrypted with a password. You understand and accept that if your private key file and password respectively get lost or stolen, the obtained products associated with your account (address) or password will be unrecoverable and will be permanently lost.</li>
                            <li>Risk of theft: You understand and accept that the underlying software application and software platform (i.e. the Bitcoin and Ethereum blockchain) may be exposed to attacks by hackers or other individuals that could result in theft or loss of funds.</li>
                            <li>Risk of mining attacks: You understands and accepts that the blockchain used for the Lykke is susceptible to mining attacks, including but not limited to double-spend attacks, majority mining power attacks, "selfish-mining" attacks, and race condition attacks. Any successful attacks present a risk to Lykke Services.</li>
                        </ListGray>
                        <p>Lykke cannot and does not guarantee that the transactions will be profitable. You acknowledge and agree that the transactions may be highly volatile (i.e., high volatility may occur during important news events, economic surprises, unusual social events, etc.) and that buying and selling products involves the risk of acquiring rights against an issuer who might not be creditworthy.</p>
                        <h3>13. Public and private key, custody</h3>
                        <p>When you create an account, the Services generate and store an encrypted digital private and public key pair that you may use to send buy or sell orders. The public key generated by the Services works as your Lykke Wallet address and may be shared with the network and with others to complete the transactions. The private key uniquely matches the Lykke Wallet address and must be used in conjunction with the Lykke Wallet address to authorize the transfer of products from or to that Lykke Wallet address.</p>
                        <p>The private key is stored in the secured area of your mobile phone encrypted by a password. The private key is also stored as a SHA-265 encrypted string in the Lykke cloud infrastructure, so that you may use multiple devices or recover your Lykke Wallet on another device in case your device is lost or stolen. The private key is encrypted by your password. The password may be temporarily stored encrypted by PIN/TouchID during the opened session. When the session closes due to logging out, or inactivity timeout, or the application is reinstalled, or by the demand of the user, or by the action of the Lykke compliance service, you must log in again using your password. The password cannot be recovered. In case you forget your password, you will need to wait until the lock period is over in order to refund your funds. Please refer to the Privacy Policy for further details.</p>
                        <p>The digital products stored in the private wallets in the Lykke Wallet are controlled by your private key. The digital products stored in the trading wallet in the Lykke Wallet are controlled by the private key of Lykke.</p>
                        <h3>14. Data protection</h3>
                        <p>The information provided pursuant to these Terms will be used by Lykke and/or any of its group undertakings (together with other Lykke Companies, the “Group”) for the purposes of providing you with digital products, services, and data pursuant to these Terms and enabling the Group to perform its business activities.</p>
                        <p>You acknowledge and agree that (subject always to Lykke's <Link href="/privacy-policy"><TextLink href="/privacy-policy" noUnderline>Privacy Policy</TextLink></Link>) any entity within the Group may disclose your data (“Participant Data”), including Personal Data and Sensitive Personal Data as defined under the relevant applicable laws and regulations, specifically but not limited to the General Data Protection Regulations (“GDPR”)  to organisations within and outside of the Group for the purpose of providing digital assets, services, and data to you, and performing its business activities and any other activities.</p>
                        <p>You explicitly consent to the export of your data to a location outside your country of domicile and to third parties outside the Group.</p>
                        <h3>15. Prohibited activities</h3>
                        <p>You agree that you will not use Lykke Services to perform any type or sort of illegal activity or to take any action that negatively affects the performances of Lykke Services. You must under no circumstances engage, attempt to engage or procure the engagement via the Services in any of the following activities, nor help a third party in any such activity to:</p>
                        <ListGray>
                            <li>Attempt to gain unauthorized access to our Services or another user’s account;</li>
                            <li>Make any attempt to bypass or circumvent any security features;</li>
                            <li>Violate any law, statute, ordinance, or regulation;</li>
                            <li>Reproduce, duplicate, copy, sell, or resell our Services for any purpose except as authorized in these Terms; or</li>
                            <li>Engage in any activity that is abusive or interferes with or disrupts our Services.</li>
                        </ListGray>
                        <p>If you are blocked by Lykke from accessing Lykke Services, you agree not to implement any measures to circumvent such blocking. Use of our Services in connection with any transaction involving illegal products or services is prohibited. Lykke compliance service implements regular checks on the traces of transactions to discourage the use of funds of dubious origin, including Ponzi schemes, Tor internet, mixers, etc. Lykke reserves the right to suspend your account temporarily or permanently or otherwise restrict your use of Lykke Services if any violation of this section occurs. Additionally, in case of a participant’s violation, Lykke reserves its legal rights.</p>
                        <h3>16. Default</h3>
                        <p>Each of the following constitutes an “Event of Default”:</p>
                        <ListGray>
                            <li>Your failure to perform any obligation due to Lykke;</li>
                            <li>Where any representation or warranty made by you is or becomes untrue;</li>
                            <li>You are unable to pay your debts (if any arise) when they fall due;</li>
                            <li>Your death (if the participant is an individual) or you are declared absent or become of unsound mind;</li>
                            <li>Any other circumstance where Lykke reasonably believes that it is necessary or desirable to take any action set out in the below paragraph;</li>
                            <li>You are performing a prohibited activity as specified in section 15, you involve Lykke in any type of fraud or illegality, and if Lykke suspects that you are engaged in money laundering activities or terrorist financing or other criminal activities;</li>
                            <li>Commencement of proceedings or investigations against you by a governmental authority, including but not limited to the request for an action set out in the below paragraph by a competent governmental authority or body or court;</li>
                            <li>In cases of material violation by you of the requirements established by any applicable laws, such materiality determined in good faith by Lykke;</li>
                            <li>Any other situation where it would not be in the best interest of Lykke that you continue to be a participant.</li>
                            <li>If an Event of Default occurs, Lykke may at its absolute discretion, at any time and without prior notice, take one or more of the following actions:</li>
                            <li>Terminate these Terms without notice;</li>
                            <li>Debit your account or accounts for the amounts that are due to Lykke (if any);</li>
                            <li>Close any or all of your accounts held with Lykke;</li>
                            <li>Combine your accounts, consolidate the balances in such participant accounts, and set off those balances; or</li>
                            <li>Refuse to open new accounts for you.</li>
                        </ListGray>
                        <h3>17. Confidentiality</h3>
                        <p>Both Lykke and you hereto acknowledge and agree that the other party will receive or have access to Confidential Information.</p>
                        <p>You and Lykke undertake in respect of Confidential Information of which they are the recipient:</p>
                        <ListGray>
                            <li>To treat such information as confidential;</li>
                            <li>
                                Not, without the disclosing party’s prior written consent, which is not to be unreasonably withheld, to communicate or disclose any part of such information to any person except to:
                                <List>
                                    <li>Those of its Representatives, on a need-to-know basis, who are directly involved in using or providing or facilitating the provision or use of the Services; or</li>
                                    <li>The recipient's auditors, professional advisors, and any other persons or bodies having a legal right or duty to have access to, or knowledge of, the Confidential Information in connection with the business of the recipient.</li>
                                </List>
                            </li>
                            <li>To ensure that all recipients mentioned in paragraph (b)(i) above are made aware, prior to disclosure, of the confidential nature of the Confidential Information and that they owe a duty of confidence to the disclosing party and to ensure that such recipients comply with this paragraph (Confidentiality); and</li>
                            <li>Not to use or circulate such information within its own organization except to the extent necessary for the purposes of, and in compliance with, the restrictions in this paragraph.</li>
                        </ListGray>
                        <p>The obligations in this paragraph will not apply to any Confidential Information that is:</p>
                        <ListGray>
                            <li>In the recipient’s possession (with full right to disclose) before receiving it; or</li>
                            <li>Becomes public knowledge other than by breach of this paragraph; or</li>
                            <li>Independently developed by the recipient without access to or use of the Confidential Information; or</li>
                            <li>Lawfully received from a third party (with full right to disclose); or</li>
                            <li>Trade data that must be disclosed to governmental authorities according to applicable laws; or</li>
                            <li>It is considered as publicly available Market Data.</li>
                        </ListGray>
                        <p>Either party may disclose any Confidential Information (including all or any part of these Terms) if obliged to do so in order to comply with applicable laws, including following the request from any competent court, regulator, or similar governmental authority. To the extent it is legally permissible to do so, such party will promptly notify the other party in writing of such obligation on request.</p>
                        <p>Upon termination of these Terms, both you and Lykke will, within a reasonable period of time thereafter, return all Confidential Information received from the other party and copies made thereof by the receiving party, or certify in writing that, to the best of the party’s knowledge and belief, all such Confidential Information has been destroyed; provided, however, that each party may retain an archival copy of the disclosing party’s Confidential Information to be used only in the event of a dispute regarding these Terms or as may be required in connection with legal or regulatory matters involving these Terms.</p>
                        <h3>18. Indemnification</h3>
                        <p>You agree to indemnify, defend, and hold Lykke, its employees, agents, consultants, subsidiaries, partners, affiliates, and licensors harmless against any and all claims, costs, losses, damages, liabilities, judgments, and expenses (including reasonable fees of attorneys and other professionals) arising from or in any way related to your use of our Services, your violation of these Terms, or your violation of any rights of any other person or entity.</p>
                        <h3>19. Limitation of liability</h3>
                        <p>Lykke is liable to you for direct loss caused by defective performance of a contract where the wilful intent or negligence is attributable to Lykke.</p>
                        <p>Lykke shall assume no liability for any further claims, e.g. relating to compensation for indirect or consequential loss, lost profit, or loss of earnings, unrealized savings, or additional expense incurred, regardless of the legal grounds.</p>
                        <p>You are fully aware that the access to and the use of Lykke Services through the Internet, the wallet, and from abroad might violate foreign laws applicable to you. You undertake to inform yourself and to assume sole liability for any risks relating to such foreign legislation. Any responsibility of Lykke regarding the possible infringement of foreign laws in connection with your use of the Services from abroad is expressly and completely excluded.</p>
                        <p>You shall bear any losses arising as a result of orders that are not properly legible or as a result of forged or unauthorized orders, except in cases where Lykke is at fault. Responsibility for the authenticity, accuracy, and completeness of orders and data transmitted shall – expect in cases where Lykke is at fault – rest solely with you, even when Lykke does not receive these orders/data directly from you, but through third parties.</p>
                        <p>Lykke shall assume no liability for losses if, for reasons for which Lykke cannot be held responsible, Lykke has been prevented from performing the transaction properly or on time, for example as a result of Force Majeure or measures, orders, and/or decrees issued by domestic or foreign governmental authorities.</p>
                        <p>In particular, Lykke shall assume no liability for actions (e.g. declarations of Default), failure to take action, or any suspension or restriction of services by any element within the blockchain. Furthermore, Lykke shall assume no liability for the consequences of official directives with regard to any means of payments allowed for the Lykke Wallet.</p>
                        <p>Lykke shall not be liable for the conduct of third parties that it mandates, provided it has exercised due diligence when choosing and instructing them.</p>
                        <p>If you have as a result of wilful intent or negligence, e.g. breach of your contractual obligations, contributed to causing and/or aggravating a loss, the extent to which Lykke and you must bear the loss shall be determined in accordance with the principles of contributory negligence. You acknowledge that you have an obligation to prevent and reduce loss.</p>
                        <h3>20. Termination</h3>
                        <p>The Services by Lykke may be terminated on thirty days' notice by the user or by Lykke, effective at the end of a calendar month. Notice of termination must be served in writing by registered letter.</p>
                        <p>By deleting the app and selling his or her coins, the user closes his or her user account.</p>
                        <p>Lykke reserves the right to close an account without prior notice immediately on the grounds of misusage, particularly violations of the Terms of Use or any applicable law.</p>
                        <h3>21. Complaints and disputes</h3>
                        <p>In the event that an alleged breach, controversy, claim, dispute or difference (a Dispute) arises between you and Lykke out of or in connection with these Terms (including but not limited to the validity, performance, breach, or termination thereof), the parties shall seek to resolve the matter by negotiation by referring the matter first to:</p>
                        <ListGray>
                            <li>Any member of your executive management in case of legal persons, or you personally if you are acting as a natural person.</li>
                            <li>In the case of Lykke, to the Lykke Customer Support Department.</li>
                            <li>If you wish to report an error or a Dispute, you must send an email to Lykke’s Customer Support Department at <TextLink noUnderline href="mailto:support@lykke.com">support@lykke.com</TextLink>.</li>
                        </ListGray>
                        <p>The Following information will need to be included:</p>
                        <ListGray>
                            <li>Your name and surname;</li>
                            <li>Customer Account number (or other identification details);</li>
                            <li>Detailed inquiry description; and</li>
                            <li>The date and time that the issue arose.</li>
                        </ListGray>
                        <p>If you receive a response from the Customer Support Department but deem that the matter needs to be addressed further, you may ask the Customer Department to forward it to the Compliance Department or contact directly the Compliance Department at <TextLink noUnderline href="mailto:compliance@lykke.com">compliance@lykke.com</TextLink>. Both the Customer Support Department and the Compliance Department shall:</p>
                        <List>
                            <li>Send an initial email confirming the receipt of your complaint;</li>
                            <li>Send an official response to you within 14 Business Days, respectively;</li>
                            <li>Try to resolve the matter as soon as reasonably possible; and</li>
                            <li>Inform you of the outcome.</li>
                        </List>
                        <p>Additionally, you must inform Lykke about any trading error within 24 hours from the time of the error. Otherwise, Lykke will not be able to investigate the error. Any trading error coming from Lykke will be amended where possible. If a situation arises that is not expressly covered by these Terms, the parties agree to try to resolve the matter on the basis of good faith and fairness and by taking such action as is consistent with market practice.</p>
                        <p>Your right to take legal action remains unaffected by the existence or use of any complaints procedures referred to above.</p>
                        <h3>22. Dispute resolution, place of jurisdiction, and governing law</h3>
                        <p>These Terms and any other related contractual documents shall exclusively be governed by and construed in accordance with the substantive laws of Switzerland, excluding the Swiss International Private Law Act, as amended from time to time.</p>
                        <p>In the event that the parties are unable to resolve a Dispute in accordance with these Terms, then the parties hereby irrevocably submit such Dispute to the exclusive jurisdiction of the courts of Zurich (venue being Zurich 1), Switzerland.</p>
                        <h3>23. Record keeping</h3>
                        <p>Lykke will keep records containing your personal data, trading information, account opening documents, communications, and anything else which relates to you in accordance with applicable laws, but at least for five years after termination of these Terms.</p>
                        <h3>24. Taxation</h3>
                        <p>You bear the sole responsibility to determine if your use of the Services, and/or any other action or transaction related to your digital assets on Lykke, have tax implications for you.</p>
                        <p>By using the Services, and to the extent permitted by law, you agree not to hold any person other than yourself (including Lykke) liable for any tax liability associated with or arising from the operation of the Services or any other action or transaction related to Lykke.</p>
                        <h3>25. Fees</h3>
                        <p>The price for Lykke Services is published on the website <TextLink noUnderline href="https://lykke.com">https://lykke.com</TextLink>.</p>
                        <h3>26. Assignment/Entire agreement</h3>
                        <p>Lykke may assign these Terms to its parent company, affiliate, or subsidiary, or in connection with a merger, consolidation, or sale or other disposition of all or substantially all of its assets. These Terms, together with any other agreements that apply to you, constitute the entire and exclusive agreement between us and you regarding its subject matter, and supersede and replace any previous or contemporaneous written or oral contract, warranty, representation, or understanding regarding its subject matter.</p>
                        <h3>27. Severability</h3>
                        <p>If for any reason a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable or illegal or contravene any rule, regulation, or law of any Market or regulator, that part will be deemed to have been excluded from these Terms from the beginning, and these Terms will be interpreted and enforced as though the provision had never been included and the legality or enforceability of the remaining provisions of the Terms or the legality, validity, or enforceability of this provision in accordance with the law and/or regulation of any other jurisdiction, shall not be affected but should remain in full force and effect.</p>
                        <h3>28. Changes to these terms</h3>
                        <p>The present Terms may change from time to time, including but not limited to cases of changes in our Services, in technology, in regulation, and for any other case that Lykke deems as appropriate to take measures. In case of a change, we will provide you notice of such change by email and by posting the updated Terms on our website and changing the "Last Updated" date above. Any amended Terms shall become effective not earlier than 14 days after they are posted and shall apply prospectively to the use of the Services upon the effectiveness of such changes. However, in case the changes address new functions of Lykke Services or they are made for any legal reasons, they shall be of immediate effect. Upon effectiveness of the change, as described above, the change of Terms shall be considered as accepted by you in case you continue using the Services. Therefore, in case you do not agree to any amended Term, you must immediately cease using the Services.</p>
                        <h3>29. Communications and written notices</h3>
                        <p>Unless the contrary is specifically provided in these Terms, any notice, instruction, request, or other communication to be given to Lykke by the participant under these Terms shall be in writing and shall be sent to Lykke’s address below (or to any other address which Lykke may from time to time specify to the participant for this purpose) and shall be deemed delivered only when actually received by Lykke at:</p>
                        <p>Lykke Corp UK Ltd</p>
                        <p>86-90 Paul Street</p>
                        <p>London EC2A 4NE</p>
                        <p>United Kingdom</p>
                        <p>Any communications sent to the participant (documents, notices, confirmations, statements, etc.) are deemed received:</p>
                        <ListGray>
                            <li>If sent by email, within one hour after emailing it;</li>
                            <li>If sent by Lykke’s online system internal mail or support chat, immediately after sending it;</li>
                            <li>If sent by telephone, once the telephone conversation has been finished;</li>
                            <li>If sent by post, seven calendar days after posting it;</li>
                            <li>If sent via commercial courier service, at the date of signing of the document on receipt of such notice;</li>
                            <li>If sent by airmail, eight Business Days after the date of dispatch; or</li>
                            <li>If posted on Lykke's Web page, within one hour after it has been posted.</li>
                        </ListGray>
                        <p>In order to communicate with the participant, Lykke will use the contact details provided by the participant while opening the Customer Account or as updated later on. Hence, the participant has an obligation to notify Lykke immediately of any change in the participant’s contact details.</p>
                        <h3>30. Contact us</h3>
                        <p>If you have any questions about these terms, please contact us: <TextLink noUnderline href="mailto:support@lykke.com">support@lykke.com</TextLink>.</p>
                    </PolicyWrapper>
                </Col>
            </Row>
        </Grid>
    )
}

export default TermsOfUseComponent;