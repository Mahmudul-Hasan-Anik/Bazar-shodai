import React from "react";
import Layout from "../../Components/Layout";
import Banner from "../../Components/Banner/Banner";
import FeaturedCatagory from "./FeaturedCatagory";

const Home = () => {
  return (
    <Layout title="Home">
      <Banner />
      <FeaturedCatagory />
    </Layout>
  );
};

export default Home;
