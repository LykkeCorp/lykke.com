import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';

export const MarketList = styled.div`
  min-height: ${rem('50px')};
  padding-top: ${rem('9px')};
  padding-bottom: ${rem('9px')};
  background-color: ${p => p.theme.colors.greyPale};

  @media all and (max-width: 991px) {
    position: fixed;
    top: ${rem('8px')};
    right: 0;
    width: 50%;
    background-color: transparent;
    z-index: 201;
    transition: opacity ${p => p.theme.transition.primary},
      visibility ${p => p.theme.transition.primary};
      
    .justify-content-between,
    .align-items-center {
      justify-content: flex-end!important;
    }

    .menu-opened & {
      opacity: 0;
      visibility: hidden;
    }
  }

  @media all and (max-width: 767px) {
    top: 4px;
  }

  @media all and (max-width: 380px) {
    width: auto;
  }
`;

export const Wrapper = styled.div`
  padding-right: ${rem('12px')};
  padding-left: ${rem('12px')};

  @media all and (max-width: 991px) {
    padding: 0;
  }
`;

export const Title = styled.div`
  color: ${p => p.theme.colors.greyBluey};
  font-size: ${rem('15px')};
  font-weight: 600;
  line-height: 1;
`;

export const Value = styled.span`
  margin-left: ${rem('8px')};
  color: ${p =>
    p.dir === 'up' ? p.theme.colors.green : p.theme.colors.orangeRed};
  font-weight: 600;
`;

export const Desc = styled.div`
  margin-top: ${rem('2px')};
  color: ${p => p.theme.colors.greyBluey};
  font-size: ${rem('14px')};
  line-height: 1;


  ${Value} {
    display: inline-block;
    vertical-align: middle;
    margin-top: ${rem('-1px')};
    font-size: ${rem('12px')};
  }
`;

export const Label = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding: ${rem('5px')} ${rem('7px')} ${rem('4px')};
  padding: ${p =>
    (p.big ? `${rem('6px')} ${rem('12px')} ${rem('5px')}` :
        `${rem('5px')} ${rem('7px')} ${rem('4px')}`)};
  color: ${p => p.theme.colors.white};
  background-color: ${p =>
    p.dir === 'up' ? p.theme.colors.green : p.theme.colors.orangeRed};
  border-radius: ${p =>
    (p.big ? p => p.theme.corners.secondary : p.theme.corners.primary)};
  font-size: ${p =>
    (p.big ? `${rem('24px')}` : `${rem('12px')}`)};
  font-weight: 600;
  letter-spacing: ${p => (p.big ? '1.7px' : '0.8px')};
  line-height: 1;
`;

export const AccentDesc = styled(Desc)`
  margin-top: ${rem('5px')};
  color: ${p => p.theme.colors.slate};
  font-size: ${rem('11px')};
  line-height: 1;
  opacity: 0.6;
`;

export const AccentTitle = styled(Title)`
  color: ${p => p.theme.colors.dark};
  font-size: ${rem('16px')};
`;

export const ListItem = styled.div``;