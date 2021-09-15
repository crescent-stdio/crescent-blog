import React, { useRef, useEffect } from 'react';

//from : https://www.devhak.com/blog/react-add-utterances

const Comments = () => {
  const state = 'light';
  const commentRef = useRef(null);

  const currentTheme = state === 'dark' ? 'photon-dark' : 'github-light';

  useEffect(() => {
    const utterance = document.createElement('script');
    const utteranceConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'crescent-stdio/blog-comments',
      'issue-term': 'pathname',
      theme: currentTheme,
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(utteranceConfig).forEach(([key, value]) => {
      utterance.setAttribute(key, value);
    });

    commentRef.current.appendChild(utterance);
  }, [currentTheme]);
  return <div className="comments" ref={commentRef}></div>;
};

export default Comments;
