import React from 'react'
import {Col, Grid, Row} from 'react-styled-flexboxgrid';
import Button from '../Button';

import JobList from './JobList'

import {
  SectionHeader,
  Title,
  Subtitle,
  Header,
  Section,
  Image,
  Indent,
  List,
  ListTitle,
  ListImage,
  ListText,
  ListItem,
  ButtonGroup
} from './styled'

const Careers = () => {
  return (
    <Section>
      <Grid className="container">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8}>
            <SectionHeader>
              <h1>Careers</h1>
            </SectionHeader>
            <h3>Lykke is the best place to change the world!</h3>

            <p className="lead">At Lykke, we take our inspiration from
              ideas like crowdsourcing and decentralization. We believe
              that each staff member contributes to our success. But only
              by working together will we achieve our highest potential.
              Join our team and make a difference.</p>

            <ButtonGroup>
              <Button className="btn" href="#list">
                Search for a job now
              </Button>

              <Button className="btn" flat href="mailto:job@lykke.com">
                <span>job@lykke.com</span>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Image>
              <img
                src="/static/images/about/team-switzerland.jpg"
                alt="office"
              />
            </Image>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8}>
            <Header className="text-center">
              <Title>Benefits</Title>
              <Subtitle>Why you should choose Lykke</Subtitle>
            </Header>

            <List as={Row}>
              <ListItem as={Col} xs={12} sm={6}>
                <ListImage>
                  <img
                    src="/static/images/about/innovation_icn.svg"
                    alt="innovation"
                    width="64px"
                  />
                </ListImage>
                <ListTitle>Spirit of innovation</ListTitle>
                <ListText>
                  We love to rethink old assumptions, and we like to use
                  the latest technologies to help us work as smartly as
                  possible. We want to expose you you to a wide range of
                  possibilities... and to have you do the same for us!
                </ListText>
              </ListItem>
              <ListItem as={Col} xs={12} sm={6}>
                <ListImage>
                  <img
                    src="/static/images/about/remote_icn.svg"
                    alt="remote"
                    width="64px"
                  />
                </ListImage>
                <ListTitle>Remote work</ListTitle>
                <ListText>
                  You can work from any place in the world. The main
                  performance measure is the result.
                </ListText>
              </ListItem>
              <ListItem as={Col} xs={12} sm={6}>
                <ListImage>
                  <img
                    src="/static/images/about/initiative_icn.svg"
                    alt="initiative"
                    width="64px"
                  />
                </ListImage>
                <ListTitle>Encouraging initiatives</ListTitle>
                <ListText>
                  We are always open to your ideas. At Lykke, we deal in dream projects.
                </ListText>
              </ListItem>
              <ListItem as={Col} xs={12} sm={6}>
                <ListImage>
                  <img
                    src="/static/images/about/equality_icn.svg"
                    alt="equality"
                    width="64px"
                  />
                </ListImage>
                <ListTitle>Equality</ListTitle>
                <ListText>
                  All the employees of our company are equal. We are
                  free to express our point of view. All of us are heard.
                  We listen to each other.
                </ListText>
              </ListItem>
              <ListItem as={Col} xs={12} sm={6}>
                <ListImage>
                  <img
                    src="/static/images/about/community_icn.svg"
                    alt="community"
                    width="64px"
                  />
                </ListImage>
                <ListTitle>Community</ListTitle>
                <ListText>
                  Everyone in Lykke stands ready to assist you or give you advice.
                </ListText>
              </ListItem>
            </List>
          </Col>
        </Row>

        <hr id="#list"/>
        <Indent/>

        <Header className="text-center">
          <Title>Open positions</Title>
          <Subtitle>Here are our current job openings</Subtitle>
        </Header>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8}>
            <JobList/>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={7} md={5} className="text-center">
            <p>Haven't found a position for you?
              Send your resume/suggest a&nbsp;project you'd
              like to lead for Lykke:{' '}
              <a href="mailto:job@lykke.com">job@lykke.com</a>
            </p>
          </Col>
        </Row>
      </Grid>
    </Section>
  )
};

export default Careers;