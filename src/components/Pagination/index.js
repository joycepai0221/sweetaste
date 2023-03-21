import React from "react";
import {
  PaginationContainer,
  ArrowWrapper,
  LeftArrow,
  PageButton,
  RightArrow,
} from "./PaginationElements";

const Pagination = () => {
  return (
    <PaginationContainer>
      <ArrowWrapper>
        <LeftArrow />
      </ArrowWrapper>
      <PageButton>1</PageButton>
      <PageButton>2</PageButton>
      <PageButton>3</PageButton>
      <ArrowWrapper>
        <RightArrow />
      </ArrowWrapper>
    </PaginationContainer>
  );
};

export default Pagination;
