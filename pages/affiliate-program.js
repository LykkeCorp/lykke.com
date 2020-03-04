import React from "react";

import Head from "../components/Head";
import Lead from "../components/Affiliates/Lead";
import Chips from "../components/Affiliates/Chips";
import Actions from "../components/Home/Actions";
import Disclaimer from "../components/Home/Disclaimer";
import About from "../components/Affiliates/About";
import News from "../components/Home/News";
import Team from "../components/Home/Team";
import Testimonials from "../components/Home/Testimonials";

const Affiliates = ({ posts }) => (
  <>
    <Head />
    <Lead />
    <Chips />
    <About />
    <News posts={posts} />
    <Testimonials />
    <Team />
    <Actions />
    <Disclaimer />
  </>
);

export default Affiliates;
