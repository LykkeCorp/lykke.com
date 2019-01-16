import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {rem} from 'polished';
import {Line} from 'react-chartjs-2'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { CHART_DATA, CHART_OPTIONS } from '../../config'

const StyledTabList = styled(TabList)`
  display: flex;
  align-items: center;
  list-style: none;
  color: ${p => p.theme.colors.lightGrey}
`;

const StyledTab = styled(Tab).attrs({
    selectedClassName: 'selected',
    disabledClassName: 'disabled'
})`
  font-size: ${rem('20px')};
  font-weight: bold;
  font-family: ${p => p.theme.fonts.headings};
  padding: ${rem('10px')};
  cursor: pointer;
  &.selected {
    color: ${p => p.theme.colors.dark}
  }
`;

export default ({ lyciChart }) => {
    console.log("Chart: ", lyciChart);
    const dates24h = lyciChart.hours24.map(i => moment(i.dt).format('LT'));
    const data24h = lyciChart.hours24.map(i => i.v);
    const chartData24h = CHART_DATA(dates24h, data24h, 'rgb(19,183,42)');

    const dates5d = lyciChart.days5.map(i => moment(i.dt).format('MMM DD'));
    const data5d = lyciChart.days5.map(i => i.v);
    const chartData5d = CHART_DATA(dates5d, data5d, 'rgb(19,183,42)');

    const dates30d = lyciChart.days30.map(i => moment(i.dt).format('MMM DD'));
    const data30d = lyciChart.days30.map(i => i.v);
    const chartData30d = CHART_DATA(dates30d, data30d, 'rgb(19,183,42)');

    const chartOptions = CHART_OPTIONS;
    return (
        <Tabs>
            <StyledTabList>
                <StyledTab>24h</StyledTab>
                <StyledTab>5d</StyledTab>
                <StyledTab>30d</StyledTab>
            </StyledTabList>

            <TabPanel>
                <div>
                    <Line data={chartData24h} options={chartOptions}/>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <Line data={chartData5d} options={chartOptions}/>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <Line data={chartData30d} options={chartOptions}/>
                </div>
            </TabPanel>
        </Tabs>
    )
}