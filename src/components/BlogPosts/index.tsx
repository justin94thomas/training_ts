import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import BlogList from './BlogLists';
import CreateBlog from './CreateBlog';
import './styles.css';

const BlogPosts: React.FC = () => {
  const posts = useSelector((state: RootState) => state.blog.posts);
  return (
    <div className="blog-container">
      <h1 data-testid="blog-post">Blog Posts</h1>
      <div className='blog-content'>
      <BlogList posts={posts} />
      <CreateBlog />
      </div>
    </div>
  );
};

export default BlogPosts;
