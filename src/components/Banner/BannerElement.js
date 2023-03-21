import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 496px;
  background-size: cover;
  padding: 30px 42px;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    height: 277px;
  }
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
