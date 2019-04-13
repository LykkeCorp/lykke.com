import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';

export const Documentation = styled.section`
  padding: ${rem('160px')} 0 ${rem('180px')};
  background-color: ${p => p.theme.colors.greyPale};
  
  ${Col} + ${Col} {
    margin-top: 30px;
  }

  @media all and (min-width: 768px) {
    padding: ${rem('180px')} 0 ${rem('160px')};  
    
    ${Col} + ${Col} {
      margin-top: 0;
    }
  }
`;

export const Text = styled.div`
  color: ${p => p.theme.colors.grey};
  font-size: ${rem('16px')};
  line-height: 1.69;

  h4,
  h5 {
    margin-top: ${rem('45px')};
    color: ${p => p.theme.colors.dark};

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    margin-bottom: ${rem('50px')};
    color: ${p => p.theme.colors.black};
  }

  h4 {
    margin-bottom: ${rem('10px')};
    font-size: ${rem('28px')};
  }

  h5 {
    color: ${p => p.theme.colors.grey};
    font-size: ${rem('16px')};
    font-weight: 600;
    line-height: 1.69;
  }

  p,
  ul,
  ol {
    margin-bottom: ${rem('16px')};

    a {
      color: ${p => p.theme.colors.primary};
    }
  }

  ul,
  ol {
    padding-left: ${rem('25px')};
  }

  img {
    display: block;
    max-width: 100%;
    margin: ${rem('35px')} 0;
    object-fit: contain;
    mix-blend-mode: multiply;
  }

  table {
    width: 100%;
    font-weight: 600;

    tr {
      td {
        &:first-child {
          padding-right: ${rem('10px')};
        }
      }
    }
  }
  
  @media all and (max-width: 767px) {
    h3 {
      margin-bottom: 45px;
      font-size: 40px;
    }
    
    h4 {
      margin-bottom: 8px;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0 !important;
  font-weight: 600;
  max-width: 380px;
`

const ListItem = styled.li``

const ListWrapper = styled.div`
  flex-direction: column;
  max-height: 375px;

  @media all and (min-width: 768px) and (max-width: 1100px) {
    max-height: 300px;
  }

  @media all and (max-width: 768px) {
    max-height: 100%;
  }
`;

const CustomGutter = styled.div`
  ${Col} + ${Col} {
    margin-top: 0;
  }

  @media all and (min-width: 992px) {

    ${Row} {
      margin-right: ${rem('-20px')};
      margin-left: ${rem('-20px')};
    }

    ${Col} {
      padding-right: ${rem('20px')};
      padding-left: ${rem('20px')};
    }
  }
`;

export default ({lyci}) => {
    let constituents = [];
    if(lyci.Composition) {
        constituents = lyci.Composition.sort((i1, i2) => i2.Weight - i1.Weight).map(i => {
            return (
                <ListItem as={Col} xs={12} sm={6} key={i.AssetId}>
                    <Row className="justify-content-between">
                        <Col>
                            {i.AssetId}
                        </Col>
                        <Col>
                            {(i.Weight * 100).toFixed(2)} %
                        </Col>
                    </Row>
                </ListItem>
            )
        });
    }
  return (
        <Documentation>
            <Text>
                <Grid className="container">
                    <h3>Documentation</h3>
                    <Row className="justify-content-between">
                        <Col xs={12} md={5}>
                            <h4>What is the Lykke Crypto Index?</h4>
                            <p>
                                LyCI is a tool that consolidates and tracks the performance or
                                value of a selection of underlying cryptocurrencies. This provides
                                a snapshot of how this selection of the crypto market is
                                performing overall in one single, easily understandable measure.
                                This ensures that even where one cryptocurrency in the index goes
                                up or down dramatically, the index will reflect the global
                                performance of all the assets contained, giving a more accurate
                                picture of overall market performance excluding idiosyncratic
                                risks of single assets.
                            </p>
                            <h4>How can this help users?</h4>
                            <p>
                                There are several benefits to tracking the LyCI on a regular
                                basis. These include:
                            </p>
                            <ul>
                                <li>
                                    Useful benchmark of individual cryptocurrencies against a
                                    measure of market overall performance
                                </li>
                                <li>
                                    Quick and instant measure of general performance the
                                    cryptocurrency markets, as measured by the largest players
                                </li>
                            </ul>
                            <h4>Advantages</h4>
                            <p>
                                There are several large advantages to investing directly in LyCI
                                as opposed to investing in individual crypto assets
                            </p>
                            <ul>
                                <li>
                                    Reduced risk by spreading your investment across a diversified
                                    portfolio of the largest cryptocurrencies on the market
                                </li>
                                <li>
                                    Reduced time and energy by not having to investigate and
                                    research individual assets, picking those that you prefer and
                                    ignoring those that you do not want to invest in
                                </li>
                                <li>
                                    Reduced costs through not having to address spreads across
                                    several transactions but only across those transactions related
                                    to the single index (there are no commissions on the Lykke
                                    Exchange)
                                </li>
                            </ul>
                            <h4>Service Fee</h4>
                            <p>1.45% p.a. deducted from the basket value on a minute-by-minute basis.</p>
                        </Col>
                        <Col xs={12} md={5}>
                            <h4>What assets are included in LyCI?</h4>
                            <p>
                                LyCI is a weighted index which means that the proportion of each
                                digital asset contained in the group is dependent on their total
                                market capitalization. LyCI takes the current mid-market prices of
                                the 25 cryptocurrencies with the largest market capitalization –
                                i.e. those that are worth the most in terms of total asset value.
                            </p>
                            <p>
                                At the time of writing the cryptocurrencies with the highest
                                market cap and corresponding weights are (data from
                                coinmarketcap):
                            </p>
                            {/*<img
                                src="/static/images/luci-diagram.png"
                                width={512}
                                alt="diagram"
                            />*/}

                            <h5>Constituents:</h5>

                            <CustomGutter>
                                <List>
                                    <ListWrapper as={Row}>
                                        {constituents}
                                    </ListWrapper>
                                </List>
                            </CustomGutter>

                            <h4>Specification</h4>
                            <p>
                                If you want to know more details about LyCI, you can download
                                the <a href="https://www.lykke.com/media/documents/LyCI%20-%20Specification-3.pdf" target="_blank">index specification document</a>.
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </Text>
        </Documentation>
    );
}
