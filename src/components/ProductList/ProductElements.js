import styled from "styled-components";

export const ProductBlock = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  margin-bottom: 60px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 30px auto;
  }
`;
