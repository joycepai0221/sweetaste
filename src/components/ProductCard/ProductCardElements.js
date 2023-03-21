import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

export const ProductCardContainer = styled.div`
  width: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: unset;
    margin-right: 30px;
    margin-left: 30px;
  }
`;

export const ProductTag = styled.div`
  letter-spacing: 2px;
  writing-mode: vertical-lr;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #3f5d45;
  color: #eaf0ed;
  position: absolute;
  left: 20px;
  padding: 10px;
`;

export const HeartIcon = styled(AiOutlineHeart)`
  color: #3f5d45;
  font-size: 20px;
  position: absolute;
  top: 19px;
  right: 22px;
`;

export const ProductCardImg = styled.img`
  width: 300px;
  height: 315px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: unset;
  }
`;

export const ProductInfoWrapper = styled.div`
  width: 100%;
  line-height: 56px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const ProductName = styled.div`
  width: 50%;
  text-align: center;
  color: #3f5d45;
  font-family: "PingFang TC, Light", sans-serif;
  border: 1px solid #eaf0ed;
`;

export const ProductPrice = styled.div`
  width: 50%;
  text-align: center;
  color: #3f5d45;
  font-weight: bold;
  font-family: "PingFang TC, Semibold", sans-serif;
  border: 1px solid #eaf0ed;
`;
