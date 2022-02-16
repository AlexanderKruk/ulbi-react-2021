import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { PostService } from '../api/PostService'

export const Post = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [postFetch, isLoading, error] = useFetching(async (id) => {
    const response =  await PostService.getOne(id)
    setPost(response.data)
  })

  useEffect(() => {
    postFetch(params.id)
  }, [])

  return (
    <div>
      <h1>Post with id: {params.id}</h1>
      <p>{post.body}</p>
    </div>
  );
};
