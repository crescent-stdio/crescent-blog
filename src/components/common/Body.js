import React from 'react';
import styled from 'styled-components';

const BodyBlock = styled.div`
  margin: 0.5rem 4rem;
  @media only screen and (max-width: 768px) {
    margin: 0.5rem 1rem;
  }
`;

function BlogBody ({children}) {
  return (
    <>
      <BodyBlock>{children}</BodyBlock>
    </>
  );
}

export default BlogBody;