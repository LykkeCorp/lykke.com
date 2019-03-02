import React from 'react'
import styled from 'styled-components'
import {Grid,  Col, Row} from 'react-styled-flexboxgrid';

import {
  Title,
  Subtitle,
  Header,
  Section,
} from './styled'

export const Footer = styled.div`
  margin-top: 3.75rem;
  padding: 1.5625rem 0;
  border-top: solid 1px ${p => p.theme.colors.greyLight};
`;

export const Date = styled.div`
  color: ${p => p.theme.colors.greyBluey};
`;

export const Social = styled.div`
  color: ${p => p.theme.colors.greyBluey};
  
  a {
    margin-right: 2.5rem;
    color: ${p => p.theme.colors.black};
    font-weight: 600;
    
    &:last-child {
      margin-right: 0;
    }
  }
  
  .icon {
    margin-right: .625rem;
  }
`;

const JobList = () => {
  return (
    <Section>
      <Grid className="container">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8}>
            <Header>
              <Title>React.Js/HTML/CSS Developer</Title>
              <Subtitle>
                Full-time
                <span className="middot">&nbsp;&middot;&nbsp;</span>
                Office
              </Subtitle>
            </Header>

            <div className="text-container">
              <p>
                Lykke is an international, Swiss-based company building a global
                marketplace for the free exchange of financial assets.
              </p>
              <p>
                Lykke’s mission is to democratize finance by leveraging the power of
                the blockchain. Eliminating market barriers, Lykke will provide and
                promote equal access from anywhere in the world to the digitization
                and trade of virtually any asset of value.
              </p>
              <p>
                After two years of exploration, Lykke is entering a fast growth phase
                and is looking for an experienced React.Js/HTML/CSS Developer to strengthen
                its existing team.
              </p>

              <Footer>
                <Row className="justify-content-between">
                  <Col>
                    <Date>Posted: Jan 07, 2019</Date>
                  </Col>
                  <Col>
                    <Social>
                      <a
                        href="https://www.facebook.com/sharer.php?u=https://www.lykke.com/job-article/a0bf2099-a750-4ec4-96d6-05b4c447d520"
                        target="_blank">
                        <i className="icon icon--facebook"/> Share
                      </a>
                      <a
                        href="http://twitter.com/share?text=React.Js%2FHTML%2FCSS+Developer&amp;url=https://www.lykke.com/job-article/a0bf2099-a750-4ec4-96d6-05b4c447d520"
                        target="_blank">
                        <i className="icon icon--twitter"/> Tweet
                      </a>
                    </Social>
                  </Col>
                </Row>
              </Footer>
            </div>
          </Col>
        </Row>
      </Grid>
    </Section>
  )
};

export default JobList;