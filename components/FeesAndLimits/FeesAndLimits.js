import React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import Link from "next/link";

import {
  FeesAndLimitsWrapper,
  List,
  TextLink,
  FeesAndLimitsTable,
  AssetLimitsTable
} from "./styled";

export const FeesAndLimits = ({ assetFees }) => {
  return (
    <Grid className="container">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <FeesAndLimitsWrapper className="text-container">
            <h1>Fees, limits and account levels</h1>
            <h3>Trading</h3>
            <p>There are no fees for trading.</p>
            <h3>Fees and limits for cryptocurrency transactions</h3>
            <h4>for Deposits</h4>
            <p>There are no fees or limits for cryptocurrency deposits.</p>
            <h4>for Withdrawals</h4>
            <p>There are no maximum withdrawal limits.</p>
            <p>
              All withdrawal operations have the following fees and minimum
              limits:
            </p>
            <FeesAndLimitsTable>
              <thead>
                <tr>
                  <td>
                    <strong>Asset</strong>
                  </td>
                  <td>
                    <strong>Minimum withdrawal</strong>
                  </td>
                  <td>
                    <strong>Withdrawal transaction fee</strong>
                  </td>
                </tr>
              </thead>
              <tbody>
                {assetFees.map(asset => (
                  <tr key={asset.AssetDisplayId}>
                    <td>{asset.AssetDisplayId}</td>
                    <td>
                      {parseFloat(asset.MinCashoutAmount) === 0
                        ? ""
                        : asset.MinCashoutAmount}
                    </td>
                    <td>{asset.FeeSize}</td>
                  </tr>
                ))}
              </tbody>
            </FeesAndLimitsTable>
            <h3>Fees and limits for fiat transactions</h3>
            <p>
              Deposits can be made via credit card and wire transfer in the
              following currencies: CHF, EUR, GBP.
            </p>
            <p>USD is available only for withdrawals.</p>
            <h4>Fees for Deposits via credit card:</h4>
            <List>
              <li>Deposit transaction fee is 3.9%.</li>
            </List>
            <h4>Fees for Deposits via wire transfer:</h4>
            <List>
              <li>There is no fee for deposits.</li>
            </List>
            <h4>Account Levels</h4>

            <p>
              Deposit amounts are based on the approved level for your account.
              Please review the levels you may have after signing up for a Lykke
              account:
            </p>
            <List>
              <li>Beginner</li>
              <li>Advanced</li>
              <li>Pro Individual</li>
            </List>

            <p>
              More information on account levels can be found{" "}
              <u>
                <TextLink href="https://support.lykke.com/hc/en-us/articles/360010340059-Account-levels-and-Limits-for-fiat-">
                  here
                </TextLink>
              </u>
              .
            </p>
            <p>
              Please note that limits may vary according to your country of
              residence. These limits were set based on the AML Basel Index,
              FATF high risk jurisdiction list and EU high risk third country
              list.
            </p>
            <p>
              To ensure you can avail of our product offering please refer to
              our list of unsupported countries{" "}
              <u>
                <TextLink href="https://support.lykke.com/hc/en-us/articles/360011386999-Unsupported-Countries">
                  here
                </TextLink>
              </u>
              .
            </p>
            <p>
              Requirements: NO third party deposits or withdrawals are accepted.
              Customers can use only their personal bank accounts or credit
              cards.
            </p>

            <h4>Withdrawals to credit card</h4>
            <p>
              <u>NOT</u> available
            </p>

            <h4>Withdrawals to bank account</h4>
            <List>
              <li>
                Lykke does not charge any fees for withdrawal operations. Please
                note that the receiving or intermediary banks might charge a fee
                for the operation.
              </li>
              <li>
                Maximum withdrawal is based on the approved level of your
                account.
              </li>
            </List>

            <p>
              Note that the following minimum amount is applied for wire
              transfer regardless of the account level for{" "}
              <strong>deposits and withdrawals</strong>. If the transferred
              amount is less than indicated below, Lykke may not accept it.{" "}
            </p>
            <AssetLimitsTable>
              <thead>
                <tr>
                  <td>
                    <strong>Asset</strong>
                  </td>
                  <td>
                    <strong>Minimum deposit</strong>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Swiss franc</td>
                  <td>50 CHF</td>
                </tr>
                <tr>
                  <td>United States dollar</td>
                  <td>50 USD</td>
                </tr>
                <tr>
                  <td>Euro</td>
                  <td>50 EUR</td>
                </tr>
                <tr>
                  <td>Pound sterling</td>
                  <td>50 GBP</td>
                </tr>
              </tbody>
            </AssetLimitsTable>
          </FeesAndLimitsWrapper>
        </Col>
      </Row>
    </Grid>
  );
};
