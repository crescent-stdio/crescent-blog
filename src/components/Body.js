import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import Tex2SVG from 'react-hook-mathjax';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import 'katex/dist/katex.min.css';

const BodyBlock = styled.div`
  box-sizing: border-box;
  margin: 2.5% 10% 7.5%;
  padding: 0 0;

  @media only screen and (max-width: 768px) {
    margin: 2.5% 5%;
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
  small {
    float: right;
    font-size: 0.875rem;
    color: #999;
  }
  hr {
    /* margin: 0rem 0 1rem; */
    /* background-color: #222831; */
    border-top: 2px solid #dddddd;
  }
  /* .katex {
    font-size: 24px;
  }*/
  .katex-display > .katex {
    white-space: normal;
  }
  /* Add space between broken lines: */
  .katex-display > .base {
    margin: 0.25em 0;
  }
  /* Compensate by reducing space around display math */
  .katex-display {
    margin: 0.5em 0;
  }
  .ketex-display > vlist {
    /* height: 1em; */
  }
  iframe {
    max-width: 100% !important;
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
    margin: 0.75rem 0 0.25rem;
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
  math({ value }) {
    return <Tex2SVG display="block" latex={value || ''} />;
  },
  inlineMath({ value }) {
    return <Tex2SVG display="inline" latex={value || ''} />;
  },
};

function BlogBody(props) {
  const file = require(`../../public/post/${props.name}/${props.name}.md`).default;

  const [data, setData] = useState('Loading...');
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(file);
      setData(await resp.text());
    }
    fetchData();
  });

  return (
    <BodyBlock>
      <BodyContents>
        <ReactMarkdown
          // children={`$ G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\kappa T_{\\mu\\nu $`}
          children={data}
          components={components}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          // remarkPlugins={[remarkMath]}
          // rehypePlugins={[rehypeKatex]}
          // plugins={[remarkGfm, remarkMath, rehypeKatex, rehypeRaw]}
          // parserOptions={{ commonmark: true }}
          linkTarget={'_blank'}
        />
      </BodyContents>
    </BodyBlock>
  );
}

export default BlogBody;
