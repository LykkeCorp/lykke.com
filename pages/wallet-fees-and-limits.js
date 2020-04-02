import React from "react";
import Head from "../components/Head";
import { FeesAndLimits } from "../components/FeesAndLimits/FeesAndLimits";
import axios from "../axios";

const FeesAndLimitsPage = ({ assetFees }) => {
  return (
    <>
      <Head
        title="Lykke – Buy and sell cryptocurrency and digital assets"
        description="Global marketplace for any kind of assets built on the top of blockchain technology"
      />
      <FeesAndLimits assetFees={assetFees} />
    </>
  );
};

FeesAndLimitsPage.getInitialProps = async function() {
  const response = await axios.get("/withdrawals/crypto/fees");
  const assetFees = response.data.sort(
    (a, b) => a.AssetDisplayId > b.AssetDisplayId
  );
  return { assetFees };
};

export default FeesAndLimitsPage;
