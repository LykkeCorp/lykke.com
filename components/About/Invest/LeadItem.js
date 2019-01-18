import React from 'react'
import styled from 'styled-components'
import {rem} from 'polished'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.div`
  background-image: url(${p => p.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: ${rem('70px')};
  height: ${rem('70px')};
  margin-bottom: ${rem('27px')}
`;

const Title = styled.div`
  font-family: ${p => p.theme.fonts.headings};
  p {
    font-size: ${rem('28px')};
    font-weight: 600;
    color: ${p => p.theme.colors.dark};
    margin-bottom: ${rem('7px')}
  }
`;

const Text = styled.div`
  p {
    font-size: ${rem('18px')};
    color: ${p => p.theme.colors.greyBluey};
    line-height: ${rem('30px')};
  }
`;

const LeadItem = ({settings}) => {
    return (
        <Wrapper>
            <Image url={settings.url}/>
            <Title>
                <p>{settings.number.toLocaleString('en-us')} {settings.currency}</p>
            </Title>
            <Text>
                <p>{settings.text}</p>
            </Text>
        </Wrapper>
    )
}

export default LeadItem