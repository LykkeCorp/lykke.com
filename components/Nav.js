import React, {Component} from 'react';
import Link from './Link';
import {Row, Col} from 'react-styled-flexboxgrid';
import styled, {css} from 'styled-components';
import {isBrowser} from 'react-device-detect';
import Button from './Button';
import HeaderAccount from './HeaderAccount';
import NextLink from 'next/link';

import {rem} from 'polished/lib/index';

const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.transparent};
`;

const Nav = styled.nav`
  @media all and (max-width: 991px) {
    position: fixed;
    left: 0;
    top: 59px;
    right: 0;
    height: ${p => (p.show ? 'calc(100% - 58px)' : 0)};
    background-color: ${p => p.theme.colors.white};
    overflow: hidden;
    visibility: ${p => (p.show ? 'visible' : 'hidden')};
    z-index: 220;
    transition: height ${p => p.theme.transition.primary},
      visibility ${p => p.theme.transition.primary};

    .align-items-center {
      margin: 0;
    }
  }
`;

const NavInner = styled.nav`
  @media all and (max-width: 991px) {
    height: 100%;
    padding: 30px 16px;
    overflow: auto;
  }
`;

const Logo = styled.div`
  margin-right: ${rem('14px')};

  img {
    display: inline-block;
    vertical-align: middle;
    margin-top: -1px;
  }

  @media all and (max-width: 991px) {
    width: 30px;
    overflow: hidden;
    transition: width ${p => p.theme.transition.primary};

    img {
      width: 94px;
      margin-top: 0;
    }

    .menu-opened & {
      width: 94px;
    }
  }
`;

const AccountContainer = styled.div`
  width: 320px;
  max-width: 100%;
  margin-top: 40px;
  text-align: center;

  .justify-content-end {
    flex-direction: column-reverse;
    justify-content: flex-start !important;

    > div {
      flex: 0 0 100%;
    }

    a[role='button'] {
      width: 100%;
      margin-bottom: 20px;
      padding: 19px;
    }
  }

  @media all and (max-width: 991px) {
    &.d-md-none {
      display: block !important;
    }
  }
`;

const NavItemInner = styled.div`
  font-size: ${rem('14px')};
  font-weight: 600;
  text-transform: uppercase;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: ${rem('20px')};
  min-width: ${rem('205px')};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${rem('8px')};
  box-shadow: 0 0 17px 0 rgba(0, 0, 0, 0.11);
  opacity: 0;
  visibility: hidden;
  transform: translate3d(0, -10px, 0);
  transition: all ${p => p.theme.transition.primary};

  @media all and (max-width: 991px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  padding-right: ${rem('4px')};
  padding-left: ${rem('4px')};

  a {
    display: block;
    padding: ${rem('20px 20px 18px 14px')};
    border: 1px solid transparent;
    border-radius: ${p => p.theme.corners.primary};
    color: inherit;
    text-decoration: none;
    transition: all ${p => p.theme.transition.primary};

    img {
      display: inline-block;
      vertical-align: middle;
      margin: ${rem('-12px')} ${rem('5px')} ${rem('-10px')} 0;
    }

    &:hover {
      color: ${p => p.theme.colors.grey};
    }

    &.active {
      color: ${p => p.theme.colors.primary};
      border-color: ${p => p.theme.colors.primary};

      &:hover {
        color: ${p => p.theme.colors.primary};
      }
    }

    @media all and (max-width: 991px) {
      display: inline-block;
    }
  }

  ${p =>
    p.dropdown &&
    css`
      &:hover,
      &:focus {
        ${DropdownMenu} {
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, 0, 0);
        }
      }
    `}

  @media all and (max-width: 991px) {
    flex: none;
    width: 100%;
    padding: 0;
  }
`;

const DropdownMenuInner = styled.div`
  padding: ${rem('12px 0px')};
`;

const DropdownItem = styled.div`
  a {
    display: block;
    padding: ${rem('12px 22px')};
    font-size: ${rem('16px')};
    letter-spacing: -0.2px;
    line-height: normal;

    &:hover {
      color: ${p => p.theme.colors.grey};
    }
  }
`;

const ButtonMenu = styled(Button)`
  width: 24px;
  height: 24px;
  padding: 4px;

  span {
    display: block;
    top: 50%;
    margin-top: -1px;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition-duration: 75ms;

    &,
    &:after,
    &:before {
      position: absolute;
      width: 18px;
      height: 2px;
      background-color: ${p => p.theme.colors.primary};
      border-radius: 4px;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before,
    &:after {
      display: block;
      content: '';
    }

    &:before {
      top: -5px;
      transition: top 75ms ease 0.12s, opacity 75ms ease;
    }

    &:after {
      bottom: -5px;
      transition: bottom 75ms ease 0.12s,
        transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  ${p =>
    p.active &&
    css`
      span {
        transform: rotate(45deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        &:before {
          top: 0;
          opacity: 0;
          transition: top 75ms ease, opacity 75ms ease 0.12s;
        }

        &:after {
          bottom: 0;
          transform: rotate(-90deg);
          transition: bottom 75ms ease,
            transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
        }
      }
    `}
`;

const Caret = styled.span`
  &:after {
    content: '';
    position: relative;
    top: -1px;
    display: inline-block;
    vertical-align: middle;
    margin-left: ${rem('10px')};
    border-top: 0.4em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;

    @media all and (max-width: 991px) {
      display: none;
    }
  }
`;

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.openMenu = this.openMenu.bind(this);

    this.state = {
      isOpen: false
    };
  }

  openMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });

    document.body.classList.toggle('menu-opened');
  }

  render() {
    return (
      <Wrapper>
        <Row className="align-items-center">
          <Col className="col-xs-auto d-lg-none">
            <ButtonMenu
              flat
              onClick={this.openMenu}
              active={this.state.isOpen}
            />
          </Col>
          <Col className="col-xs-auto">
            <Logo>
              <Link href="/">
                <a>
                  <img src="/static/logo-main.svg" alt="Lykke" width="115px" />
                </a>
              </Link>
            </Logo>
          </Col>
          <Col>
            <Nav show={this.state.isOpen}>
              <NavInner>
                <Row className="align-items-center">
                  <NavItem as={Col}>
                    <NavItemInner>
                      <Link prefetch activeClassName="active" href="/">
                        <a>
                          <img
                            src="/static/lykke_wallet_logo.svg"
                            alt="Lykke"
                            width="36px"
                          />{' '}
                          Lykke Wallet
                        </a>
                      </Link>
                    </NavItemInner>
                  </NavItem>
                  <NavItem as={Col}>
                    <NavItemInner>
                      <Link prefetch activeClassName="active" href="/trade">
                        <a>
                          <img
                            src="/static/lykke_exchange_logo.svg"
                            alt="Lykke"
                            width="36px"
                          />{' '}
                          Lykke Trade
                        </a>
                      </Link>
                    </NavItemInner>
                  </NavItem>
                  <NavItem as={Col}>
                    <NavItemInner>
                      <Link href="https://medium.com/scbc-magazine">
                        <a target="_blank">CBCS Magazine</a>
                      </Link>
                    </NavItemInner>
                  </NavItem>
                  <NavItem as={Col} dropdown>
                    <NavItemInner>
                      <Link href="#">
                        <a>
                          About
                          {isBrowser && <Caret />}
                        </a>
                      </Link>
                    </NavItemInner>

                    {isBrowser && (
                      <DropdownMenu>
                        <DropdownMenuInner>
                          <DropdownItem>
                            <Link href="/leadership">
                              <a>Lykke Team</a>
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <NextLink href="/lyci">
                              <a>About Lykke Index</a>
                            </NextLink>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href="/about/invest">
                              <a>Invest</a>
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href="/company/news">
                              <a>News</a>
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href="/career_in_lykke">
                              <a>Careers</a>
                            </Link>
                          </DropdownItem>
                          <DropdownItem>
                            <Link href="/city/faq">
                              <a>FAQ</a>
                            </Link>
                          </DropdownItem>
                        </DropdownMenuInner>
                      </DropdownMenu>
                    )}
                  </NavItem>
                </Row>

                <AccountContainer className="d-md-none">
                  <HeaderAccount />
                </AccountContainer>
              </NavInner>
            </Nav>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}
