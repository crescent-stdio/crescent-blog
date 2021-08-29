import React from 'react';
import BlogHeader from '../components/common/Header';
import BlogBody from '../components/common/Body';

function Blog() {
  return (
    <>
      <BlogHeader />
      <BlogBody name='blog.md'>
      </BlogBody>
    </>
  );
}

export default Blog;
