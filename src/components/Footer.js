import React from 'react';
import styled from 'styled-components';
import './style.css';

const FooterBlock = styled.div`
  /* top: 100vh; */
  padding : 4rem 4rem 2rem;   
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  color: #F05454;

  @media only screen and (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    height: 5rem;
  }
`;

function BlogFooter() {
  return (
    <>
      <FooterBlock>
      ©2021 Crescent☾
      </FooterBlock>
    </>
  );
}

export default BlogFooter;
