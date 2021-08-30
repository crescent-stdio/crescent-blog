import React from 'react';
import BlogHeader from '../components/Header';
import BlogBody from '../components/Body';
import BlogFooter from '../components/Footer';

function About() {
  return (
    <>
      <BlogHeader />
      <BlogBody name='about'>
      </BlogBody>
      <BlogFooter/>
    </>
  );
}

export default About;
