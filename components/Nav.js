import React, {Component} from 'react';
import Link from './Link';
import {Row, Col} from 'react-styled-flexboxgrid';
import styled, {css} from 'styled-components';
import {rem, rgba} from 'polished';
import Button from './Button';
import HeaderAccount from './HeaderAccount';


const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.transparent};
`;

const Menu = styled.nav`
  @media all and (max-width: 991px) {
    width: 360px;
    max-width: 100%;
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
  
  @media all and (max-width: 580px) {
    width: 100%;
  }
`;

const Backdrop = styled.div`
  display: none;
  
  @media all and (max-width: 991px) {
    display: block;
    top: -60px;
    bottom: 0;
    left: 360px;
    right: 0;
    position: fixed;
    background-color: ${p => rgba(p.theme.colors.dark, .8)};
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: opacity ${p => p.theme.transition.primary},
      visibility ${p => p.theme.transition.primary};
    
    .menu-opened & {
      opacity: 1;
      visibility: visible;
    }
  }
  
  @media all and (max-width: 580px) {
    display: none;  
  }
`;

const MenuInner = styled.div`
  background-color: ${p => p.theme.colors.white};

  @media all and (max-width: 991px) {
    height: 100%;
    padding: 30px 16px;
    overflow: auto;
  }
  
  @media all and (max-width: 580px) {
    width: 360px;
    max-width: 100%;
    margin: 0 auto;
  }
`;

const Logo = styled.div`
  margin-right: ${rem('14px')};

  img {
    display: inline-block;
    vertical-align: middle;
    margin-top: ${rem('-6px')};
  }

  @media all and (max-width: 991px) {
    img {
      width: 94px;
      margin-top: 0;
    }
  }
  
  @media all and (max-width: 420px) {
    width: 30px;
    overflow: hidden;
    transition: width ${p => p.theme.transition.primary};
    
    .menu-opened & {
      width: 94px;
    }
  }
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
  }
  
  @media all and (max-width: 991px) {
    &:after {
      display: none;
    }
    
    &:before {
      position: absolute;
      right: 24px;
      top: 18px;
      color: ${p => p.theme.colors.greyBluey};
      font-family: icons !important;
      font-size: 18px;
      font-weight: normal;
      content: "\\e908";
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
    margin-left: auto;
    margin-right: auto;
    
    &.d-md-none {
      display: block !important;
    }
  }
`;

const MenuItemInner = styled.div`
  font-size: ${rem('14px')};
  font-weight: 600;
  text-transform: uppercase;
  
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
      padding: 20px;

      &:active {
        color: ${p => p.theme.colors.primary};
      }

      &.with_border:active {
        border-color: ${p => p.theme.colors.primary};
      }
      
      &.active {
        border-color: transparent;
      }
    }
    
    @media all and (max-width: 580px) {
      display: block;
      width: 100%;
    }
  }
`;

const DropdownMenu = styled.div`
  min-width: ${rem('205px')};

  @media all and (max-width: 991px) {
    display: none;
    
    ${p => p.isOpen && css`
      display:block;
    `};
  }

  @media all and (min-width: 992px) {
    position: absolute;
    right: ${rem('20px')};
    border-radius: ${rem('8px')};
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0 0 17px 0 rgba(0, 0, 0, 0.11);
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, -10px, 0);
    transition: all ${p => p.theme.transition.primary};
  }
`;

const MenuItem = styled.div`
  position: relative;
  padding-right: ${rem('4px')};
  padding-left: ${rem('4px')};

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
    `};

  @media all and (max-width: 991px) {
    flex: none;
    width: 100%;
    padding: 0;
    
    ${p => p.dropdown && p.active && css`
      ${MenuItemInner} a {
        color: ${p => p.theme.colors.primary};
      }
      
      ${Caret}:before {
        color: ${p => p.theme.colors.primary};
        transform: rotate(180deg);
      }
    `};
  }
`;

const DropdownMenuInner = styled.div`
  padding: ${rem('12px 0px')};
  
  
  @media all and (max-width: 991px) {
    padding: 0 0 0 24px;
  }
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
  
  @media all and (max-width: 991px) {
    a {
      padding: 12px 10px;
      color: #585c6e;
      font-size: 14px;
      font-weight: 600;
      
      &:active,
      &.active,
     .active & {
        color: ${p => p.theme.colors.primary};
      }
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

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
    };
  }

  openDropdownMenu = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  render() {
    return (
      <Wrapper>
        <Row className="align-items-center">
          <Col className="col-xs-auto d-lg-none">
            <ButtonMenu
              flat
              onClick={this.props.menuHandler}
              active={this.props.isMenuOpen}
            />
          </Col>
          <Col className="col-xs-auto">
            <Logo onClick={this.props.isMenuOpen ? this.props.menuHandler : null}>
              <Link href="/">
                <a>
                  <img src="/static/logo-main.svg" alt="Lykke" width="115px" />
                </a>
              </Link>
            </Logo>
          </Col>
          <Col>
            <Menu show={this.props.isMenuOpen}>
              <MenuInner>
                <Row className="align-items-center">
                  <MenuItem as={Col} onClick={this.props.isMenuOpen ? this.props.menuHandler : null} >
                    <MenuItemInner>
                      <Link prefetch activeClassName="active" href="/">
                        <a className="with_border">
                          <img
                            src="/static/lykke_wallet_logo.svg"
                            alt="Lykke"
                            width="36px"
                          />{' '}
                          Lykke Wallet
                        </a>
                      </Link>
                    </MenuItemInner>
                  </MenuItem>
                  <MenuItem as={Col} onClick={this.props.isMenuOpen ? this.props.menuHandler : null}>
                    <MenuItemInner>
                      <Link prefetch activeClassName="active" href="/trade">
                        <a className="with_border">
                          <img
                            src="/static/lykke_exchange_logo.svg"
                            alt="Lykke"
                            width="36px"
                          />{' '}
                          Lykke Trade
                        </a>
                      </Link>
                    </MenuItemInner>
                  </MenuItem>
                  <MenuItem as={Col} onClick={this.props.isMenuOpen ? this.props.menuHandler : null}>
                    <MenuItemInner>
                      <Link  prefetch activeClassName="active"  href="https://info.lykke.com/">
                        <a className="with_border" target="_blank">LyCI</a>
                      </Link>
                    </MenuItemInner>
                  </MenuItem>
                  <MenuItem
                    as={Col}
                    dropdown
                    active={this.state.isDropdownOpen}
                    onClick={this.openDropdownMenu}
                  >
                    <MenuItemInner>
                      <a>
                        About
                        <Caret />
                      </a>
                    </MenuItemInner>

                    <DropdownMenu isOpen={this.state.isDropdownOpen}>
                      <DropdownMenuInner>
                        <DropdownItem onClick={this.props.isMenuOpen ? this.props.menuHandler : null}>
                          <Link href="https://medium.com/lykke">
                            <a target="_blank">News</a>
                          </Link>
                        </DropdownItem>
                        <DropdownItem onClick={this.props.isMenuOpen ? this.props.menuHandler : null}>
                          <Link href="/about/invest">
                            <a>Invest</a>
                          </Link>
                        </DropdownItem>
                        {/*<DropdownItem>*/}
                          {/*<Link href="/about/news">*/}
                            {/*<a>News</a>*/}
                          {/*</Link>*/}
                        {/*</DropdownItem>*/}
                        <DropdownItem onClick={this.props.isMenuOpen ? this.props.menuHandler : null}>
                          <Link href="https://lykkex.zendesk.com/hc/en-us">
                            <a target="_blank">Help center</a>
                          </Link>
                        </DropdownItem>
                      </DropdownMenuInner>
                    </DropdownMenu>
                  </MenuItem>
                </Row>

                <AccountContainer className="d-md-none">
                  <HeaderAccount />
                </AccountContainer>
              </MenuInner>
            </Menu>
            <Backdrop onClick={this.props.menuHandler}/>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}
