import styled from "styled-components";

export const FilterMenuContainer = styled.div`
  width: 300px;
  margin-right: 20px;
  margin-left: 42px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const FilterMenuHeader = styled.div`
  width: 100%;
  line-height: 65px;
  border: 1px solid #eaf0ed;
  background: #3f5d45;
  color: #eaf0ed;
  font-weight: bold;
  font-size: 24px;
`;
