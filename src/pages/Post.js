import React from 'react';
import styled from 'styled-components';
import BlogHeader from '../components/Header';
import BlogBody from '../components/Body';
import Comments from '../components/Comment';
import BlogFooter from '../components/Footer';

const Space = styled.div`
  /* width: 100%; */
  /* height: 5rem; */
  margin: 12.5% 10% 0%;
  padding: 0 0;

  @media only screen and (orientation: landscape) {
    margin: 12.5% 25% 0%;
  }
  @media only screen and (max-height: 1080px) {
    margin: 12.5% 10% 0%;
  }
  @media only screen and (orientation: portrait) {
    margin: 12.5% 4.75% 0%;
  }
  @media only screen and (max-width: 1080px) {
    margin: 12.5% 4.75% 0%;
  }
  .utterances {
    max-width: 100% !important;
  }
`;

function Post({ match }) {
  return (
    <>
      <BlogHeader />
      <BlogBody name={match.params.id}></BlogBody>
      <Space>
        <Comments />
      </Space>
      <BlogFooter />
    </>
  );
}

export default Post;
