import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './style.css';

const HeaderBlock = styled.div`
  top: 0;
  left: 0;

  padding : 5% 5%;   
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    height: 5rem;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  height: 2rem;
  @media only screen and (max-width: 768px) {
    height: 2rem;
  }
`;

const Menu = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  a {
    display: block;
    font-size: 1.375rem;
    text-decoration: none;
    font-weight: bold;
    color: inherit;
    &:hover {
      color: #f05454;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
  a:first-child {
    margin-right: 2rem;
    @media only screen and (max-width: 768px) {
      margin-right: 1.5rem;
    }
  }
`;

function BlogHeader() {
  return (
    <>
      <HeaderBlock>
        <Logo>
          <Link to="/">
            <Icon src={logo} alt="logo with crescent" />
          </Link>
        </Logo>
        <Menu>
          <Link to="/post">Post</Link>
          <Link to="/about">About</Link>
        </Menu>
      </HeaderBlock>
    </>
  );
}

export default BlogHeader;
