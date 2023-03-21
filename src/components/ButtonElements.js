import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  height: ${({ bigsize }) => (bigsize ? `65px` : `56px`)};
  background: ${({ primary }) => (primary ? "#FFE180" : "#eaf0ed")};
  font-size: 24px;
  padding: ${({ bigsize }) => (bigsize ? "16px auto" : "18px 110px")};
  color: ${({ greenfont }) => (greenfont ? "#3F5D45" : "#8DA291")};
  font-weight: bold;
  font-family: "PingFang TC", sans-serif;
  text-decoration: none;
  margin: 0;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;
