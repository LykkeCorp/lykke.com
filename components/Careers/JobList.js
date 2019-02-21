import React from 'react'
import styled from 'styled-components'
import {Col, Row} from 'react-styled-flexboxgrid';
import {rem} from 'polished';
import Link from 'next/link';

const List = styled.div`
  margin-bottom: ${rem('80px')};
  border-top: 1px solid ${p => p.theme.colors.greyLight};
  
  @media all and (max-width: 767px) {
    margin-bottom: 40px;  
  }
`;

const Item = styled.div`
  padding: 1.25rem 0;
  border-bottom: 1px solid ${p => p.theme.colors.greyLight};
`;

const Info = styled.div`
  padding-right: 1.25rem;
`;

const Title = styled.div`
  color: ${p => p.theme.colors.dark};
  font-size: ${rem('22px')};
  font-weight: 600;
  line-height: 1.59;
  
  a {
    color: inherit;
        
    &:hover {
      color: ${p => p.theme.colors.dark};
    }
  }
  
  @media all and (max-width: 767px) {
    font-size: 16px;
  }
`;

const Desc = styled.div`
  color: ${p => p.theme.colors.greyBluey};
  line-height: 1.67;
`;

const Actions = styled.div`
  a {
    padding: 1.25rem 0;
    font-weight: 600;
    color: ${p => p.theme.colors.primary};
    
    &:hover {
      color: ${p => p.theme.colors.dark};
    }
  }
  
  @media all and (max-width: 767px) {
    margin-top: 10px;
    width: 100%;
  }
`;

const JobList = () => {
  return (
    <List>
      <Item
        as={Row}
        className="justify-content-between align-items-center"
      >
        <Info as={Col}>
          <Title>
            <Link to="https://www.lykke.com/job-article/a0bf2099-a750-4ec4-96d6-05b4c447d520">
              <a href="https://www.lykke.com/job-article/a0bf2099-a750-4ec4-96d6-05b4c447d520">
                React.Js/HTML/CSS Developer
              </a>
            </Link>
          </Title>
          <Desc>
            Full-time
            <span className="middot">&nbsp;&middot;&nbsp;</span>
            Office
          </Desc>
        </Info>
        <Actions as={Col}>
          <Link to="https://www.lykke.com/job-article/a0bf2099-a750-4ec4-96d6-05b4c447d520">
            <a href="https://www.lykke.com/job-article/a0bf2099-a750-4ec4-96d6-05b4c447d520">
              View details
            </a>
          </Link>
        </Actions>
      </Item>
      <Item as={Row} className="justify-content-between align-items-center">
        <Info as={Col}>
          <Title>
            <Link to="https://www.lykke.com/job-article/a54fbb14-4954-4816-a44a-1b7404e89b4f">
              <a href="https://www.lykke.com/job-article/a54fbb14-4954-4816-a44a-1b7404e89b4f">
                React Native Developer
              </a>
            </Link>
          </Title>
          <Desc>
            Full-time
            <span className="middot">&nbsp;&middot;&nbsp;</span>
            Office
          </Desc>
        </Info>
        <Actions as={Col}>
          <Link to="https://www.lykke.com/job-article/a54fbb14-4954-4816-a44a-1b7404e89b4f">
            <a href="https://www.lykke.com/job-article/a54fbb14-4954-4816-a44a-1b7404e89b4f">
              View details
            </a>
          </Link>
        </Actions>
      </Item>
    </List>
  )
};

export default JobList;