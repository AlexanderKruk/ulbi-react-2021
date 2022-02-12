import React, { useState } from 'react';
import { MyButton } from "./ui/MyButton/MyButton";
import { MyInput } from "./ui/MyInput/MyInput";

export const PostForm = ({addPost}) => {

  const [post, setPost] = useState({ title: "", description: "" });

  return (
    <>
      <MyInput
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Description"
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />
      <MyButton onClick={(e) => addPost(e, post)}>Create post</MyButton>
    </>
  );
};
