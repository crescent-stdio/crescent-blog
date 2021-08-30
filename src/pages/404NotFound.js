import React from 'react';
import BlogHeader from '../components/Header';
import BlogBody from '../components/Body';
import BlogFooter from '../components/Footer';

function NotFound() {
  return (
    <>
      <BlogHeader />
      <BlogBody name='404'>
      </BlogBody>
      <BlogFooter/>
    </>
  );
}

export default NotFound;
