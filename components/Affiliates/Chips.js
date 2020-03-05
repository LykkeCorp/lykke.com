import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { rem } from "polished";
import { LeadButton } from "./Lead";

const Chips = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  padding-top: ${rem("35px")};
  background-color: ${p => p.theme.colors.white};

  .items {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  
  @media all and (min-width: 767px) {
    margin-top: 0;
    padding-top: 0;
  }

  @media all and (max-width: 767px) {
    margin-top: 0px;
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

const Title = styled.h3`
  font-family: ${p => p.theme.fonts.headings};
  color: black;
  text-align: center;
  margin-top: 40px;

  @media all and (max-width: 767px) {
    margin-top: 0px;
  }
`;

const FeatureItem = styled.div`
  position: relative;
  padding: ${rem("42px")} ${rem("20px")} ${rem("30px")};
  color: ${p => p.theme.colors.black};
  text-align: center;

  @media all and (max-width: 767px) {
    padding: 0px;
    margin-bottom: ${rem("60px")};
  }
`;

const FeatureItemIcon = styled.div`
  width: ${rem("70px")};
  margin: 0 auto;
  pointer-events: none;
  user-select: none;

  img {
    width: 100%;
  }
`;

const FeatureItemTitle = styled.h5`
  font-family: ${p => p.theme.fonts.headings};
  font-weight: 700;
  margin: 0;
  margin-top: 10px;
  color: #0388ef;
`;

const FeatureItemDescription = styled.div`
  margin-top: 10px;
  color: #666666;
`;

const LeadContainer = styled.div`
  text-align: center;
`;

export default () => (
  <Chips>
    <Grid className="container">
      <Title>How does the Lykke affiliate program work?</Title>
      <Row className="items">
        <Col xs={9} sm={4}>
          <FeatureItem>
            <FeatureItemIcon>
              <img
                src="/static/images/affiliate/affiliate-chip1.png"
                alt="Register"
                width="70px"
              />
            </FeatureItemIcon>
            <FeatureItemTitle>REGISTER</FeatureItemTitle>
            <FeatureItemDescription>
              to get access to further info<br></br> on the affiliate program.
            </FeatureItemDescription>
          </FeatureItem>
        </Col>
        <Col xs={9} sm={4}>
          <FeatureItem>
            <FeatureItemIcon>
              <img
                src="/static/images/affiliate/affiliate-chip2.png"
                alt="Promote"
                width="70px"
              />
            </FeatureItemIcon>
            <FeatureItemTitle>PROMOTE</FeatureItemTitle>
            <FeatureItemDescription>
              Lykke in articles, events,<br></br> ads and more!
            </FeatureItemDescription>
          </FeatureItem>
        </Col>
        <Col xs={9} sm={4}>
          <FeatureItem>
            <FeatureItemIcon>
              <img
                src="/static/images/affiliate/affiliate-chip3.png"
                alt="Get Paid"
                width="70px"
              />
            </FeatureItemIcon>
            <FeatureItemTitle>GET PAID</FeatureItemTitle>
            <FeatureItemDescription>
              when new customers<br></br> join Lykke!
            </FeatureItemDescription>
          </FeatureItem>
        </Col>
      </Row>
      <LeadContainer>
        <LeadButton href="mailto:marketing@lykke.com">Join Now</LeadButton>
      </LeadContainer>
    </Grid>
  </Chips>
);
