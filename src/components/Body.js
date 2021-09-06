import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import remarkGfm from 'remark-gfm';
import { BrowserRouter } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  prism,
  vscDarkPlus,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
  background-color: #ddddddaa;
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

const Br = styled.br`
  font-size: 1rem;
  margin: 0.125rem 0;
  /* margin-left: 1.25rem; */
  list-style: none;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Text,
  li: List,
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <Code>
        <code className={className} {...props}>
          {children}
        </code>
      </Code>
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
  }, []);

  return (
    <BodyBlock>
      <ReactMarkdown
        source={markdown}
        remarkPlugins={[remarkGfm]}
        parserOptions={{ commonmark: true }}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </BodyBlock>
  );
}

export default BlogBody;
