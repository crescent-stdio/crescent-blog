import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import remarkGfm from 'remark-gfm';
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const BodyBlock = styled.div`
  box-sizing: border-box;
  margin: 2.5% 10% 5%;
  padding: 0 0;

  @media only screen and (max-width: 768px) {
    margin: 2.5% 4.75%;
  }
`;

const BodyContents = styled.article`
  /* white-space: pre-line; */
  line-height: 1.75;

  margin: 0 0;
  padding: 0 0;

  li {
    list-style-position: inside;
  }
  ul {
    list-style-type: none;
  }
  ul > li:before {
    content: '- ';
  }
  a {
    font-weight: bold;
  }
  img {
    max-width: 100%;
  }
  code {
    padding: 2px 6px;
  }
  hr {
    margin: 0rem 0 1rem;
  }
`;

const H1 = styled.h1`
  margin: 1rem 0;
  font-weight: bold;
  font-size: 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const H2 = styled.h2`
  margin: 0.75rem 0 0.5rem;

  font-weight: bold;
  font-size: 1.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const H3 = styled.h3`
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0 0;
  margin: 0.75rem 0 0.375rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Text = styled.article`
  font-size: 1rem;
  margin: 0 0;
  margin: 0.125rem 0;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const List = styled.li`
  font-size: 1rem;
  margin: 0.125rem 0;
  /* margin-left: 1.25rem; */
  /* list-style: none; */

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Code = styled.code`
  border-radius: 4px;
  background-color: #f5f2f0;
  color: #f05454;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0;

  /* margin: 0.125rem 0; */
  line-height: 1.2;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Quote = styled.div`
  border-radius: 2px;
  font-size: 1rem;
  /* font-weight: bold; */
  font-style: italic;
  margin: 0 0;
  padding: 1rem;

  margin: 0.125rem 0;
  background-color: #f5f2f0;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

// const Br = styled.br`
//   font-size: 1rem;
//   margin: 0 0;
//   margin: 0.125rem 0;
//   /* margin-left: 1.25rem; */
//   list-style: none;
//   @media only screen and (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

const Ul = styled.ul`
  margin-left: calc(${props => props.depth} * 1rem);
`;
const Ol = styled.ol`
  margin-left: calc(${props => props.depth} * 1rem);
`;

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Text,
  li: List,
  blockquote: Quote,
  ul({ depth, children }) {
    return <Ul depth={depth}>{children || ''}</Ul>;
  },
  ol({ depth, children }) {
    return <Ol depth={depth}>{children || ''}</Ol>;
  },
  code({ inline, className, children }) {
    const language = className?.split('-')[1];
    const code = String(children).replace(/\n$/, '') || '';
    return !inline ? (
      <SyntaxHighlighter language={language} style={prism}>
        {code}
      </SyntaxHighlighter>
    ) : (
      <Code>{code}</Code>
    );
  },
};

function BlogBody(props) {
  const [markdown, setMarkdown] = useState('');

  const file = require(`../post/${props.name}.md`).default;
  useEffect(() => {
    fetch(file)
      .then(res => res.text())
      .then(text => setMarkdown(text));
  }, [file]);

  return (
    <BodyBlock>
      <BodyContents>
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          // remarkPlugins={[remarkMath, remarkGfm]}
          // rehypePlugins={[rehypeKatex]}
          parserOptions={{ commonmark: true }}
          components={components}
          linkTarget={'_blank'}        >
          {markdown}
        </ReactMarkdown>
      </BodyContents>
    </BodyBlock>
  );
}

export default BlogBody;
