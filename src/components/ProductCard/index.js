import React from "react";
import {
  ProductCardContainer,
  ProductTag,
  HeartIcon,
  ProductCardImg,
  ProductInfoWrapper,
  ProductName,
  ProductPrice,
} from "./ProductCardElements";
import { Button } from "../ButtonElements";

const ProductCard = ({ imgUrl, name, price }) => {
  return (
    <ProductCardContainer>
      <ProductTag>本日精選</ProductTag>
      <HeartIcon />
      <ProductCardImg src={imgUrl} />
      <ProductInfoWrapper>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductInfoWrapper>
      <Button primary="false" greenfont="true" bigsize="true">
        加入購物車
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
