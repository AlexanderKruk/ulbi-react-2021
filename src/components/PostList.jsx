import React from 'react';
import { PostItem } from './PostItem';

export const PostList = ({posts, title ,deletePost}) => {
  return(
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem key={post.id} post={post} index={index} deletePost={deletePost} />
      ))}
    </>
  );
};
