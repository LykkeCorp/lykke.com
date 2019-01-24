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
  color: ${p => p.theme.colors.lightGrey};
  border-bottom: 2px solid ${p => p.theme.colors.greyPale};
`;

const StyledTab = styled(Tab).attrs({
    selectedClassName: 'selected',
    disabledClassName: 'disabled'
})`
  padding: ${rem('10px')};
  font-size: ${rem('20px')};
  font-weight: bold;
  font-family: ${p => p.theme.fonts.headings};
  cursor: pointer;
  
  &.selected {
    color: ${p => p.theme.colors.dark}
  }
`;


const mapChartData = (arr, ticks, type) => {
    return {
        dates: arr.map(el => el.dt).filter((e, i) => i===0 || i%ticks === 0 || i === arr.length-1),
        data: arr.map(el => el.v).filter((e, i) => i===0 || i%ticks === 0 || i === arr.length-1)
    }
};

class Chart extends React.Component {
    state = {
        tabIndex: 0
    };
    handleTabSelect = (index) => {
        this.props.tabSelect(index);
        this.setState({ tabIndex: index })
    };
    render() {
        const { lyciChart } = this.props;
        const chart24H = mapChartData(lyciChart.hours24, 50, '24h');
        const chartData24h = CHART_DATA(chart24H.dates, chart24H.data, 'rgb(19,183,42)');

        const chart5D = mapChartData(lyciChart.days5, 50, '5d');
        const chartData5d = CHART_DATA(chart5D.dates, chart5D.data, 'rgb(19,183,42)');

        const chart30D = mapChartData(lyciChart.days30, 50, '30d');
        const chartData30d = CHART_DATA(chart30D.dates, chart30D.data, 'rgb(19,183,42)');

        const chartOptions = CHART_OPTIONS;
        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.handleTabSelect(tabIndex)}>
                <StyledTabList>
                    <StyledTab>24h</StyledTab>
                    <StyledTab>5d</StyledTab>
                    <StyledTab>1m</StyledTab>
                </StyledTabList>

                <TabPanel>
                    <div>
                        <Line data={chartData24h} options={chartOptions('24h')}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <Line data={chartData5d} options={chartOptions('5d')}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <Line data={chartData30d} options={chartOptions('30d')}/>
                    </div>
                </TabPanel>
            </Tabs>
        )
    }
}

export default Chart;