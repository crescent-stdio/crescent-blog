import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './style.css';

const HeaderBlock = styled.div`
  top: 0;
  left: 0;
  /* position: fixed; */
  height: 3.5rem;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08); */

  padding: 0.75rem 1.5rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    padding: 0.75rem 1rem;
    height: 2rem;
    font-size: 1vw;
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
    height: 1.2rem;
  }
`;

const Menu = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  a {
    display: block;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;
    color: inherit;
    &:hover {
      color: #f05454;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
  a:first-child {
    margin-right: 1.75rem;
    @media only screen and (max-width: 768px) {
      margin-right: 1rem;
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
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </Menu>
      </HeaderBlock>
    </>
  );
}

export default BlogHeader;
