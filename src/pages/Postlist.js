import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BlogFooter from '../components/Footer';
import BlogHeader from '../components/Header';
import postlist from '../post/postlist.json';

const BodyBlock = styled.div`
  margin: 2rem 6rem;

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
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    a {
      font-size: 1.5rem;
    }
  }
`;
const Date = styled.small`
  height: 1rem;
  font-size: 1rem;
`;

function Postlist() {
  return (
    <>
      <BlogHeader />
      <BodyBlock>
        {postlist.length &&
          postlist.map((post, i) => {
            return (
              <Post>
                <Link className="links" to={`../post/${post.name}`}>
                  {post.title}
                  <Date className="links">{post.date}</Date>
                </Link>
              </Post>
            );
          })}
      </BodyBlock>
      {/* <BlogFooter/> */}
    </>
  );
}

export default Postlist;
