import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';

export const SectionHeader = styled.div`
  margin-bottom: ${rem('42px')};
`;

export const List = styled.div`
  padding: 0;
  margin: 0;
`;


export const ListGroup = styled.div`
  margin-bottom: ${rem('80px')};
`;

export const ItemImage = styled.div`
  position: relative;
  font-size: 0;
  transition: transform ${p => p.theme.transition.primary};

  img {
    width: 100%;
    pointer-events: none;
  }
`;

export const Item = styled.div`
  padding: 0;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    z-index: 1;
    
    ${ItemImage} {
      transform: scale(1.02);
    }
  }
`;