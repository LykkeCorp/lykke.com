import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {Col} from 'react-styled-flexboxgrid';
import {AccentTitle, Value, AccentDesc, Label} from "./styled";

const LyciItem = styled.div`
  position: ${p => p.show ? 'relative' : 'absolute'};
  max-width: ${rem('230px')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${p => p.show ? 1 : 0};
  visibility: ${p => p.show ? 'visible' : 'hidden'};
  will-change: opacity, visibility;
  transition: opacity ${p => p.theme.transition.primary}, 
    visibility ${p => p.theme.transition.primary};
`;


const LyciMarketList = ({ lyci, show, desc, color }) => {
    return (
        <LyciItem show={show}>
            <Col>
                <AccentTitle>
                    {lyci.name}{' '}
                    <Value dir={lyci.change > 0 ? 'up' : 'down'} black>
                        {lyci.price.toLocaleString()}
                    </Value>
                </AccentTitle>
                <AccentDesc>{desc}</AccentDesc>
            </Col>
            <Col className="clear-height">
                <Label dir={lyci.change > 0 ? 'up' : 'down'}>
                    {lyci.change}
                </Label>
            </Col>
        </LyciItem>
    )
}

export default LyciMarketList;