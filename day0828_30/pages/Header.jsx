// Header.jsx
import { ROUTE } from 'Route';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const Login= styled.div`
    text-align  : right;
`;

const Header = () => {
  const navigate =  useNavigate();
  return (
    <HeaderContainer>
      <Logo>MyApp</Logo>
      <Navigation>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#information">Information</NavLink>
      </Navigation>
      <Login>
        
        <button onClick={()=>navigate(ROUTE.LOGINFORM)}>로그인</button>
        홍길동님 반갑습니다. <button>로그아웃</button>
      
      </Login>  
    </HeaderContainer>
  );
};

export default Header;