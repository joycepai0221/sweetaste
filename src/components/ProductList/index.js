import React from "react";
import ProductCard from "../ProductCard";
import { ProductBlock } from "./ProductElements";
import { ProductsData } from "./ProductData";

const ProductList = ({
  displayamount = ProductsData.length,
  category = "所有甜點",
}) => {
  const filteredProductsData = ProductsData.filter((product) => {
    if (category === "所有甜點") {
      return product;
    }
    return product.category === category;
  });
  return (
    <ProductBlock>
      {filteredProductsData.map((product) => {
        return product.id <= displayamount ? (
          <ProductCard {...product} key={product.id} />
        ) : (
          <></>
        );
      })}
    </ProductBlock>
  );
};
export default ProductList;
