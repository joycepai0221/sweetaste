import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CheckoutDetail = styled.div`
  width: 300px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
