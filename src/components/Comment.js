import React, {createRef, useEffect} from 'react';

//from : https://www.devhak.com/blog/react-add-utterances

const Comments = () => {
  const commentRef = createRef();
  
  useEffect(()=>{
    const utterance = document.createElement('script');
    const utteranceConfig = {
      src: "https://utteranc.es/client.js",
      repo: "crescent-stdio/blog-comments",
      'issue-term': "pathname",
      theme: "github-light",
      crossorigin: "anonymous",
      async: "true"
    };
    Object.entries(utteranceConfig).forEach(([key, value]) => {
      utterance.setAttribute(key, value);
    });

    commentRef.current.appendChild(utterance);
  }, []);
  return <div classNAme="comments" ref={commentRef}></div>;

};

export default Comments;