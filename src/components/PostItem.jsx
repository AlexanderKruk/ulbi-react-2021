import React from 'react';

export const PostItem = ({index, post, deletePost}) => {
  return(
    <div className="post">
      <div className="post__content">
        <strong>{index + 1}. {post.title}</strong>
        <div>{post.description}</div>
      </div>
      <div className="post__btns">
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
  </div>
  );
};
