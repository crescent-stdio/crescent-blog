import React from 'react';
import BlogHeader from '../components/common/Header';
import BlogBody from '../components/common/Body';

function Blog() {
  return (
    <>
      <BlogHeader />
      <BlogBody>
        <h1> Blog </h1>
        <div>나의 즐거움은 어디까지? 😏</div>
      </BlogBody>
    </>
  );
}

export default Blog;
