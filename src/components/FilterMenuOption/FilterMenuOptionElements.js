import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FilterMenuBlock = styled(NavLink)`
  width: 100%;
  line-height: 65px;
  border: 1px solid #eaf0ed;
  color: #3f5d45;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  background: ${({ changeColor }) => (changeColor ? "#eaf0ed" : "#fff")};
  transition: all 0.2s ease-in-out;
  display: block;
  text-decoration: none;
  &:hover {
    background: #eaf0ed;
  }
`;
