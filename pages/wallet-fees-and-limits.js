import React from "react";
import Head from "../components/Head";
import { FeesAndLimits } from "../components/FeesAndLimits/FeesAndLimits";

const FeesAndLimitsPage = () => {
  return (
    <>
      <Head
        title="Lykke – Buy and sell cryptocurrency and digital assets"
        description="Global marketplace for any kind of assets built on the top of blockchain technology"
      />
      <FeesAndLimits />
    </>
  );
};

export default FeesAndLimitsPage;
