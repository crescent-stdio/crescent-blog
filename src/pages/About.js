import React from 'react';
import BlogHeader from '../components/common/Header';
import BlogBody from '../components/common/Body';

function About() {
  return (
    <>
      <BlogHeader />
      <BlogBody>
        <h1> About </h1>
        <div>나는 누구? 여긴 어디?🚨</div>
      </BlogBody>
    </>
  );
}

export default About;
