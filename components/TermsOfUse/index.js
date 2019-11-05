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
                        <h1>Terms and Conditions</h1>
                        <p>Last Updated 15.10.2019</p>
                        <h4>Welcome to Lykke</h4>
                        <p><b>Before using Lykke’s services, Participants should familiarize themselves with all the terms, regulations and their use of Lykke’s services.</b></p>
                        <p><b>By accessing or using Lykke’s services, the Participant is agreeing to be bound by these Terms.</b></p>
                        <p><b>If the Participant is accepting these Terms and using Lykke’s services on behalf of a legal entity, that legal entity will be bound to these Terms.</b></p>
                        <p>The framework for using Lykke’s services as outlined in section 1 below is divided into  three parts and applies to all the contractual relationships between the Participant and Lykke Corp UK, Lykke Netherlands B.V. and Lykke Switzerland AG (each of these entities hereinafter called <b>“Lykke”</b> or the <b>“Relevant Trading Venue”</b>):</p>
                        <ListGray>
                            <li>The general terms as set out in these Terms and Conditions,</li>
                            <li><TextLink href="/trading-rules">Trading Rules,</TextLink></li>
                            <li><TextLink href="/privacy-policy">Privacy Policy</TextLink></li>
                        </ListGray>
                        <h3>What do these Terms cover?</h3>
                        <p>Lykke’s web and mobile interfaces (hereinafter referred to as the “Lykke Apps”) as well as the Lykke application programming interface (hereinafter referred to as the "Lykke API”). They provide two principal functions (the <b>“Services”</b>, or <b>“Lykke’s Services”</b>):</p>
                        <p>Access to the Relevant Trading Venue and its respective services:</p>
                        <ListGray>
                            <li><b>Lykke Corp UK</b>, providing a trading venue for, including but not limited to, colored coins representing fiat currencies (such as Euros, Swiss Francs, British Pounds, US Dollars) as well as for cryptocurrencies (such as Bitcoin, Ether, Litecoin, Bitcoin Cash and Dash);</li>
                            <li><b>Lykke Netherlands B.V.,</b> providing a trading venue for utility tokens which can be exchanged against Bitcoin and Ethereum;</li>
                        </ListGray>
                        <p>And Lykke Corp AG, providing blockchain technology-based assets (e.g. but not limited to LKK, LKK1Y and LKK2Y tokens).</p>
                        <p>Storage of various types of digital assets such as coins and tokens including but not limited to cryptocurrencies, utility tokens, security tokens and colored coins representing fiat currencies (<b>“Digital Assets”</b>).</p>
                        <p>These Terms and any other terms incorporated by reference apply to any access and use of Lykke’s Services through the Lykke Apps and the Lykke API.</p>
                        <p>In addition to these overall Terms, when trading on a Relevant Trading Venue the Participant is also bound by specific trading rules and regulations that relate to that particular trading venue. </p>
                        <h3>What Participants need to be aware of</h3>
                        <p>Lykke provides different services in different jurisdictions. Therefore, depending on what services the Participant wishes to use and/or what products it wants to trade and the country where it resides, there might be different requirements to fulfill. </p>
                        <p><b>Participants need to be aware that there may be restrictions on what services Lykke can offer.</b></p>
                        <p>To be able to offer to the Participant the Lykke’s Services and let it register to use these Services there are certain laws and regulations to be followed. These relate but are not limited to Know Your Customer (KYC), Anti-Bribery and Corruption (ABC), Sanctions, Anti-Money Laundering (AML), Counter-terrorism, Taxation, Data Protection, and Privacy. </p>
                        <p><b>So there are certain checks Lykke needs to carry out and there is information the Participant needs to provide before using Lykke’s Services. Compliance is integral to the principles Lykke adheres to.</b></p>
                        <h3>What can the Participant trade </h3>
                        <p>The products tradable on each Relevant Trading Venue are listed in the Lykke Apps.</p>
                        <h3>Who can use Lykke’s Services</h3>
                        <p>Lykke’s Services can be used by anyone being over 18 years old who wants to trade in the Digital Assets listed on a Relevant Trading Venue. </p>
                        <p>The Participant must ensure that it uses and accesses Lykke’s Services only in its own name and for its own account.</p>
                        <p>If the Participant is acting as a legal entity, it must ensure that it:</p>
                        <ListGray>
                            <li>uses and accesses Lykke’s Services on behalf of the legal entity;	</li>
                            <li>is duly authorized to enter into transactions on behalf of the legal entity.</li>
                        </ListGray>
                        <p>When the Participant signs up either as an individual or as a legal entity it will get registered as an Authorised Person. Only Authorised Persons are allowed to use Lykke’s Services and trade on the Relevant Trading Venues.</p>
                        <p><b>There are certain things the Participant will need to provide.</b></p>
                        <p><b>Firstly…</b></p>
                        <p>To register, in order to use Lykke’s Services and become an Authorised Person, it must provide a valid mobile phone number and email address. The number is used as part of the authentication process. As part of using Lykke’s Services, the Participant agrees to receive unencrypted emails and SMS/text messages from Lykke. Please note that while Lykke does not charge for SMS/text messages, the mobile carrier’s standard messaging rates will apply.</p>
                        <p>Failure to provide a valid mobile phone number may result in the restriction of the Participant's use of Lykke’s Services. If Lykke suspects that the mobile number is invalid or that it is using a VOIP service to circumvent the requirement to provide a valid mobile phone number, Lykke may suspend, terminate, or otherwise restrict the Participant use of Lykke’s Services.</p>
                        <p>Lykke takes the security of its customers very seriously. Lykke ensures that both its customers and its Services comply with all relevant laws. As a result, participants should be aware that Lykke may, at any time and for any reason and without notice, terminate or suspend the account of any Authorised Person whom Lykke has cause to believe is not compliant with these Terms and/or any relevant laws.</p>
                        <p><b>Secondly…</b></p>
                        <p>Once the Participant has registered as an Authorised Person and in order to become a Registered Account Holder and to trade on the Relevant Trading Venues, it acknowledges and agrees that:</p>
                        <ListGray>
                            <li>the information it provides to Lykke during account creation and any subsequent identity verification processes (such as Know Your Customer, "KYC") is accurate, authentic and complete, and will be updated in a timely manner as necessary to keep it so; </li>
                            <li>if it is under 18 years of age, it is not authorized to use Lykke’s Services; </li>
                            <li>it has the obligation to keep all information provided up to date, updating it if there are any changes;</li>
                            <li>it is at the sole discretion of Lykke whether it will approve the opening of an account. Additionally, Lykke reserves itself the right to suspend accounts temporarily or permanently, including (but not limited to) when it is required or recommended by applicable governmental, regulatory, or law enforcement provisions or in case the Participant fails to provide the information required during the course of the business relationship, or if there is a reasonable doubt that any information provided by the Participant is wrong, untruthful, outdated or incomplete.</li>
                        </ListGray>
                        <h3>Prohibition of use</h3>
                        <p>By accessing and using Lykke’s Services, the Participant acknowledges and declares that it is not on any sanctions list, including but not limited to the United Nations Security Council Sanctions Lists, OFAC Sanctions list, EU Sanctions list, UK Sanctions lists, and Swiss Sanctions lists. Lykke maintains the right to select markets and jurisdictions to operate and to restrict or deny the Services to Participants in other jurisdictions. The content of these Terms shall not be excluded under the laws of the jurisdiction of the Participant. Prohibited Participant may not use or access Lykke and any of its services.</p>
                        <h3>Participants responsibilities when using the Services </h3>
                        <p>The Participant is responsible for ensuring that its personal information in its account profile is updated and correct, including its email address and mobile phone number, as well as the KYC data provided. </p>
                        <p>It is also responsible for maintaining adequate security, control, and confidentiality of its device access, its account information, including any personal identification numbers (PINs), passwords, 12-word-backup/restore keys, API keys, or other codes associated with its account and any activity occurring within that account. </p>
                        <p>The loss or compromise of this information may result in unauthorized access to the Participant’s account, which may result in the loss or theft of any Digital Asset.</p>
                        <p>If the Participant believes its account has been compromised, needs to report a security incident, has experienced any operational problems, or has a security concern, it should contact Lykke immediately at <TextLink href="mailto:support@lykke.com">support@lykke.com</TextLink>.</p>
                        <p>Lykke has no responsibility for any loss that the Participant suffers as a result of failing to comply with these Terms or failure to follow or act on any notices or alerts that Lykke may send to the Participant.</p>
                        <h3>Availability of Services</h3>
                        <p>Lykke provides the Services via its Lykke Apps and Lykke API and works to maintain their availability at all times on a best effort basis.</p>
                        <p>The Participant provides the requirements to use these tools. It is responsible for its own internet and mobile connectivity (over which Lykke has no control). </p>
                        <p>Lykke is not liable for the functionality of any systems other than the ones that it provides.</p>
                        <p>Lykke is not liable for guaranteeing or ensuring the compatibility of the Services with the Participant’ devices and methods of accessing the Services. The Participant is aware that if it is using certain devices or older versions of software, then some of the access to and functionality of Lykke’s Services may be impaired, not work or not be available. The Participant bears full responsibility for the compatibility of its devices for use of the Services and Lykke shall under no circumstances be responsible for any harm or losses it incurs as a result. </p>
                        <p>Subject to these Terms, Lykke shall use reasonable efforts to make available, operate, and maintain Lykke’s Services during the term of these Terms and to permit the Participant to access and use Lykke’s Services in accordance with these Terms. Lykke shall use all reasonable efforts to notify the Participant promptly of any difficulties experienced by Lykke or other participants with respect to their access to or the use of Lykke’s Services, but only to the extent that Lykke is aware of such difficulties and reasonably determines that they are material to the Participant access and use of Lykke’s Services. Similarly, the Participant shall notify Lykke at the earliest possible time should it become aware of any material-technical failures or difficulties with Lykke’s Services or upon becoming aware of any material breach (or any event which, by giving notice and/or the lapse of time, would constitute a material breach) of these Terms.</p>
                        <p>Lykke’s Services may evolve over time. As a result,  Lykke may apply changes, replace, or discontinue (temporarily or permanently) its Services at any time for any reasonable cause with reasonable notice or without notice in case of a Force Majeure. In this case, the Participant may be prevented from accessing or using the Services. If at Lykke’s sole discretion, it decides to discontinue its Services permanently, a notice will be provided via its website and via email.</p>
                        <h3>Force Majeure</h3>
                        <p>A Force Majeure Event is when external factors happen that are beyond Lykke’s or the Participant’s control. For example:</p>
                        <ListGray>
                            <li>Government actions, the outbreak of war or hostilities, the threat of war, acts of terrorism, national emergency, riot, civil disturbance, sabotage, requisition, or any other international calamity or economic or political crisis;</li>
                            <li>Act of God, earthquake, tsunami, hurricane, typhoon, accident, storm, flood, fire, epidemic, or other natural disasters;</li>
                            <li>Labor disputes and lock-out;</li>
                            <li>Breakdown, failure, or malfunction of any electronic, network, and communication lines (not due to the fault of Lykke);</li>
                            <li>Any event, act, or circumstances not reasonably within Lykke’s control and the effect of that event or events is such that Lykke is not in a position to take any reasonable action to cure the default.</li>
                        </ListGray>
                        <h3>Trading </h3>
                        <h4>Deposit, trading, and withdrawal</h4>
                        <p><b>Note: The following terms may be dependent on restrictions over which Digital Assets the Participant wishes to deposit and trade, depending on where it is located.</b></p>
                        <p><b>Deposits and withdrawals are subject to Anti Bribery and Corruption, Fraud Prevention and Anti-Money Laundering/Counter-terrorism and Sanctions checks.</b></p>
                        <p><b>Lykke reserves the right to take such action as may be necessary for the event of any transaction that appears irregular, suspicious or in breach or potential breach of any of the above.</b></p>
                        <p>If the Participant is on-boarded by Lykke as a Registered Account Holder, Lykke will open a Wallet for the Participant, which will be activated upon its deposit of assets.</p>
                        <p>The Participant may deposit Digital Assets into its Wallet at any time during the duration of the contractual relationship established by these Terms. </p>
                        <p>Lykke will not accept third-party or anonymous transfers in favor of the Participant’s Wallet. By accepting those terms, the Participant confirms that he is the beneficial owner of the funds to be deposited in its wallet.</p>
                        <h4>Risks and price volatility</h4>
                        <p>The Participant understands, acknowledges and agrees that there are inherent risks in connection with trading on the Relevant Trading Venues and using the Services provided. In particular, but not limited to, it understands the risks listed below:</p>
                        <ListGray>
                            <li>
                                <b>Risk of software malfunction:</b> it understands and accepts that the underlying software application and software platform is still in an early development stage and unproven, which is why there is no warranty that the Services will be uninterrupted or error-free, and there is an inherent risk that the software could contain weaknesses, vulnerabilities, or bugs, causing downtimes and malfunctions, including, inter alia, complete loss of Digital Assets.
                            </li>
                            <li>
                                <b>Regulatory risk:</b> it understands and accepts that the blockchain technology allows new forms of interaction and that it is possible that certain jurisdictions will apply existing regulations on, or introduce new regulations addressing, blockchain technology-based applications, which may be contrary to the current setup of Lykke and which may, inter alia, result in substantial modifications of Lykke’s Services, including their termination. It also understands that applicable laws and regulations may require Lykke to, upon request by government agencies, freeze deposits, withdrawals or trading (or all), or provide information regarding its account. Lykke must comply with the law and the Participant accepts any inconvenience to itself or other consequences resulting from Lykke’s compliance.
                            </li>
                            <li>
                                <b>Risk of loss of access information:</b> where it accesses Lykke’s Services via the Lykke Apps, this access will be possible with a combination of its account information (address) and its private key or password and PIN. It understands and accepts that if parts or all of this access information is lost or stolen, the obtained products associated with its account (address) may be unrecoverable and permanently lost.
                            </li>
                            <li>
                                <b>Risk of theft:</b> it understands and accepts that the underlying software application and software platform may be exposed to attacks by hackers or other individuals that could result in theft or loss of funds.
                            </li>
                            <li>
                                <b>Risk of mining attacks:</b> it understands and accepts that the blockchain technology is susceptible to mining attacks, including but not limited to double-spend attacks, majority mining power attacks, "selfish-mining" attacks, and race condition attacks. Any successful attacks present a risk to Lykke’s Services.
                            </li>
                            <li>
                                <b>Risks associated with Digital Assets:</b>
                                <p>Price volatility: prices can and do fluctuate on any given day. Due to such price fluctuations, the Participant may increase or lose value in its Digital Assets at any given moment. Any Digital Asset may be subject to large swings in value and may even become worthless. Speculation on the value of Digital Assets is high risk and the Participant should never trade more than it can afford.</p>
                                <p>Factors beyond Lykke’s control may affect market liquidity for a particular Digital Asset such as regulatory activity, market manipulation or unexplainable price volatility. Blockchain networks may go offline as a result of bugs, hard forks, or a number of other unforeseeable reasons. Lykke does not assume the risk of losses due to trading or due to factors beyond its control. </p>
                                <p>Technicity: Digital Assets are often described in technical language. Listing of a Digital Asset on a Relevant Trading Venue does not indicate approval or disapproval of the underlying technology, and should not be used as a substitute for the Participant’s own understanding of the risk associated with each Digital Asset.</p>
                                <p>Counterparty risk: Digital Assets might bear a counterparty risk regarding the issuer of the Digital Assets. It is assumed that the Participant reads and understands the prospectus and/or information memorandum of each product it is trading on the Relevant Trading Venues.</p>
                                <p>There is no central bank that can control the supply of cryptocurrencies or take corrective action to protect their value in a crisis. Cryptocurrencies are autonomous and largely unregulated.</p>
                            </li>
                            <li>Lykke cannot and does not guarantee that transactions undertaken by the Participant will be profitable. The Participant acknowledges and agrees that the transactions may be highly volatile (i.e., high volatility may occur during important news events, economic	surprises, unusual social events, etc.) and that buying and selling products involves the risk of acquiring rights against an issuer who might not be creditworthy, and adverse price movements may result in losses equivalent to all of its invested funds. </li>
                            <li>In entering into any transaction on a Relevant Trading Venue, the Participant represents that it has been, are, and will be solely responsible for making its own independent appraisal and investigations into the risks of the transaction and the underlying Digital Assets. The Participant acknowledges that it has sufficient knowledge, market sophistication, professional advice and experience to make its own evaluation. </li>
                        </ListGray>
                        <p>Note: there may be additional risks that have not been foreseen or identified in these Terms.</p>
                        <h4>Cancellation </h4>
                        <p>Lykke shall, in its absolute discretion, elect to avoid or reverse any transaction rendering the transaction void from the outset where:</p>
                        <ListGray>
                            <li>The Participant’s admission as an Authorised Person and/or Registered Account Holder has been suspended by Lykke;</li>
                            <li>The listing of the products in respect of which a transaction is instructed has been suspended;</li>
                            <li>The Participant is in Default (see section 15 below);</li>
                            <li>Lykke determines at its discretion that incomplete or conflicting details have been submitted by the Participant or any third parties in relation to a transaction;</li>
                            <li>The transaction results or appears to result from a communication or information technology error or problem or to be a mistake;</li>
                            <li>There appears to have been an error in pricing, including but not limited to, quoted price, traded price or settlement price.</li>
                            <li>The transaction is or appears, at the sole discretion of Lykke, to be tainted by or connected with fraud, illegality, insider dealing, market abuse, money laundering, or any other breach of applicable laws and regulations or contractual arrangements;</li>
                            <li>The transaction is or appears to be the result of an Event of Force Majeure;</li>
                            <li>	The transaction is one that any governmental authority requires to be treated or requests Lykke to treat it as void and Lykke considers, at its sole discretion, that compliance with such a request would be appropriate.</li>
                        </ListGray>
                        <p>Lykke shall not incur any liability whatsoever as a result of losses sustained by the Participant by reason of such cancellation.</p>
                        <h4>Mistrade</h4>
                        <p>The terms of a transaction executed through a Relevant Trading Venue may consist a Mistrade when there is an obvious error in any term, such as price, number of Digital Assets or other units of trading, or identification of the Digital Asset. A transaction consisting of a Mistrade may be canceled by both parties or be determined as such by Lykke. Lykke shall review the transaction under dispute and determine whether it is clearly erroneous, with a view toward maintaining a fair and orderly market and the protection of investors and the public interest.</p>
                        <h3>Anti-Money-Laundering (AML) regulations </h3>
                        <p>Lykke protects itself from involvement in any activity that facilitates money laundering or other criminal activities by following relevant international and local applicable laws and regulations. Therefore, Lykke will conduct all necessary checks according to the applicable AML and counter-terrorism regulations applicable to the Relevant Trading Venue, in particular, but not limited to Know Your Customer (KYC) checks, before allowing the Participant to use Lykke’s Services. Lykke may thus require further documentation from the Participant during the business relationship, for instance, to establish the source of the funds used in a particular transaction, and the origin of wealth.</p>
                        <p>The Participant acknowledges and declares that all of its funds come from a legitimate source and are not derived from illegal activities. Lykke maintains a stance of cooperation with law enforcement authorities globally and will not hesitate to size, freeze, terminate the Participant’s account and funds which are flagged out or investigated by legal mandate.</p>
                        <p>By agreeing to these Terms, the Participant acknowledges and understands that Lykke maintains verification levels that require its participation and verification in order to obtain them, with leveled permissions based on participant-supplied information, Lykke’s ability to verify it, and its internal policies. The Participant accepts that it may not be able to achieve a desired level of verification, and Lykke reserves the right to determine, at its sole discretion, the appropriate verification level and criteria for any user of the Services, as well as the right to downgrade users of the Services without prior notice. Lykke may, from time to time, implement policies restricting verification levels and criteria by nationality, country of residence, or any other factor. This may affect the Participant's ability to withdraw Digital assets or funds and it agrees to indemnify, defend and hold harmless Lykke against any losses associated with an inability to deposit and/or withdraw Digital Assets and funds based on the verification level assigned by Lykke to its account.</p>
                        <h3>Compliance with local laws</h3>
                        <p>The Participant is responsible for abiding by local laws in relation to the legal usage of Lykke’s Services in its local jurisdiction. It must also factor, to the extent of its local law all aspects of taxation, withholding, collection, reporting, and remittance to the appropriate tax authorities.</p>
                        <h3>Funds and Digital Assets</h3>
                        <p>The Participant’s funds and Digital Assets are kept segregated from Lykke’s operational funds and own Digital Assets. For risk diversification as well as liquidity reasons, the Participant’s funds and Digitals Assets may be kept by Lykke on bank accounts, in different currencies, on accounts at third party exchanges or in centralized Lykke hot wallets.</p>
                        <h3>Data protection</h3>
                        <p>The information provided pursuant to these Terms will be used by Lykke Corp and/or any of its subsidiaries (together, the “Lykke Group”) for the purposes of providing the Participant with digital products, services, and data pursuant to these Terms and enabling the Lykke Group to perform its business activities.</p>
                        <p>Lykke will collect, use, store, and otherwise process information about the Participant as permitted by applicable laws and described in detail in the Privacy Policy (<a href="https://www.lykke.com/privacy-policy">https://www.lykke.com/privacy-policy</a>), as updated from time to time, as well as other provisions of these Terms.</p>
                        <p>The Participant undertakes to read the Privacy Policy prior to executing these Terms. In case it finds the Privacy Policy or any parts thereof unclear or unintelligible, please refer to our Data Protection Officer (<a href="mailto:dpo@lykke.com">dpo@lykke.com</a>) prior to executing these Terms. <b>By way of executing these Terms, the Participant acknowledges that it has read and understood the Privacy Policy.</b></p>
                        <h3>Prohibited activities </h3>
                        <p>The Participant agrees that it will not use Lykke’s Services to perform any type of illegal activity or to take any action that affects the performance of Lykke’s Services. The Participant may not engage via the Services in any of the following activities, nor help a third party in any such activity:</p>
                        <ListGray>
                            <li>Attempt to gain unauthorized access to Lykke’s Services or another user’s account;</li>
                            <li>Make any attempt to bypass or circumvent any security features;</li>
                            <li>Violate any law, statute, ordinance, or regulation in any territory or jurisdiction;</li>
                            <li>Reproduce, duplicate, copy, sell, or resell our Services for any purpose except as authorized in these Terms;</li>
                            <li>Engage in reverse engineering howsoever; or</li>
                            <li>Engage in any activity that is abusive or interferes with or disrupts the Services.</li>
                        </ListGray>
                        <p>If the Participant is blocked by Lykke from accessing the Services, it agrees not to implement any measures to circumvent such blocking. </p>
                        <p>The use of Lykke’s Services in connection with any transaction involving illegal products or services is strictly prohibited. </p>
                        <p>Lykke’s compliance department implements regular checks on transactions to discourage the use of funds of illegal origin, including but not restricted to Ponzi schemes, Tor network, mixers/tumblers, darknets, cybercrime, organized crime, insider trading, fraud, etc. </p>
                        <p><b>Lykke reserves the right to suspend any account(s) temporarily or permanently or otherwise restrict the Participant’s use of Lykke’s Services if any violation of this section - or any other section of these Terms - occurs. Additionally, in case of a breach of these Terms, Lykke reserves its legal rights.</b></p>
                        <h3>Default </h3>
                        <p>In signing up for Lykke’s Services and agreeing to these Terms the Participant is legally undertaking to comply with them. If the Participant does not comply or breach any of these Terms then it may be in <b>Default.</b> </p>
                        <p>Each of the following situations constitutes a <b>Default:</b></p>
                        <li>Failure to perform any obligation due to Lykke;</li>
                        <li>Where any representation or warranty made by the Participant is or becomes untrue;</li>
                        <li>The Participant is unable to pay its debts (if any arise) when they fall due;</li>
                        <li>The Participant’s death or if it is declared absent or become of unsound mind;</li>
                        <li>Any other circumstance where Lykke reasonably believes that it is necessary or desirable to take any action set out in the below paragraph;</li>
                        <li>The Participant is performing a prohibited activity as specified in section 14, it involves Lykke in any type of fraud or illegality, and if Lykke suspects that the Participant is engaged in money laundering activities or terrorist financing or other criminal activities;</li>
                        <li>Commencement of proceedings or investigations against the Participant by a governmental authority, including but not limited to the request for an action set out in the below paragraph by a competent governmental authority or body or court;</li>
                        <li>Insolvency events or the winding up of a company holding an account or on whose behalf the account is held;</li>
                        <li>In cases of a material violation by the Participant of the requirements established by any applicable laws, such materiality determined in good faith by Lykke;</li>
                        <li>Any other situation where it would not be in the best interest of Lykke that the Participant continues to use Lykke’s Services.</li>
                        <p>If a Default occurs, Lykke may at its absolute discretion, at any time and without prior notice, take one or more of the following actions:</p>
                        <li>Terminate these Terms without notice;</li>
                        <li>Debit the Participant account or accounts for the amounts that are due to Lykke (if any);</li>
                        <li>Close any or all of the Participant’s accounts held with Lykke;</li>
                        <li>Combine the Participant’s accounts, consolidate the balances in such accounts, and set off those balances; or</li>
                        <li>Refuse to open new accounts for the Participant;</li>
                        <li>In the event of (iv) above Lykke will engage with the appointed administrator of the deceased’s estate or legal power of attorney to restitute any funds held.</li>
                        <h3>Confidentiality </h3>
                        <p>Both Lykke and the Participant acknowledge and agree that the other party may in the course of their respective dealings have access to confidential information.</p>
                        <p>The Participant and Lykke undertake in respect of confidential information of which they are the recipient:</p>
                        <ListGray>
                            <li>To treat such information as confidential;</li>
                            <li>
                                Not, without the disclosing party’s prior written consent, which is not to be unreasonably withheld, to communicate or disclose any part of such information to any person except to:
                                <p>Those of its representatives, on a need-to-know basis, who are directly involved in using or providing or facilitating the provision or use of the Services; or</p>
                                <p>The recipient's auditors, professional advisors, and any other persons or bodies having a legal right or duty to have access to, or knowledge of, the confidential information in connection with the business of the recipient.</p>
                            </li>
                            <li>To ensure that all recipients mentioned in paragraph (ii) above are made aware, prior to the disclosure of the confidential nature of the information and that they owe a duty of confidence to the disclosing party and to ensure that such recipients comply with this paragraph (Confidentiality); and</li>
                            <li>Not to use or circulate such confidential information within its own organization except to the extent necessary for the purposes of, and in compliance with, the restrictions in this paragraph.</li>
                        </ListGray>
                        <p>The obligations in this paragraph will not apply to any confidential information that is:</p>
                        <ListGray>
                            <li>In the recipient’s possession (with full right to disclose) before receiving it; or</li>
                            <li>Becomes public knowledge other than by breach of this paragraph; or</li>
                            <li>Independently developed by the recipient without access to or use of the confidential information; or</li>
                            <li>Lawfully received from a third party (with full right to disclose); or</li>
                            <li>Trade data that must be disclosed to governmental authorities according to applicable laws; or</li>
                            <li>It is considered publicly available market data.</li>
                        </ListGray>
                        <p>Either party may disclose any confidential information (including all or any part of these Terms) if obliged to do so in order to comply with applicable laws, including following the request from any competent court, regulator, or similar governmental authority. To the extent it is legally permissible to do so, such party will promptly notify the other party in writing of such obligation on request.</p>
                        <p>Upon termination of these Terms, both the Participant and Lykke will, within a reasonable period of time thereafter, return all confidential information received from the other party and copies made thereof by the receiving party, or certify in writing that, to the best of the party’s knowledge and belief, all such confidential information has been destroyed; provided, however, that each party may retain an archival copy of the disclosing party’s confidential information to be used only in the event of a dispute regarding these Terms or as may be required in connection with legal or regulatory matters involving these Terms.</p>
                        <h3>Indemnification </h3>
                        <p>The Participant agrees to indemnify, defend, and hold Lykke, its employees, agents, consultants, subsidiaries, partners, affiliates, and licensors harmless against any and all claims, costs, losses, damages, liabilities, judgments, and expenses (including reasonable fees of attorneys and other professionals) arising from or in any way related to its use of  Lykke’s Services, violation of these Terms, or violation of any rights of any other person or entity.</p>
                        <h3>Limitation of liability</h3>
                        <p>Lykke is liable to the Participant only for direct loss caused by the defective performance of a contract where the wilful intent or negligence is attributable to Lykke.</p>
                        <p>Lykke shall under no circumstances assume any liability for any further claims, e.g. relating to compensation for indirect or consequential loss, lost profit, or loss of earnings, unrealized savings, or additional expense incurred, regardless of the legal grounds.</p>
                        <p>The Participant is fully aware that the access to and the use of Lykke Services through the Lykke Apps and Lykke API, and from a jurisdiction different than the one of the Relevant Trading Venue might violate laws applicable to itself. It undertakes to inform itself and to assume sole liability for any risks relating to such legislation. Any responsibility of Lykke regarding the possible infringement of laws in connection with the Participant’s use of the Services from a jurisdiction different than the one of the Relevant Trading Venue is expressly and completely excluded. </p>
                        <p>The Participant shall bear any losses arising as a result of orders that are not properly legible or as a result of forged or unauthorized orders, except in cases where Lykke is at fault. </p>
                        <p>Responsibility for the authenticity, accuracy, and completeness of orders and data transmitted shall – except in cases where Lykke is at fault – rest solely with the Participant, even when Lykke does not receive these orders/data directly from the Participant, but through third parties.</p>
                        <p>The Participant is fully aware that orders may be subject to errors, such as but not limited to transaction errors, errors in quoted prices and general pricing errors, changes in pricing or margins. Where such errors arise, the Participant is aware that trades may be reversed or canceled. Lykke shall not be liable for such errors or any form of loss or injury suffered as a result, nor for informing the Participant where such an error in pricing or transaction occurs.</p>
                        <p>Lykke shall assume no liability for losses if, for reasons for which Lykke cannot be held responsible, Lykke has been prevented from performing the transaction properly or on time, for example as a result of Force Majeure or measures, orders, and/or decrees issued by domestic or foreign governmental authorities.</p>
                        <p>In particular, Lykke shall assume no liability for actions (e.g. declarations of Default), failure to take action, or any suspension or restriction of services by any malfunction within the blockchain. Furthermore, Lykke shall assume no liability for the consequences of official directives with regard to any means of payments allowed for the Lykke Wallet.</p>
                        <p>Lykke shall not be liable for the conduct of third parties that it mandates, provided it has exercised due diligence when choosing and instructing them.</p>
                        <p>If the Participant has as a result of wilful intent or negligence, e.g. breach of its contractual obligations, contributed to causing and/or aggravating a loss, the extent to which Lykke and the Participant must bear the loss shall be determined in accordance with the principles of contributory negligence. The Participant acknowledges that it has an obligation to prevent and reduce loss.</p>
                        <p>The Participant shall indemnify Lykke for any failure by itself whether wilful or otherwise to comply with these Terms and any associated terms and policies.</p>
                        <p>Save as set out above Lykke excludes to the fullest extent permitted by law any other form of liability or responsibility in relation to the provision of the Services and the Participant use of any of them.</p>
                        <h3>Termination and suspension of use</h3>
                        <p>The contractual relationship for the use of Lykke’s Services may be terminated on thirty days' notice by the Participant or by Lykke, effective at the end of a calendar month. Notice of termination must be sent in writing by emailing <TextLink href="mailto:support@lykke.com">support@lykke.com</TextLink>.</p>
                        <p>Lykke reserves the right at any time and at Lykke’s sole discretion, to close or suspend an account, freeze or lock the Digital Assets and funds in all such accounts without prior notice immediately on the grounds of misusage, particularly violations of these Terms or any applicable law or regulation, misusage to perform illegal activities such as money laundering, financing terrorism, fraud or other criminal activities, in case the account is subject to a governmental proceeding, criminal investigation or other pending litigation. Lykke shall have the right to keep and use the transaction data or other information related to such accounts.</p>
                        <p>Lykke may also suspend an account for the purpose of investigating in case of technical or pricing issues as well as legal and compliance issues. In such cases Lykke will do its best to inform users or account owners but it may not always be possible to do so. In relation to any account suspension or termination, Lykke shall have no liability beyond that set out in these Terms and specifically disclaims any further liability in this regard.</p>
                        <p>Lykke expressly reserves the right to cancel and/or terminate accounts that have not been verified by the Participant despite efforts made in good faith by Lykke to obtain such verification. </p>
                        <p><b>Remaining funds after account termination (normal)</b></p>
                        <p>Once the account is closed/withdrawn, all remaining charges and liabilities that are owed to Lykke on the account will be payable at once to Lykke. Upon payment of all outstanding charges to Lykke (if any), the Participant will have 20 working days to withdraw all funds and Digital Assets from the account.</p>
                        <p>If, after a reasonable period set by Lykke due to termination of the business relationship or limitation of services, the Participant fails to advise Lykke as to where the funds and Digital Assets held by Lykke should be transferred, Lykke may physically deliver or liquidate the funds and Digital Assets. Lykke may deposit, with discharging effect, the proceeds and remaining balance of the Participant to the location designated by the judge..</p>
                        <p><b>Remaining funds and Digital Assets after account termination (fraud/AML/violation of terms)</b></p>
                        <p>Lykke maintains full custody of the funds and Digital Assets and user data/information which may be turned over to the authorities in the event of account suspension/closure arising from fraud investigations, AML investigations, sanctions breaches or violation of these Terms.</p>
                        <h3>Complaints and dispute</h3>
                        <p>In the event that an alleged breach, controversy, claim, dispute or difference (a “Dispute”) arises between the Participant and Lykke out of or in connection with these Terms (including but not limited to the validity, performance, breach, or termination thereof), the parties shall seek to resolve the matter by negotiation by referring the matter first to:</p>
                        <ListGray>
                            <li>Any member of the Participant’s executive management in case of legal persons, or the Participant personally if it is acting as a natural person;</li>
                            <li>In the case of Lykke, to the Lykke Customer Support Department;</li>
                            <li>If the Participant wishes to report an error or a Dispute, it must send an email to Lykke’s Customer Support Department at <TextLink href="mailto:support@lykke.com">support@lykke.com</TextLink> ;</li>
                        </ListGray>
                        <p>The following information will need to be included;</p>
                        <ListGray>
                            <li>Name and surname;</li>
                            <li>Email address (or other identification details);</li>
                            <li>Detailed inquiry description; and</li>
                            <li>The date and time at which the issue arose.</li>
                        </ListGray>
                        <p>If the Participant receives a response from the Customer Support Department but deems that the matter needs to be addressed further, it may ask the Customer Department to forward it to the Compliance Department or contact directly the Compliance Department at <TextLink href="mailto:compliance@lykke.com">compliance@lykke.com</TextLink>. Both the Customer Support Department and the Compliance Department shall:</p>
                        <ListGray>
                            <li>Send an initial email confirming the receipt of the complaint;</li>
                            <li>Send an official response to the Participant within 14 business days, respectively;</li>
                            <li>Try to resolve the matter as soon as reasonably possible; and </li>
                            <li>Inform the Participant of the outcome.</li>
                        </ListGray>
                        <p><b>Trading Errors:</b> Additionally, the Participant must inform Lykke about any trading errors within 24 hours from the time of the error. Otherwise, Lykke will not be able to investigate the error. Any trading error coming from Lykke will be amended where possible. If a situation arises that is not expressly covered by these Terms, the parties agree to try to resolve the matter on the basis of good faith and fairness and by taking such action as is consistent with market practice.</p>
                        <p>The Participant’s right to take legal action remains unaffected by the existence or use of any complaints procedures referred to above.</p>
                        <h3>Dispute resolution, place of jurisdiction, and governing law</h3>
                        <p>These Terms and any other related contractual documents shall exclusively be governed by and construed in accordance with the substantive laws of England and Wales, as amended from time to time.</p>
                        <p>In the event that the parties are unable to resolve a Dispute in accordance with these Terms, then the parties hereby irrevocably submit such Dispute to the exclusive jurisdiction of the courts of London, England.</p>
                        <h3>Record keeping</h3>
                        <p>Lykke will keep records containing the Participant's personal data, trading information, account opening documents, communications, and anything else which relates to it in accordance with applicable laws, but at least for five years after termination of these Terms.</p>
                        <h3>Taxation</h3>
                        <p>The Participant bears the sole responsibility to determine if its use of the Services, and/or any other action or transaction related to its Digital Assets held with Lykke, have tax implications for it.</p>
                        <p>By using the Services, and to the extent permitted by law, the Participant agrees not to hold any person (including Lykke) other than itself liable for any tax liability associated with or arising from the operation of the Services or any other action or transaction related to Lykke.</p>
                        <h3>Fees</h3>
                        <p>The price for Lykke Services is published on the website <a href="www.lykke.com">www.Lykke.com</a>.</p>
                        <h3>Assignment/Entire agreement</h3>
                        <p>Each Relevant Trading Venue may assign these Terms and all rights and obligations arising out of or in connection with these Terms to other companies within the Lykke Group or in connection with a merger, consolidation, or sale or other disposition of all or substantially all of its assets. These Terms, together with any other agreements that apply to the Participant, constitute the entire and exclusive agreement between Lykke and the Participant regarding its subject matter and supersede and replace any previous or contemporaneous written or oral contract, warranty, representation, or understanding regarding its subject matter.</p>
                        <h3>Severability</h3>
                        <p>If for any reason a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable or illegal or contravene any rule, regulation, or law of any market or regulator, that part will be deemed to have been excluded from these Terms from the beginning, and these Terms will be interpreted and enforced as though the provision had never been included and the legality or enforceability of the remaining provisions of the Terms or the legality, validity, or enforceability of this provision in accordance with the law and/or regulation of any other jurisdiction, shall not be affected but should remain in full force and effect.</p>
                        <h3>Changes to these Terms</h3>
                        <p>The present Terms may change from time to time, including but not limited to cases of changes in the Services, in technology, in regulation, and for any other case that Lykke deems as appropriate to take measures. In case of a change, Lykke will provide notice of such change by email and by posting the updated Terms on our website and changing the "Last Updated" date above. Any amended Terms shall become effective no earlier than 14 days after they are posted and shall apply prospectively to the use of the Services upon the effectiveness of such changes. However, in case the changes address new functions of Lykke Services or they are made for any legal reasons, they shall be of immediate effect. Upon the effectiveness of the change, as described above, the change of Terms shall be considered as accepted by the Participant in case it continues to use the Services. Therefore, in case the Participant does not agree to any amended Term, it must immediately cease to use the Services.</p>
                        <h3>Communications and written notices</h3>
                        <p>Unless the contrary is specifically provided in these Terms, any notice, instruction, request, or other communication to be given to Lykke by the Participant under these Terms shall be in writing by email to <TextLink href="mailto:support@lykke.com">support@lykke.com</TextLink> and shall be deemed delivered only after Lykke having confirmed so.</p>
                        <p>Any communications sent to the Participant (documents, notices, confirmations, statements, etc.) are deemed received:</p>
                        <ListGray>
                            <li>If sent by email, after the entry of the email in the Participant domain;</li>
                            <li>If sent by Lykke’s online system internal mail or support chat, within one hour of it being sent;</li>
                            <li>If sent by telephone, once the telephone conversation has been finished;</li>
                            <li>If sent by post, seven calendar days after posting it;</li>
                            <li>If sent via commercial courier service, at the date of signing of the document upon receipt of such notice;</li>
                            <li>If sent by airmail, eight business days after the date of dispatch; or</li>
                            <li>If posted on Lykke's web page, within one hour after it has been posted.</li>
                        </ListGray>
                        <p>In order to communicate with the Participant, Lykke will use the contact details provided by it while opening an account or as updated later on. Hence, the Participant has an obligation to notify Lykke immediately of any change in its contact details.</p>
                        <h3>Contact Lykke</h3>
                        <p>If the Participant has any questions about these Terms and for general queries and support, it can contact Lykke here: <TextLink href="mailto:support@lykke.com">support@lykke.com</TextLink>. If the participant has any questions about the Privacy Policy or the collection and use of information by Lykke, it should contact the Data Protection Officer: <TextLink href="mailto:dpo@lykke.com">dpo@lykke.com</TextLink>.</p>
                    </PolicyWrapper>
                </Col>
            </Row>
        </Grid>
    )
}

export default TermsOfUseComponent;