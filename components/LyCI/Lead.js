import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';

import {Lead} from '../Home/Lead';
import {Label} from '../MarketList/styled';

import Chart from './Chart'


const Section = styled(Lead)`
  @media all and (max-width: 767px) {
    padding-bottom: 20px;
  }
`;

export const Value = styled.div`
  margin-bottom: ${rem('15px')};
  
  @media all and (max-width: 767px) {
    padding: 15px 0;
    margin-bottom: 4px;
  }
`;

export const ValueAccent = styled.div`
  color: ${p => p.theme.colors.dark};
  font-family: ${p => p.theme.fonts.headings};
  font-size: ${rem('30px')};
  font-weight: bold;
  line-height: 2;
  
  @media all and (max-width: 767px) {
    font-family: ${p => p.theme.fonts.primary};
    font-size: 24px;
    font-weight: 600;
    line-height: 1.67;
  }
`;

export const ValueText = styled.div`
  margin-top: 6px;
  color: ${p => p.theme.colors.slate};
  font-size: ${rem('14px')};
  line-height: 1.2;
  opacity: 0.8;

  @media all and (min-width: 768px) {
    margin-top: 0;
    
    span {
      display: block;
      font-size: ${rem('16px')};
    }
  }
`;

export const Graph = styled.div`
  margin-bottom: 10px;
  
  @media all and (min-width: 768px) {
    margin-bottom: ${rem('25px')};
  }
`;

export const Info = styled.div`
  margin-bottom: ${rem('40px')};
  font-family: ${p => p.theme.fonts.headings};
  font-size: ${rem('20px')};
  line-height: 1.75;
  font-weight: 600;
  text-align: left;

  @media all and (min-width: 768px) {
    padding: ${rem('20px')} ${rem('24px')};
    background-color: ${p => p.theme.colors.white};
    border-radius: 8px;
    box-shadow: ${p => p.theme.boxShadow.light};
  }
`;

export const InfoTitle = styled.div`
  margin-bottom: ${rem('25px')};
  color: ${p => p.theme.colors.black};
  font-size: ${rem('30px')};
  line-height: normal;
`;

export const InfoTable = styled.table`
  width: 100%;
  text-align: right;

  tr {
    td {
      &:first-child {
        text-align: left;
      }
    }
  }

  & + & {
    margin-top: ${rem('25px')};
  }
  
  @media all and (max-width: 767px) {
    tr {
      td {
        padding: 0;
      }
    }
    
    & + & {
      margin-top: 12px;
    }
  }
`;

export const LeadText = styled.p`
  margin-bottom: ${rem('15px')} !important;
  font-size: ${rem('16px')} !important;
  
  @media all and (max-width: 767px) {
    margin-bottom: 30px !important;
  }
`;

export const TableData = styled.td`
  color: ${p => p.green ? p.theme.colors.green : p.theme.colors.red}
`

class LyciLead extends React.Component {
    state = {
        selectedChart: 0
    };
    handleTabSelect = (selected) => {
        this.setState({selectedChart: selected})
    };
    render() {
        const { lyci, lyciChart } = this.props;
        const { selectedChart } = this.state;
        let change = <span>24 hour change</span>;
        const lyciDate = () => {
            if (selectedChart === 0) return lyci.Return24H
            if (selectedChart === 1) {
                change = <span>5 days change</span>;
                return lyci.Return5D
            }
            if (selectedChart === 2) {
                change = <span>30 days change</span>;
                return lyci.Return30D
            }
        };

        return (
            <Section>
                <Grid className="container">
                    <Row className="justify-content-between">
                        <Col xs={12} sm={7} md={6}>
                            <h1>Lykke Crypto Index (LyCI)</h1>
                            <LeadText className="lead">
                                An index tracking the financial performance of the top 25
                                cryptocurrencies.
                            </LeadText>

                            <Value>
                                <Row className="align-items-center">
                                    <Col className="d-md-none">
                                        <ValueAccent>LyCI</ValueAccent>
                                    </Col>
                                    <Col>
                                        <ValueAccent>{lyci.Value}</ValueAccent>
                                    </Col>
                                    {lyci.Return5D && (
                                        <Col>
                                            <Label dir={lyciDate() > 0 ? 'up' : 'down'} big>
                                                {lyciDate()} %
                                            </Label>
                                        </Col>
                                    )}
                                    {lyci.Return5D && (
                                        <Col>
                                            <ValueText>
                                                <span>{change}</span>
                                            </ValueText>
                                        </Col>
                                    )}
                                </Row>
                            </Value>
                            <Graph>
                                <Chart lyciChart={lyciChart} tabSelect={this.handleTabSelect}/>
                            </Graph>
                        </Col>
                        <Col xs={12} sm={5} md={4}>
                            <Info>
                                <InfoTitle className="d-none d-md-block">Key Numbers</InfoTitle>
                                <InfoTable>
                                    <tbody>
                                    <tr>
                                        <td>Current Value</td>
                                        <td>{lyci.Value}</td>
                                    </tr>
                                    <tr>
                                        <td>Return</td>
                                        <TableData green={lyci.Return24H > 0}
                                                   className="text-green">{lyci.Return24H} %</TableData>
                                    </tr>
                                    <tr>
                                        <td>5 day return</td>
                                        <TableData green={lyci.Return5D > 0}>{lyci.Return5D} %</TableData>
                                    </tr>
                                    <tr>
                                        <td>1 month return</td>
                                        <TableData green={lyci.Return30D > 0}>{lyci.Return30D} %</TableData>
                                    </tr>
                                    </tbody>
                                </InfoTable>
                                <InfoTable>
                                    <tbody>
                                    <tr>
                                        <td>24h Max</td>
                                        <td>{lyci.Max24H}</td>
                                    </tr>
                                    <tr>
                                        <td>24h Min</td>
                                        <td>{lyci.Min24H}</td>
                                    </tr>
                                    </tbody>
                                </InfoTable>
                                <InfoTable>
                                    <tbody>
                                    <tr>
                                        <td>24h Vol</td>
                                        <td>
                                            {(lyci.Volatility24H * 1).toFixed(2)} %
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>30d Vol</td>
                                        <td>
                                            {(lyci.Volatility30D * 1).toFixed(2)} %
                                        </td>
                                    </tr>
                                    </tbody>
                                </InfoTable>
                            </Info>
                        </Col>
                    </Row>
                </Grid>
            </Section>
        );
    }
}

export default LyciLead;
