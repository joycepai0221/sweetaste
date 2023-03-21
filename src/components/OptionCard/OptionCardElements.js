import styled from "styled-components";
import { Link } from "react-router-dom";

export const OptionMenuContainer = styled(Link)`
  width: 256px;
  height: 256px;
  position: relative;
  display: flex;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 180px;
  }
`;

export const OptionBgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 1;
  filter: blur(4px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const OptionContent = styled.div`
  position: absolute;
  writing-mode: vertical-lr;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-right: 1px solid #fff;
  color: ${({ hover }) => (hover ? "#3F5D45" : "#fff")};
  font-weight: ${({ hover }) => (hover ? "bold" : "normal")};
  background: ${({ hover }) => (hover ? "#FFE180" : "#3f5d45")};
  transition: all 0.5s ease-in-out;
`;
