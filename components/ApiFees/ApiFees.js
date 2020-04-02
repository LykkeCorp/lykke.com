import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";

import { ApiFeesWrapper, ApiFeesTable } from "./styled";

export const ApiFees = ({ minOrderAmounts }) => {
  return (
    <Grid className="container">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <ApiFeesWrapper className="text-container">
            <h1>API Wallet fees, and limits</h1>
            <h3>Fees</h3>
            <p>Lykke does not charge trading fees.</p>
            <h3>Minimal order limits</h3>
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
          </ApiFeesWrapper>
        </Col>
      </Row>
    </Grid>
  );
};
