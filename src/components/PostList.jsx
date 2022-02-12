import React from 'react';
import { PostItem } from './PostItem';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const PostList = ({posts, title ,deletePost}) => {

  if (posts.length < 1) {
    return <h1 style={{ textAlign: "center" }}>Posts not found</h1>
  }

  return(
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition               
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem post={post} index={index} deletePost={deletePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
