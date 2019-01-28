import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';

export const NavWrapper = styled.div`
    font-size: ${rem('18px')};

    @media (max-width: ${p => p.theme.media.tablet}) {
        margin-top: 20px;
    }
`;

export const NavItem = styled.span`
    margin: ${rem('14px')} ${rem('26px')} ${rem('14px')} 0;
    white-space: nowrap;
    display: inline-block;

    a {
        color: rgba(17, 17, 17, 0.6);

        &:hover {
            color: ${p => p.theme.colors.black};
        }
    }
`;

export const NavItemActive = styled.span`
    margin: ${rem('14px')} ${rem('26px')} ${rem('14px')} 0;
    font-weight: 600;

    a {
        color: ${p => p.theme.colors.slate};

        &:hover {
            color: ${p => p.theme.colors.slate};
        }
    }
`;