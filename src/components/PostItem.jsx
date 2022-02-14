import React from 'react';

export const PostItem = ({index, post, deletePost}) => {
  return(
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
  </div>
  );
};
