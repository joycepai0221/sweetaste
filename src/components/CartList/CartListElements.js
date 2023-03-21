import styled from "styled-components";

export const CartListContainer = styled.div`
  margin-right: 20px;
  width: ${({ checkout }) => (checkout ? "100%" : "620px")};
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  border: ${({ checkout }) => (checkout ? "1px solid #eaf0ed" : "0")};

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const CartListHeader = styled.h3`
  line-height: 65px;
  background: #eaf0ed;
  color: ${({ checkout }) => (checkout ? "#8DA291" : "#3f5d45")};
  font-size: 24px;
  text-align: center;
  margin-bottom: 3px;
`;

export const CartListWrapper = styled.div`
  @media screen and (max-width: 768px) {
    margin: 30px;
  }
`;
