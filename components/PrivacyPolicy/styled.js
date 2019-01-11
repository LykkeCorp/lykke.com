import React from 'react';
import styled, {css} from 'styled-components';

export const List = styled.ul`
    padding-left: 20px;
    list-style: none;
    li {
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
  text-decoration: underline;
  cursor: pointer;
`;

export const PolicyWrapper = styled.section`
  margin: 60px 0;
`;