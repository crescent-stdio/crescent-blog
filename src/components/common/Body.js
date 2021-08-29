import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';


const BodyBlock = styled.div`
  margin: 0.5rem 4rem;
  @media only screen and (max-width: 768px) {
    margin: 0.5rem 1rem;
  }
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  margin: 0.75rem 0;
`;

const H2 = styled.h1`
  font-size: 2rem;
  margin: 0.5rem 0;

`;
const H3 = styled.h1`
  font-size: 1.5rem;
  margin: 0.5rem 0 0.15rem;
`;

const Text = styled.h1`
  font-size: 1.75rem;
`;
function BlogBody(props) {
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`../../pages/${props.name}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });
  return (
    <>
      <BodyBlock>
        <Markdown
          options={{
            overrides: {
              h1: { component: H1 },
              h2: { component: H2 },
              h3: {component: H3},
              text: { component: Text },
              list: {component: Text},
            },
          }}
        >
          {post}
        </Markdown>
      </BodyBlock>
    </>
  );
}

export default BlogBody;
