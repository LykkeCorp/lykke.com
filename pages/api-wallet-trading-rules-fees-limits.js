import React from "react";
import Head from "../components/Head";
import { ApiFees } from "../components/ApiFees/ApiFees";
import axios from "../axios";

const ApiFeesPage = ({ minOrderAmounts }) => {
  return (
    <>
      <Head
        title="Lykke – Buy and sell cryptocurrency and digital assets"
        description="Global marketplace for any kind of assets built on the top of blockchain technology"
      />
      <ApiFees minOrderAmounts={minOrderAmounts} />
    </>
  );
};

ApiFeesPage.getInitialProps = async function() {
  const response = await axios.get("/assets/minOrderAmount");
  const minOrderAmounts = (response.data || [])
    .filter(a => a.AssetDisplayId)
    .sort((a, b) => {
      const textA = a.AssetDisplayId;
      const textB = b.AssetDisplayId;
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  return { minOrderAmounts };
};

export default ApiFeesPage;
