import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import {rem} from 'polished';

export const Chips = styled.div`
  margin-top: 50px;
  padding-top: ${rem('35px')};
  
  @media all and (min-width: 768px) {
    margin-top: 0;
    padding-top: 0;
  }

  @media all and (min-width: 992px) {
    ${Row} {
      margin-right: ${rem('-20px')};
      margin-left: ${rem('-20px')};
    }
    
    ${Col} {
      padding-right: ${rem('20px')}
      padding-left: ${rem('20px')};
    }
  }
`;

export const FeatureItem = styled.div`
  position: relative;
  margin-bottom: ${rem('60px')};
  padding: ${rem('42px')} ${rem('20px')} ${rem('30px')};
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.corners.secondary};
  box-shadow: ${p => p.theme.boxShadow.light};
  text-align: center;

  @media all and (min-width: 768px) {
    margin-bottom: ${rem('20px')};
  }
`;

export const FeatureItemIcon = styled.div`
  position: absolute;
  top: ${rem('-35px')};
  right: 0;
  left: 0;
  width: ${rem('70px')};
  margin: 0 auto;
  pointer-events: none;
  user-select: none;
  
  img {
    width: 100%;
  }
`;

export const FeatureItemTitle = styled.h4`
  margin: 0;
`;


export default () => (
  <Chips className="d-none d-md-block">
    <Grid className="container">
      <Row className="justify-content-center">
        <Col xs={9} sm={4}>
          <FeatureItem>
            <FeatureItemIcon>
              <img src="/static/images/badge-easy.svg" alt="Easy" width="70px"/>
            </FeatureItemIcon>
            <FeatureItemTitle>Easy to start. Easy to use.</FeatureItemTitle>
          </FeatureItem>
        </Col>
        <Col xs={9} sm={4}>
          <FeatureItem>
            <FeatureItemIcon>
              <img src="/static/images/badge-costs.svg" alt="Costs" width="70px"/>
            </FeatureItemIcon>
            <FeatureItemTitle>Best prices. No hidden costs.</FeatureItemTitle>
          </FeatureItem>
        </Col>
        <Col xs={9} sm={4}>
          <FeatureItem>
            <FeatureItemIcon>
              <img src="/static/images/badge-swiss.svg" alt="Swiss" width="70px"/>
            </FeatureItemIcon>
            <FeatureItemTitle>Swiss Quality Exchange.</FeatureItemTitle>
          </FeatureItem>
        </Col>
      </Row>
    </Grid>
  </Chips>
);