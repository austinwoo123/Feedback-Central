import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;
  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <Link to="/employees">
          <Button small>Get Started</Button>
        </Link>
        <Marginer direction="horizontal" margin="8px" />
        <Link to="/login">
          <LoginButton medium>Login</LoginButton>
        </Link>
        <Link to="/about">
          <LoginButton medium>About Us</LoginButton>
        </Link>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}

{
  /* <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link> */
}
