import React from 'react';
import BlogHeader from '../components/Header';
import BlogBody from '../components/Body';

function Post({match}) {
  return (
    <>
      <BlogHeader />
      <BlogBody name = {match.params.id}>
      </BlogBody>
    </>
  );
}

export default Post;
