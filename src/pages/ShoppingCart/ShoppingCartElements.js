import styled from "styled-components";
export const ShoppingCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0px 39px;
  padding: 50px auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto 50px;
  }
`;
