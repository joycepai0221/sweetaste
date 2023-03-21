import styled from "styled-components";

export const InfoContainer = styled.div`
  padding: 0 42px;
  background: ${({ bg }) => (bg ? "#eaf0ed" : "#fff")};
  display: flex;
  flex-direction: ${({ flexstart }) => (flexstart ? `row` : `row-reverse`)};
  justify-content: ${({ showImg }) => (showImg ? "space-between" : "center")};
  position: relative;
  height: 420px;
  margin: 80px auto 105px;

  @media screen and (max-width: 768px) {
    display: flex;
    padding: 0;
    position: unset;
    flex-direction: column;
    justify-content: space-between;
    height: unset;
    margin: 0;
    background: #fff;
  }
`;

export const MobileInfoHeader = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 120px;
  padding: 30px 90px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const MobileInfoHeaderImg = styled.img`
  background-color: #fff;
  height: 60px;
`;

export const InfoImgWrapper = styled.div`
  width: 50%;
  position: relative;
  display: ${({ showImg }) => (showImg ? "block" : "none")};

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 250px;
    position: unset;
  }
`;

export const InfoImg = styled.img`
  width: 460px;
  height: 460px;
  object-fit: cover;
  position: absolute;
  top: -20px;
  bottom: -10px;
  ${({ flexstart }) => (flexstart ? `left:0` : `right:0`)};

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 250px;
    object-fit: cover;
    position: unset;
  }
`;

export const InfoContentWrapper = styled.div`
  width: 50%;
  display: ${({ showImg }) => (showImg ? "block" : "flex")};
  justify-content: ${({ showImg }) => (showImg ? "unset" : "center")};
  align-items: ${({ showImg }) => (showImg ? "unset" : "center")};
  padding: ${({ showImg }) => (showImg ? `70px 42px` : `0`)};
  position: relative;

  @media screen and (max-width: 768px) {
    display: ${({ showImg }) => (showImg ? "block" : "none")};
    background: ${({ bg }) => (bg ? "#eaf0ed" : "#fff")};
    width: 100%;
    position: unset;
    /* height: 312px; */
    padding: 30px;
  }
`;
export const InfoInnerWrapper = styled.div`
  width: ${({ showImg }) => (showImg ? `80%` : `100%`)};
  position: ${({ showImg }) => (showImg ? `absolute` : `unset`)};
  ${({ flexstart }) => (flexstart ? `right:0px` : `left:0px`)};

  @media screen and (max-width: 768px) {
    width: 100%;
    position: unset;
    /* height: 252px; */
  }
`;
export const InfoHeaderImg = styled.img`
  display: ${({ showHeaderImg }) => (showHeaderImg ? "block" : "none")};
  width: 88.5px;
  margin: 0 ${({ showImg }) => (showImg ? `0` : `auto`)};
  position: ${({ showImg }) => (showImg ? "absolute" : "unset")};
  top: ${({ showImg }) => (showImg ? `-110px` : 0)};
  right: 0;

  @media screen and (max-width: 768px) {
    display: none;
    position: unset;
  }
`;

export const InfoPWrapper = styled.div`
  padding: 16px;
  font-size: 16px;
  color: #8da291;
  font-family: "PingFang TC", sans-serif;
  margin-right: 80.53px;
  display: flex;
  text-align: left;
  height: 279px;
  display: ${({ showImg }) => (showImg ? "flex" : "none")};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    margin-right: 0;
  }
`;

export const InfoP = styled.p`
  writing-mode: vertical-rl;
  line-height: 2;
  margin-right: 64px;

  @media screen and (max-width: 768px) {
    writing-mode: horizontal-tb;
    margin-top: 32px;
    margin-bottom: 32px;
    margin-right: 0;
    text-align: left;
  }
`;
