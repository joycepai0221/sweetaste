import styled from "styled-components";
import { Link } from "react-router-dom";

export const AsideOuterWrapper = styled.div`
  width: 100%;
  position: relative;
  left: 0;
  right: 0;
`;

export const AsideContainer = styled.div`
  width: 100%;
  text-align: center;
  height: ${({ open }) => (open ? "168px" : "0px")};
  transition: height 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background: #fff;
`;

export const AsideOption = styled(Link)`
  text-decoration: none;
  color: #3f5d45;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaf0ed;
  height: 56px;
`;
