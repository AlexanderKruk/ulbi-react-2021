import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { PostService } from '../api/PostService'
import { Loader } from '../components/ui/Loader/Loader';

export const Post = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [postFetch] = useFetching(async (id) => {
    const response =  await PostService.getOne(id)
    setPost(response.data)
  })

  const [commentsFetch, isLoadingComments] = useFetching(async (id) => {
    const response =  await PostService.getComments(id)
    setComments(response.data)
  })

  useEffect(() => {
    postFetch(params.id)
    commentsFetch(params.id)
  }, [params.id])

  return (
    <div>
      <h1>Post with id: {params.id}</h1>
      <p>{post.body}</p>
      <h2 style={{marginTop: 20}}>Comments</h2>
      {isLoadingComments
        ? <Loader />
        :
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.body} style={{marginTop: 14}}> 
                <h5>{comment.email}</h5>
                <div>{comment.body}</div>
              </div>
            )
          })}
        </div>
    }

    </div>
  );
};
