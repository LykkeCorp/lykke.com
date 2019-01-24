import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';

export const List = styled.ul`
  padding-left: ${rem('20px')};
  list-style: none;
  
  li {
    margin-bottom: ${rem('20px')};
    
    a {
      color: ${p => p.theme.colors.primary};
    }
    
    &::before {
      content: '\\2022';
      display: inline-block;
      width: 1em;
      margin-left: -1em;
      color: ${p => p.theme.colors.primary};
      font-weight: bold;
    }
  }
`;

export const TextLink = styled.a`
  color: ${p => p.theme.colors.primary};
  text-decoration: ${p => p.noUnderline ? '' : 'underline'};
  cursor: pointer;
`;

export const PolicyWrapper = styled.section`
  padding: ${rem('60px')} 0;
  border-bottom: 1px solid ${p => p.theme.colors.greyLight};
`;

export const AnchorTitle = styled.h2`
    @media all and (max-width: 991px) {
        padding-top: ${rem('60px')};
        margin-top: ${rem('-60px')};
    }
`;