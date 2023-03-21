import React from "react";
import Banner from "../components/Banner";
import OptionCardList from "../components/OptionCardList";
import InfoSectionBlock from "../components/InfoSectionBlock";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
      <Banner bannerimg={"https://bit.ly/2OhbMHr"} />
      <OptionCardList
        onClick={(e) => {
          console.log(e.target.text);
        }}
      />
      <InfoSectionBlock />
      <ProductList displayamount={3} />
    </>
  );
};

export default Home;
