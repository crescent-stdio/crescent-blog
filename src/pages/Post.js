import React from 'react';
import BlogHeader from '../components/Header';
import BlogBody from '../components/Body';
import Comments from '../components/Comment';

function Post({ match }) {
  return (
    <>
      <BlogHeader />
      <BlogBody name={match.params.id}></BlogBody>
      <Comments />
    </>
  );
}

export default Post;
