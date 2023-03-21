import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const NavContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 42px;
  color: #3f5d45;
`;

export const LogoImg = styled.img`
  height: 40px;
`;

export const MobileIcon = styled(FaBars)`
  width: 24px;
  height: 24px;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  width: 24px;
  height: 24px;
  display: none;
  cursor: pointer;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const LogoLink = styled(Link)`
  background: #fff;
`;

export const RightWrapper = styled.div`
  /* border: 1px solid #000; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: unset;
  }
`;

export const NavMenu = styled.ul`
  max-width: 70%;
  /* border: 1px solid #000; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-left: 0;

  @media screen and (max-width: 768px) {
    display: none;
    width: unset;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  list-style: none;
  text-align: center;
  width: 100px;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  color: #3f5d45;
  text-decoration: none;
`;

export const CartIconWrapper = styled(Link)`
  cursor: pointer;
  color: #3f5d45;
`;

export const CartIcon = styled(FaShoppingCart)`
  width: 24px;
  height: 24px;
`;
