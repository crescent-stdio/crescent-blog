import React from 'react';
import BlogHeader from '../components/Header';
import BlogBody from '../components/Body';
import BlogFooter from '../components/Footer.js';

function Home() {
  return (
    <>
      <BlogHeader />
      <BlogBody name='info'>
      </BlogBody>
      <BlogFooter/>
    </>
  );
}

export default Home;
