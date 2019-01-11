import React from 'react';
import styled, {css} from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Button from '../Button';
import {rem} from 'polished';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { WALLET_URL } = publicRuntimeConfig

import {social} from '../../utils/social';

export const Wrapper = styled.section`
  padding-top: ${rem('50px')};
  padding-bottom: ${rem('50px')};
`;

export const Card = styled.div`
  position: relative;
  padding: ${rem('35px')} ${rem('25px')} ${rem('60px')};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.corners.card};
  box-shadow: ${p => p.theme.boxShadow.card};

  > .icon {
    margin-bottom: ${rem('20px')};
    padding: ${rem('5px')} ${rem('3px')};
    color: ${p => p.theme.colors.black};
    font-size: ${rem('20px')};
  }

  @media all and (max-width: 767px) {
    margin-bottom: 25px;
    padding: 15px 15px 70px;
    text-align: center;

    > .icon {
      margin-bottom: ${rem('10px')};
    }
  }
`;

export const Cards = styled.div`
  > ${Row} {
    > ${Col} {
      &:last-child ${Card} {
        margin-bottom: 0;
      }
    }
  }

  @media all and (min-width: 992px) {
    ${Card} {
      height: 100%;
    }

    > ${Row} {
      margin-right: ${rem('-20px')};
      margin-left: ${rem('-20px')};

      > ${Col} {
        padding-right: ${rem('20px')};
        padding-left: ${rem('20px')};
      }
    }
  }
`;

export const CardTitle = styled.h4`
  margin-bottom: ${rem('7px')};
  font-size: ${rem('26px')};
  font-weight: bold;
  line-height: 1.35;
`;

export const CardText = styled.div`
  margin-bottom: ${rem('20px')};
  color: ${p => p.theme.colors.grey};
  font-size: ${p => rem(p.theme.fontSize.lead)};
  line-height: 1.67;
`;

export const CardFooter = styled.div`
  position: absolute;
  left: ${rem('25px')};
  bottom: 0;
  right: ${rem('25px')};
  min-height: ${rem('60px')};
  padding: ${rem('9px')} 0;

  ${p =>
    p.border &&
    css`
      border-top: 2px solid ${p => p.theme.colors.greyLight};
    `}

  .btn {
    padding-right: 0;
    padding-left: 0;
  }

  form {
    input {
      border: 0;
      height: 100%;
      padding: ${rem('10px')} 0;

      &:focus {
        outline: none;
      }
    }
  }

  @media all and (max-width: 767px) {
    left: 0;
    right: 0;

    form input {
      padding-left: 20px;
    }
  }
`;

export const Social = styled.div`
  padding: ${rem('2px')} ${rem('20px')};
  text-align: center;

  a {
    display: inline-block;
    vertical-align: middle;
    padding: ${rem('5px')};
    color: ${p => p.theme.colors.greyBluey};
    font-size: ${rem('28px')};

    &:hover {
      color: ${p => p.theme.colors.dark};
    }
  }

  @media all and (max-width: 767px) {
    a {
      font-size: 24px;
    }
  }
`;

export default () => (
  <Wrapper>
    <Grid className="container">
      <Cards>
        <Row>
          <Col xs={12} sm={4}>
            <Card>
              <i className="icon icon--register" />
              <CardTitle>Register</CardTitle>
              <CardText>Get your free account with Lykke</CardText>
              <CardFooter border>
                <Button className="btn" flat small href={WALLET_URL}>
                  Create free account
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card>
              <i className="icon icon--follow" />
              <CardTitle>Follow us</CardTitle>
              <CardText>We like to stay in touch with our community.</CardText>
              <CardFooter>
                <Social>
                  <Row>
                    <Col xs={3}>
                      <a
                        href={social.telegram.url}
                        title={social.telegram.name}
                        target="_blank"
                      >
                        <i className={'icon ' + social.telegram.icon} />
                      </a>
                    </Col>
                    <Col xs={3}>
                      <a
                        href={social.twitter.url}
                        title={social.twitter.name}
                        target="_blank"
                      >
                        <i className={'icon ' + social.twitter.icon} />
                      </a>
                    </Col>
                    <Col xs={3}>
                      <a
                        href={social.facebook.url}
                        title={social.facebook.name}
                        target="_blank"
                      >
                        <i className={'icon ' + social.facebook.icon} />
                      </a>
                    </Col>
                    <Col xs={3}>
                      <a
                        href={social.instagram.url}
                        title={social.instagram.name}
                        target="_blank"
                      >
                        <i className={'icon ' + social.instagram.icon} />
                      </a>
                    </Col>
                  </Row>
                </Social>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card>
              <i className="icon icon--newsletter" />
              <CardTitle>SCBC Magazine</CardTitle>
              <CardText>Get our latest news right to your mailbox</CardText>
              <CardFooter border>
                <form>
                  <Row>
                    <Col xs={7} sm={9}>
                      <input type="text" placeholder="Your email" />
                    </Col>
                    <Col xs={5} sm={3}>
                      <Button flat small block className="btn">
                        Subscribe
                      </Button>
                    </Col>
                  </Row>
                </form>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Cards>
    </Grid>
  </Wrapper>
);
