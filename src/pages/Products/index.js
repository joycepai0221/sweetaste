import React, { useState } from "react";
import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";
import FilterMenu from "../../components/FilterMenu";
import { Slogan, ProductSection } from "./ProductsElements";
import Pagination from "../../components/Pagination";

const Products = () => {
  const [category, setCategory] = useState("所有甜點");
  const handleClick = (option) => {
    setCategory(category !== option ? option : category);
  };
  return (
    <>
      <Banner bannerimg={"https://bit.ly/2Qodh3Z"}>
        <Slogan />
      </Banner>
      <ProductSection>
        <FilterMenu handleClick={handleClick} />
        <ProductList category={category} />
      </ProductSection>
      <Pagination />
    </>
  );
};

export default Products;
