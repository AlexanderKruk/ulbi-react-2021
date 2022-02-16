import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from './ui/Button/Button';

export const PostItem = ({post, deletePost}) => {
  const history = useHistory()
  return(
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => history.push(`/post/${post.id}`)}>Open</Button>
        <Button onClick={() => deletePost(post.id)}>Delete</Button>
      </div>
  </div>
  );
};
