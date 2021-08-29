import React from 'react';
import BlogHeader from '../components/common/Header';
import BlogBody from '../components/common/Body';

function Home() {
  return (
    <>
      <BlogHeader />
      <BlogBody name='info.md'>
      </BlogBody>
    </>
  );
}

export default Home;
