import React from 'react';
import { Timeline } from 'react-twitter-widgets'
import { Grid, Row, Col} from 'react-styled-flexboxgrid'

export default () => {
    return (
        <Grid className="container">
            <Row>
                <Col xs={12} sm={12} lg={6} lgOffset={3}>
                    <h3>Lykke Feeds</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} lg={6} lgOffset={3}>
                    <Timeline dataSource={{
                        sourceType: 'profile',
                        screenName: 'Lykke'
                    }}
                              options={{
                                  username: 'Lykke',
                                  height: '645'
                              }}
                    />
                </Col>
            </Row>

        </Grid>
    )
}