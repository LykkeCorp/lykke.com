import React from 'react'
import styled from 'styled-components'
import {rem} from 'polished';

export const SectionHeader = styled.div`
  margin-bottom: ${rem('42px')};
`;

export const Title = styled.h3`
  margin-bottom: ${rem('20px')};
  
  @media all and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const Subtitle = styled.h4`
  color: ${p => p.theme.colors.greyBluey};
  font-weight: normal;
`;

export const Header = styled.div`
  margin-bottom: ${rem('70px')};
  
  @media all and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const Section = styled.section`
  padding-top: ${rem('80px')};
  padding-bottom: ${rem('80px')};
  font-size: ${rem('18px')};

  .btn {
    width: 240px;
    
    .icon {
      margin: ${rem('-6px')} ${rem('5px')} ${rem('-5px')} ${rem('-5px')};
      font-size: ${rem('30px')};
    }
  }

  .lead {
    margin-bottom: ${rem('40px')};
    font-size: ${rem('18px')};
  }
  
  p {
    a {
      font-weight: 600;
      color: ${p => p.theme.colors.primary};
          
      &:hover {
        color: ${p => p.theme.colors.dark};
      }
    }
  }

  @media all and (max-width: 767px) {
    padding-top: 70px;
    padding-bottom: 40px;
    font-size: 14px;
  }
`;

export const Image = styled.div`
  padding: ${rem('80px')} 0;

  img {
    width: 100%;
  }
  
  @media all and (max-width: 767px) {
    margin: 0 -40%;
    padding: 30px 0;
  }
  
  @media all and (max-width: 540px) {
    margin: 0 -30%;
  }
  
  @media all and (max-width: 490px) {
    margin: 0 -10%;
  }
  
  @media all and (max-width: 390px) {
    margin: 0 -15px;
  }
`;

export const Indent = styled.div`
  padding-bottom: ${rem('50px')};
`;

export const List = styled.div`
  margin-bottom: ${rem('40px')};
  
  @media all and (min-width: 992px) {
    margin-right: ${rem('-20px')};
    margin-left: ${rem('-20px')};
  }
  
  @media all and (max-width: 767px) {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const ListTitle = styled.h4`
  margin-bottom: ${rem('10px')};
  font-size: ${rem('22px')};
  font-weight: bold;
`;

export const ListImage = styled.div`
  font-size: 0;
  margin-bottom: ${rem('20px')};
`;

export const ListText = styled.p``;

export const ListItem = styled.div`
  margin-bottom: ${rem('60px')};
  
  @media all and (min-width: 992px) {
    padding-right: ${rem('20px')};
    padding-left: ${rem('20px')};
  }
  
  @media all and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const ButtonGroup = styled.div`
  @media all and (max-width: 767px) {
    text-align: center;
    
    a, button {
        margin-bottom: 20px;
    }
  }
`;
