import React from 'react';
import SingleCommentComponent from './SingleCommentComponent';

const CommentsComponent = () => {
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
      <SingleCommentComponent />
      <SingleCommentComponent />
      <SingleCommentComponent />
      <SingleCommentComponent />
      <SingleCommentComponent />
      <SingleCommentComponent />
      <SingleCommentComponent />
    </div>
  );
};

export default CommentsComponent;
