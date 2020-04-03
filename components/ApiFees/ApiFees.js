import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import { ApiFeesWrapper, ApiFeesTable } from "./styled";
import axios from "../../axios";

export class ApiFees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minOrderAmounts: [],
      minOrderAmountsLoading: false
    };
  }

  async componentDidMount() {
    this.setState({ minOrderAmountsLoading: true });
    const response = await axios.get("/assets/minOrderAmount");
    const minOrderAmounts = (response.data || [])
      .filter(a => a.AssetDisplayId)
      .sort((a, b) => {
        const textA = a.AssetDisplayId;
        const textB = b.AssetDisplayId;
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    this.setState({ minOrderAmounts, minOrderAmountsLoading: false });
  }

  render() {
    const { minOrderAmounts, minOrderAmountsLoading } = this.state;
    return (
      <Grid className="container">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <ApiFeesWrapper className="text-container">
              <h1>API Wallet fees, and limits</h1>
              <h3>Fees</h3>
              <p>Lykke does not charge trading fees.</p>
              <h3>Minimal order limits</h3>
              {minOrderAmountsLoading ? (
                "Loading..."
              ) : (
                <ApiFeesTable>
                  <thead>
                    <tr>
                      <td>
                        <strong>Asset</strong>
                      </td>
                      <td>
                        <strong>Min order size</strong>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {minOrderAmounts.map(asset => (
                      <tr key={asset.AssetId}>
                        <td>{asset.AssetDisplayId}</td>
                        <td>{asset.MinOrderAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </ApiFeesTable>
              )}
            </ApiFeesWrapper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
