import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';

export const ApiFeesWrapper = styled.section`
  padding: ${rem('60px')} 0;
  border-bottom: 1px solid ${p => p.theme.colors.greyLight};
`;

export const ApiFeesTable = styled.table`
    width: 100%;
    font-size: ${rem('20px')};

    td {
        border-bottom: 1px solid #e1e1e1;
        padding: ${rem('14px')} ${rem('20px')};

        &:first-child {
            width: 40%;
        }

        &:last-child {
            width: 60%;
        }
    }
`;