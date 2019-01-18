import React, { Children } from 'react';
import styled from 'styled-components'

import {Col, Grid, Row} from "react-styled-flexboxgrid";

export const TextSection = (props) => {
    const children = Children.toArray(props.children);
    return (
        <Grid className="container">
            <Row>
                <Col xs={12} sm={12} md={12}>
                    {children[0]}
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} mdOffset={2} md={4}>
                    {children.filter((el, i) => i%2 !== 0 && i !== 0)}
                </Col>
                <Col xs={12} sm={6} md={4}>
                    {children.filter((el, i) => i%2 === 0 && i !== 0)}
                </Col>
            </Row>
        </Grid>
    )
}

export default TextSection