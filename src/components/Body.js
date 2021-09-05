import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import remarkGfm from 'remark-gfm';

const BodyBlock = styled.div`
  margin: 2.5% 10% 5%;
  @media only screen and (max-width: 768px) {
    margin: 2.5% 4.75%;
  }

  li:before {
    content: '- ';
  }
  a {
    font-weight: bold;
  }
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin: 1rem 0;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const H2 = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const H3 = styled.h3`
  font-weight: bold;  
  font-size: 1.25rem;
  margin: 0.5rem 0 0.125rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 0.125rem 0;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const List = styled.li`
  font-size: 1rem;
  margin: 0.125rem 0;
  /* margin-left: 1.25rem; */
  list-style: none;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Code = styled.code`
  border-radius: 4px;
  background-color: #DDDDDD;
  color: #f05454;
  font-size: 1rem;
  font-weight: bold;
  margin: 0.125rem 0;
  padding: 0 0.125rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Quote = styled.div`
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  margin: 0.125rem 0;
  background-color: #333333;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

function BlogBody(props) {
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`../post/${props.name}.md`)
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
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          options={{
            overrides: {
              h1: { component: H1 },
              h2: { component: H2 },
              h3: { component: H3 },
              p: { component: Text },
              li: { component: List },
              code: { component: Code },
              quote: { component: Quote },
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
