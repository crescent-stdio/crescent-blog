import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BlogHeader from '../components/Header';
import postlist from '../pages/postlist.json';
// import BlogFooter from '../components/Footer';

const BodyBlock = styled.div`
  margin: 2rem 6rem;

  @media only screen and (max-width: 768px) {
    margin: 2rem 1rem;
  }
`;

const Space = styled.div`
  min-height: calc(100vh - 10rem);
  margin: 0rem auto -5rem;

  @media only screen and (max-width: 768px) {
    margin: 2rem 1rem;
  }
`;

const Post = styled.div`
  display: flex;
  margin: 1rem 0;
  .links:hover {
    color: #f05454;
  }
  a {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    a {
      font-size: 1.25rem;
    }
  }
`;
const Date = styled.small`
  height: 1rem;
  font-size: 0.875rem;
  margin-left: 0.25rem;
  color: #999;
`;

function Postlist() {
  return (
    <>
      <BlogHeader />
      <BodyBlock>
        {postlist.length &&
          // JSON.stringify(postlist).map(post => {
          postlist.reverse().map((post, key) => {
            return (
              <Post>
                <Link className="links" to={`../post/${post.name}`}>
                  {key + 1}
                  {'. '}
                  {post.title}
                  <Date className="links">{post.date}</Date>
                </Link>
              </Post>
            );
          })}
      </BodyBlock>
      <Space />
      {/* <BlogFooter/> */}
    </>
  );
}

export default Postlist;
