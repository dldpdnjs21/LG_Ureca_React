// Header.jsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 1rem;
  color: white;
  text-align: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Navigation = styled.nav`
  margin-top: 0.5rem;
`;

const NavLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem;
  
  &:hover {
    text-decoration: underline;
  }
`;


const Header = () => {
  return (
    <HeaderContainer>
      <Logo>MyApp</Logo>
      <Navigation>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#information">Information</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;