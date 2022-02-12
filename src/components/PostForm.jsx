import React, { useState } from 'react';
import { Button } from "./ui/Button/Button";
import { Input } from "./ui/Input/Input";

export const PostForm = ({addPost}) => {

  const [post, setPost] = useState({ title: "", description: "" });

  return (
    <>
      <Input
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Description"
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />
      <Button onClick={(e) => addPost(e, post)}>Create post</Button>
    </>
  );
};
