import React from 'react'
import styled from 'styled-components'
import {Col, Grid, Row} from "react-styled-flexboxgrid";
import Button from '../Button';
import {rem} from 'polished';

const SectionHeader = styled.div`
  margin-bottom: ${rem('42px')};
`;

export const Section = styled.section`
  padding-top: ${rem('80px')};
  padding-bottom: ${rem('80px')};
  font-size: ${rem('18px')};

  .btn {
    width: 240px;
    
    .icon {
      margin: ${rem('-6px')} ${rem('5px')} ${rem('-5px')} ${rem('-5px')};
      font-size: ${rem('30px')};
    }
  }
  
  h4 {
    margin-bottom: ${rem('20px')};
  }
  
  p {
    color: ${p => p.theme.colors.grey};
  }
  
  .lead {
    margin-bottom: ${rem('40px')};
    font-size: ${rem('18px')};
  }

  @media all and (max-width: 767px) {
    padding-top: 70px;
    padding-bottom: 40px;
    font-size: 14px;
    
    ${Row} + ${Row} {
      margin-top: 50px;    
    }
  }
}
`

export const Image = styled.div`
  padding: ${rem('80px')} 0;

  img {
    width: 100%;
  }
`

export const List = styled.div`
  margin-bottom: ${rem('40px')};
`

export const ListTitle = styled.span``

export const ListItem = styled.p`
  a {
    width: 200px;
    display: flex;
    align-items: center;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: normal;
    color: ${p => p.theme.colors.primary};
  }
  
  .icon {
    margin-left: ${rem('-4px')};
    margin-right: ${rem('8px')};
    font-size: ${rem('30px')}
  }
`

const Contacts = props => {
    return (
        <Section>
          <Grid className="container">
              <Row className="justify-content-center">
                  <Col xs={12} md={8}>
                    <SectionHeader>
                      <h1>Contacts</h1>
                    </SectionHeader>
                    <h3>Lykke would like to know your opinion.</h3>

                    <p className="lead">Please feel free to contact us to make a suggestion, get information, or leave a comment:</p>

                    <Button className="btn" href="mailto:lykke@lykke.com">
                      <i className="icon icon--email"/>
                      <span>lykke@lykke.com</span>
                    </Button>
                  </Col>
              </Row>
              <Row className="d-none d-md-block">
                  <Col xs={12} sm={12} md={12}>
                    <Image>
                      <img
                        src="/static/images/office-bg.jpg"
                        alt="office"
                      />
                    </Image>
                  </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12} md={8}>
                  <Row>
                    <Col xs={12} sm={6}>
                      <h4>Media</h4>
                      <List>
                        <ListItem>
                          <a href="https://www.lykke.com/cp/information-for-partners-and-media" target="_blank">
                            <i className="icon icon--document"/>
                            <ListTitle>Information for partners and media</ListTitle>
                          </a>
                        </ListItem>
                        <ListItem>
                          <a href="mailto:pr@lykke.com">
                            <i className="icon icon--email"/>
                            <ListTitle>pr@lykke.com</ListTitle>
                          </a>
                        </ListItem>
                      </List>
                      <h4>Support</h4>
                      <List>
                        <ListItem>
                          <a href="mailto:support@lykke.com">
                            <i className="icon icon--email"/>
                            <ListTitle>support@lykke.com</ListTitle>
                          </a>
                        </ListItem>
                        <ListItem>
                          <a href="callto:+41435086379">
                            <i className="icon icon--call"/>
                            <ListTitle>+41 43 508 63 79</ListTitle>
                          </a>
                        </ListItem>
                      </List>
                    </Col>
                    <Col xs={12} sm={6}>
                      <h4>Addresses</h4>
                      <Row>
                        <Col xs={6}>
                          <p>
                            Lykke Corp<br/>
                            Alpenstrasse 9<br/>
                            6300 Zug<br/>
                            Switzerland
                          </p>
                        </Col>
                        <Col xs={6}>
                          <p>
                            Lykke Corp UK<br/>
                            86-90 Paul Street<br/>
                            London EC2A 4NE<br/>
                            United Kingdom
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
          </Grid>
        </Section>
    )
}

export default Contacts;