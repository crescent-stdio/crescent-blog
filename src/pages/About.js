import React from 'react';
import BlogHeader from '../components/common/Header';
import BlogBody from '../components/common/Body';

function About() {
  return (
    <>
      <BlogHeader />
      <BlogBody name='about.md'>
      </BlogBody>
    </>
  );
}

export default About;
