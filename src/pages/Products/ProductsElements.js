import styled from "styled-components";
import { ReactComponent as SloganHeader } from "../../images/lg-想吃甜點是不需要理由的.svg";

export const Slogan = styled(SloganHeader)`
  position: absolute;
  top: 80px;
  right: 82px;
  width: 89.1px;

  @media screen and (max-width: 768px) {
    width: 60px;
    top: 30px;
    right: 30px;
  }
`;

export const ProductSection = styled.section`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
