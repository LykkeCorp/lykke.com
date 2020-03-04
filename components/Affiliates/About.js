import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { rem } from "polished";
import getConfig from "next/config";
import Button from "../Button";
const { publicRuntimeConfig } = getConfig();
const { WALLET_URL } = publicRuntimeConfig;

const About = styled.div`
  padding-top: ${rem("40px")};
  padding-bottom: ${rem("40px")};
  background-color: ${p => p.theme.colors.greyPale};

  .left-container {
    position: relative !important;

    @media all and (max-width: 767px) {
      display: none !important;
    }
  }

  @media all and (min-width: 992px) {
    ${Row} {
      margin-right: ${rem("-20px")};
      margin-left: ${rem("-20px")};
    }
    
    ${Col} {
      padding-right: ${rem("20px")}
      padding-left: ${rem("20px")};
    }
  }
`;

const Title = styled.h2`
  font-family: ${p => p.theme.fonts.headings};
  color: ${p => p.theme.colors.primary};
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Description = styled.div`
  margin-top: 20px;
`;

const LeadContainer = styled.div`
  margin-top: 20px;
`;

const LeadButton = styled(Button)`
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
`;

const Left = styled.div`
  text-align: right;
  position: absolute;
  bottom: -45px;
  right: 40px;
`;

const Image = styled.img`
  max-width: 390px;

  @media all and (max-width: 1200px) {
    max-width: 370px;
  }

  @media all and (max-width: 1050px) {
    max-width: 360px;
  }
`;

export default () => (
  <About>
    <Grid className="container">
      <Row className="items">
        <Col xs={12} sm={6} md={6} className="left-container">
          <Left>
            <Image
              src="/static/images/affiliate/affiliate-phone.png"
              alt="Phone"
            />
          </Left>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Title>About Lykke</Title>
          <Description>
            <strong>Lykke</strong> is an investment and financial product
            provider leveraging the power of the blockchain.
            <br></br>
            <br></br>
            The Blockchain-based <strong>Lykke Exchange</strong> enables its to
            buy, sell and store crypto currencies and all other digital assets
            securely and offers zero trading fees on nearly 100 assets class
            including bitcoin, ethereum, Euros, US Dollar, Swiss francs, and
            many others.
            <br></br>
            <br></br>
            <strong>Lykke B2B Digital Solutions</strong> leverages its extensive
            financial engineering expertise to develop unique monetization
            solutions for its business customers.
            <LeadContainer>
              <LeadButton className="form_button" href={WALLET_URL}>
                Get Started
              </LeadButton>
            </LeadContainer>
          </Description>
        </Col>
      </Row>
    </Grid>
  </About>
);
