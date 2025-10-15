import React from 'react';
import SingleCommentComponent from './SingleCommentComponent';

import { useQuery } from '@tanstack/react-query';
import { fetchCommentsByPostIdAction } from '../Actions/PostActions';

const CommentsComponent = ({ postId }) => {
  // Fetch Comments data using the postId
  console.log(postId);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchCommentsByPostIdAction(postId),
    enabled: !!postId, // Only run the query if slug is available
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  if (!data) return <div>No Comments found for this Post!</div>;

  const comments = data;
  console.log(comments);

  return (
    <div className='flex flex-col gap-8 w-9/12'>
      <h1 className='text-lg underline text-gray-600'>Comments</h1>
      <div className='flex items-center justify-between gap-8 w-full'>
        <textarea
          type='text'
          name='comment'
          placeholder='Write your comment'
          className='w-full p-3 rounded-2xl'
        />
        <button className='bg-sky-800 text-white px-4 py-2 rounded-xl font-medium'>
          Send
        </button>
      </div>
      {comments.map((comment) => (
        <SingleCommentComponent key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsComponent;
