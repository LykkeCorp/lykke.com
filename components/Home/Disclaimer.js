import React from 'react';
import styled from 'styled-components';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import Link from 'next/link';
import {rem} from 'polished';

export const Disclaimer = styled.div`
  color: ${p => p.theme.colors.grey};
  font-size: ${rem('14px')};
  line-height: 1.43;
  
  p {
    margin-bottom: .63rem;
    
    a {
      font-weight: 600;
      text-decoration: underline;
      
      &:hover {
        text-decoration: none;
      }
    }
  }
  
  hr {
    margin: ${rem('25px')} 0 0 0;
    border: 0;
    border-bottom: 1px solid ${p => p.theme.colors.greyLight};
  }
  
  @media all and (max-width: 767px) {
    font-size: 11px;
    line-height: 1.45;
  }
  
  @media all and (min-width: 992px) {
    ${Row} {
      margin-right: ${rem('-20px')};
      margin-left: ${rem('-20px')};
    }
    
    ${Col} {
      padding-right: ${rem('20px')};
      padding-left: ${rem('20px')};
    }
  }
`;

export default () => (
  <Disclaimer>
    <Grid className="container">
      <Row>
        <Col xs={12} sm={6}>
          <p>Trading financial products involves significant risk and can result in the loss of your invested capital. 
            You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. 
            Trading leveraged products may not be suitable for all investors. Before trading, please take into consideration your level of experience, 
            investment objectives and seek independent financial advice if necessary. Please read full&nbsp;
            <Link href="/privacy-policy"><a>Risk Disclosure</a></Link>.</p>
          <p>Spot FX trading is provided by Lykke Corp UK.
            Lykke services are not available for the residents of the <Link href="/restricted-countries"><a>restricted countries list</a></Link>.</p>
          <p>Lykke Corp (Lykke AG) is registered in Zug, Switzerland. Identification number CHE-345.258.499. <Link href="https://zg.chregister.ch/cr-portal/auszug/auszug.xhtml?uid=CHE-345.258.499"><a>Commercial register</a></Link>.</p>
        </Col>
        <Col xs={12} sm={6}>
          <p>Lykke Corp UK Limited is a company registered in England number 10093552 limited by shares with its registered office at 86-90 Paul Street, London EC2A 4NE.</p>
          <p>On July 4 2018, Lykke Cyprus Limited received approval from the Cyprus Securities and Exchange Commission (CySEC) to operate as a regulated Cyprus Investment Firm (CIF; license number 363/18).</p>
          <p>Risk warning: Trading leveraged products can result in losses that exceed your deposits. Ensure you understand the risks. Read full <Link href="/privacy-policy"><a>Risk Disclosure</a></Link>.</p>
        </Col>
      </Row>
      <hr/>
    </Grid>
  </Disclaimer>
);
