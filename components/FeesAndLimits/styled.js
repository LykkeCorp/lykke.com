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

export const FeesAndLimitsWrapper = styled.section`
  padding: ${rem('60px')} 0;
  border-bottom: 1px solid ${p => p.theme.colors.greyLight};
`;

export const FeesAndLimitsTable = styled.table`
    width: 100%;
    margin-bottom: ${rem('20px')};

    thead {
        font-size: ${rem('18px')};
    }

    td {
        width: 35%;
        border-bottom: 1px solid #e1e1e1;
        padding: ${rem('12px')} ${rem('20px')};

        &:first-child {
            width: 30%;
        }
    }
`;

export const AssetLimitsTable = styled.table`
    width: 100%;
    margin-bottom: ${rem('20px')};

    thead {
        font-size: ${rem('18px')};
    }

    td {
        width: 60%;
        border-bottom: 1px solid #e1e1e1;
        padding: ${rem('12px')} ${rem('20px')};

        &:first-child {
            width: 40%;
        }
    }
`;