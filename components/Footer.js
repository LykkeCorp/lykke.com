import React, {Component} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {rem} from 'polished';

import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { WALLET_URL, TERMINAL_URL } = publicRuntimeConfig
import {social} from '../utils/social';

import Apps from './Apps';

const Footer = styled.footer`
  padding-bottom: ${rem('25px')};
  flex-shrink: 0;
`;

const Top = styled.section`
  padding: ${rem('35px')} 0;

  @media all and (max-width: 767px) {
    padding: 30px 0;
  }
`;

const Bottom = styled.section`
  padding: ${rem('20px')} 0;
  color: ${p => p.theme.colors.dark};
  border-top: 1px solid ${p => p.theme.colors.greyLight};
  border-bottom: 1px solid ${p => p.theme.colors.greyLight};
  font-size: ${rem('14px')};
  line-height: 1.43;

  a {
    display: inline-block;
    color: ${p => p.theme.colors.grey};

    &:hover {
      color: ${p => p.theme.colors.slate};
    }

    &:last-child {
      margin-left: ${rem('25px')};
    }
  }

  @media all and (max-width: 767px) {
    padding: 0;
    border: 0;
    font-size: 13px;
    text-align: center;

    a {
      margin: 8px 0 0 0 !important;
    }

    .text-right {
      text-align: center !important;
    }
  }
`;

const Logo = styled.div`
  margin-bottom: ${rem('30px')};
  padding: 0 ${rem('2px')};
`;

const ListWrapper = styled.div`
  margin-bottom: ${rem('25px')};
  padding: ${rem('10px')} 0;

  @media all and (max-width: 767px) {
    padding: 0;
  }
`;

const ListHeader = styled.h5`
  padding: 0 ${rem('10px')};

  @media all and (max-width: 767px) {
    margin-bottom: 8px;
    padding-left: 0;
    font-size: 14px;
    line-height: 1.43;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  color: ${p => p.theme.colors.greyBluey};
  font-size: ${rem('16px')};
  font-weight: 600;
  line-height: 1.56;
  list-style: none;

  a {
    padding: ${rem('5px')} ${rem('10px')};
    color: ${p => p.theme.colors.greyBluey};

    &:hover {
      color: ${p => p.theme.colors.primary};
    }
  }

  li + li {
    margin-top: ${rem('10px')};
  }

  @media all and (max-width: 767px) {
    font-size: 14px;
    font-weight: normal;

    a {
      padding: 3px 0;
      color: ${p => p.theme.colors.grey};
    }

    li + li {
      margin-top: ${rem('8px')};
    }
  }
`;

function ListItem(props) {
  return (
    <li>
      <Link href={props.url}>
        <a target="_blank">{props.name}</a>
      </Link>
    </li>
  );
}

function SocialList(props) {
  const social = props.social;

  const listItems = Object.keys(social).map((key, index) => (
    <ListItem key={index} name={social[key].name} url={social[key].url} />
  ));
  return <List>{listItems}</List>;
}

export default class extends Component {
  showCurrentYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <Footer>
        <Grid className="container">
          <Top>
            <Row>
              <Col xs={12} md={4}>
                <Logo className="d-none d-md-block">
                  <Link href="/">
                    <a>
                      <img src="/static/logo-main.svg" alt="Lykke" width="108px" />
                    </a>
                  </Link>
                </Logo>
                <Apps />
              </Col>

              <Col xs={12} md={8}>
                <Row>
                  <Col xs={6} sm={3} md={3}>
                    <ListWrapper>
                      <ListHeader>Products</ListHeader>
                      <List>
                        <li>
                          <Link href={WALLET_URL}>
                            <a>Lykke Wallet</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={TERMINAL_URL}>
                            <a>Lykke Trade</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/lyci">
                            <a>Lykke Index</a>
                          </Link>
                        </li>
                      </List>
                    </ListWrapper>
                    <ListWrapper>
                      <ListHeader>For clients</ListHeader>
                      <List>
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>Tokens and coins</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                        <li>
                          <Link href="/api-wallet-trading-rules-fees-limits">
                            <a>Fees and limits</a>
                          </Link>
                        </li>
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>Trading indicators</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>Margin trading</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                        <li>
                          <Link href="https://blockchainexplorer.lykke.com/asset/AXkedGbAH1XGDpAypVzA5eyjegX4FaCnvM" target="_blank">
                            <a>Blockchain explorer</a>
                          </Link>
                        </li>
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>Public tradelog</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>Apply for listisng</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                      </List>
                    </ListWrapper>
                  </Col>
                  <Col xs={6} sm={3} md={3}>
                    <ListWrapper>
                      <ListHeader>About</ListHeader>
                      <List>
                        <li>
                          <Link href="#">
                            <a>Lykke team</a>
                          </Link>
                        </li>
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>News</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                        <li>
                          <Link href="/about/invest">
                            <a>Invest</a>
                          </Link>
                        </li>
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>Carreers</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>FAQ</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                      </List>
                    </ListWrapper>
                    <ListWrapper>
                      <ListHeader>API</ListHeader>
                      <List>
                        <li>
                          <Link href="/api-wallet-trading-rules-fees-limits">
                            <a>API Fees and limits</a>
                          </Link>
                        </li>
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>API Deposits</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                      </List>
                    </ListWrapper>
                  </Col>
                  <Col xs={6} sm={3} md={3}>
                    <ListWrapper>
                      <ListHeader>Get in touch</ListHeader>
                      <List>
                        <li>
                          <Link href="#">
                            <a>Contacts</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://lykkex.zendesk.com/hc/en-us">
                            <a>Help Center</a>
                          </Link>
                        </li>
                      </List>
                    </ListWrapper>
                    {/*<ListWrapper>*/}
                      {/*<ListHeader>Contribute</ListHeader>*/}
                      {/*<List>*/}
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>Github</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>Streams</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                          {/*<Link href="#">*/}
                            {/*<a>Careers</a>*/}
                          {/*</Link>*/}
                        {/*</li>*/}
                      {/*</List>*/}
                    {/*</ListWrapper>*/}
                  </Col>
                  <Col xs={6} sm={3} md={3}>
                    <ListWrapper>
                      <ListHeader>Social</ListHeader>
                      <SocialList social={social} />
                    </ListWrapper>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Top>

          <Bottom>
            <Row className="justify-content-between">
              <Col xs={12} sm={6}>
                © {this.showCurrentYear()} Lykke, Inc.
              </Col>
              <Col xs={12} sm={6} className="text-right">
                <Link href="/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
                <br className="d-md-none" />
                <Link href="/terms-and-regulation">
                  <a>Terms of Use</a>
                </Link>
              </Col>
            </Row>
          </Bottom>
        </Grid>
      </Footer>
    );
  }
};
