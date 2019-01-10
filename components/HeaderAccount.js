import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {Row, Col} from 'react-styled-flexboxgrid';
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { WALLET_URL } = publicRuntimeConfig

const Wrapper = styled.div`
  flex-shrink: 0;

  @media all and (max-width: 991px) {
  }
`;

export default () => (
  <Wrapper>
    <Row className="justify-content-end">
      <Col>
        <Button href={WALLET_URL}>Go to dashboard</Button>
      </Col>
    </Row>
  </Wrapper>
);
