import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BlogHeader from '../components/Header';
import postlist from '../pages/postlist.json';
// import BlogFooter from '../components/Footer';
import TypeBlock from '../components/Type';

const BodyBlock = styled.div`
  box-sizing: border-box;

  margin: 2.5% 10% 7.5%;
  padding: 0 0;

  @media only screen and (orientation: landscape) {
    margin: 2.5% 25% 7.5%;
  }
  @media only screen and (max-height: 1080px) {
    margin: 2.5% 10% 7.5%;
  }
  @media only screen and (orientation: portrait) {
    margin: 2.5% 5%;
  }
  @media only screen and (max-width: 1080px) {
    margin: 2.5% 5%;
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

postlist.reverse();
function Postlist() {
  const [filterName, setFilterName] = useState('all');
  const [filteredPost, setFilteredPost] = useState(postlist);
  
  useEffect(() => {
    setFilteredPost(postlist);
  }, []);

  useEffect(() => {
    if (filterName === 'all') {
      setFilteredPost(postlist);
    } else {
      setFilteredPost(postlist.filter(post => post.type === filterName));
    }
  }, [filterName]);

  if (!postlist.length) return;

  return (
    <>
      <BlogHeader />
      <BodyBlock>
        <TypeBlock getFilterName={setFilterName} />
        {filteredPost.map(post => {
          return (
            <Post>
              <Link className="links" to={`../post/${post.name}`}>
                {/* {post.key + 1} */}
                {filteredPost.findIndex(idx => idx.name ===post.name)}
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
