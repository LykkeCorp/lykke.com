import React from 'react';
import styled, {css} from 'styled-components';

export const List = styled.ul`
    padding-left: 20px;
    list-style: none;
    li {
      margin-bottom: 20px;
      a {
        color: ${p => p.theme.colors.primary};
      }
      &::before {
        content: "\\2022";
        color: ${p => p.theme.colors.primary};
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
`;

export const TextLink = styled.a`
  color: ${p => p.theme.colors.primary};
  text-decoration: ${p => p.noUnderline ? '' : 'underline'};
  cursor: pointer;
`;

export const PolicyWrapper = styled.section`
  padding: 60px 0;
  border-bottom: 1px solid ${p => p.theme.colors.greyLight};
`;