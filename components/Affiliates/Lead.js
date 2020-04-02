import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { rem } from "polished";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { WALLET_URL } = publicRuntimeConfig;

export const Lead = styled.section`
  position: relative;
  padding-top: ${rem("100px")};
  padding-bottom: ${rem("100px")};
  background: url(/static/images/affiliate/affiliate-lead.jpg) 100% 100%
    no-repeat;
  background-size: cover;
  background-position: top;
  color: white;

  a.link {
    text-decoration: underline;
  }

  h1 {
    margin-bottom: ${rem("18px")};
  }

  .lead {
    margin-bottom: ${rem("40px")};
    color: white;
  }

  @media all and (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;

    h1 {
      margin-top: 0;
      margin-bottom: 12px;
    }

    .lead {
      margin-bottom: ${rem("10px")};
    }

    .form_button_container {
      margin-top: 30px;
    }
  }

  @media all and (max-width: 420px) {
    padding-top: 10px;
  }
`;

export default () => (
  <Lead>
    <Grid className="container">
      <Row>
        <Col xs={12} sm={12} md={12}>
          <h1>
            Become a<br></br>
            Lykke affiliate
          </h1>
          <p className="lead">
            <span>
              Help us democratize finance and<br></br> you can profit from our
              Blockchain based,<br></br>
              0% trading fee platform
            </span>
          </p>
        </Col>
      </Row>
    </Grid>
  </Lead>
);