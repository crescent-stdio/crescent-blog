import React from 'react';
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown';

const MarkdownStyle = styled.div`
  font-size: 1rem;
  line-height: 2.5rem;
`;

function MarkdownRenderer() {
  return (
    <MarkdownStyle>
      <ReactMarkdown></ReactMarkdown>
    </MarkdownStyle>
  );
}
export default MarkdownRenderer;
