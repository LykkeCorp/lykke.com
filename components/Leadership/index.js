import React from 'react'
import {Col, Grid, Row} from 'react-styled-flexboxgrid';

import {Section} from '../Home/styled'
import {SectionHeader, List, ListGroup, Item, ItemImage} from './styled'

// import {Modal} from './Modal'
import {team} from './data'

function TeamList(props) {
  const team = props.data;

  const listItems = Object.keys(team).map((key, index) =>
    (
      <ListGroup key={index}>
        <SectionHeader>
          <h2 className="h1">{key}</h2>
        </SectionHeader>

        <List as={Row}>
          {/*We need to show <Modal> with info about team member on <Item> click */}
          {team[key].map((item, i) => (
            <Item key={i} as={Col} xs={6} sm={4} lg={3}>
              <ItemImage>
                <img src={item.imagePreviewURL} alt={item.name} width="200px"/>
              </ItemImage>
            </Item>
            )
          )}
        </List>
      </ListGroup>
    )
  );

  return <List>{listItems}</List>;
}

const Leadership = () => {
    return (
      <Section>
        <Grid className="container">
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              {/* show this on mobile open <Backdrop/>*/}
              <TeamList data={team}/>
            </Col>
          </Row>
        </Grid>
      </Section>
    )
}

export default Leadership;