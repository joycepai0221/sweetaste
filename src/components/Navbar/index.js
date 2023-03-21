import React, { useState } from "react";
import Logo from "../../images/logo-all-dark.svg";
import {
  NavContainer,
  CloseIcon,
  MobileIcon,
  LogoLink,
  LogoImg,
  RightWrapper,
  NavMenu,
  NavItem,
  NavLink,
  CartIcon,
  CartIconWrapper,
} from "./NavElements";
import Aside from "../Aside";
// import CartAside from "../CartAside";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <NavContainer>
        {open ? (
          <CloseIcon onClick={toggle} />
        ) : (
          <MobileIcon onClick={toggle} />
        )}
        <LogoLink to="/" exact="true">
          <LogoImg src={Logo} />
        </LogoLink>
        <RightWrapper>
          <NavMenu>
            <NavItem>
              <NavLink to="/" exact="true">
                首頁
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products" exact="true">
                甜點
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signin" exact="true">
                登入
              </NavLink>
            </NavItem>
          </NavMenu>
          <CartIconWrapper to="/shoppingcart" exact="true">
            <CartIcon />
          </CartIconWrapper>
          {/* <CartAside /> */}
        </RightWrapper>
      </NavContainer>
      <Aside open={open} toggle={toggle} />
    </>
  );
};

export default Navbar;
