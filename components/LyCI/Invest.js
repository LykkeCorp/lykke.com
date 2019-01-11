import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Button from '../Button'
import {rem} from 'polished';

export const Invest = styled.section`

`;

export const Card = styled.div`
  margin-bottom: ${'-100px'};
  padding: ${rem('15px')};
  background-color: ${p => p.theme.colors.white}; 
  border-radius: 8px;
  box-shadow: ${p => p.theme.boxShadow.light}; 
  line-height: normal;
  text-align: center;
    
  @media all and (min-width: 768px) {
    margin-bottom: ${'-123px'};
    padding: ${rem('40px')} ${rem('70px')};
  }
`;

export const CardTitle = styled.div`
  margin-bottom : ${rem('24px')};
  padding: 0 ${rem('38px')};
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.headings};
  font-size: ${rem('24px')};
  font-weight: 600; 
  
  @media all and (min-width: 768px) {
    margin-bottom: ${rem('10px')};
    padding: 0 ${rem('15px')};
  }
`;

export const CardText = styled.p`
  margin-bottom : ${rem('20px')};
  color: ${p => p.theme.colors.grey};
  line-height: 1.69;
`;

export const CardHint = styled.div`
  margin-top: ${rem('30px')};
  font-size: ${rem('10px')};
  text-align: center;

  a {
    color: ${p => p.theme.colors.primary};
  }
  
  @media all and (min-width: 768px) {
    margin-top: ${rem('20px')};
  }
`;

export const CardAction = styled.div`
  > a,
  > button {
    width: 330px;
    max-width: 100%;
  }
`;

export default () => (
  <Invest>
    <Grid className="container">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <Card>
            <CardTitle>Invest in the Lykke Crypto Index</CardTitle>
            <CardText className="d-none d-md-block">Lorem ipsum dolor sit maet conpqcccqut maris dis nass.</CardText>
            <CardAction><Button href="#">Invest now</Button></CardAction>
            <CardHint>Please read full <a href="#">Risk Disclosure</a>.</CardHint>
          </Card>
        </Col>
      </Row>
    </Grid>
  </Invest>
);