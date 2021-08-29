import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import BlogHeader from '../components/common/Header';
import BlogBody from '../components/common/Body';
import infoText from './info.md';

function Home() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(infoText)
      .then(res => res.text())
      .then(text => setMarkdown(text));
  }, []);

  return (
    <>
      <BlogHeader />
      <BlogBody>
        <h1> Main </h1>
        <div>이상향 속 이상함을 추구 🔮</div>
        <ReactMarkdown source={markdown} />
      </BlogBody>
    </>
  );
}

export default Home;
