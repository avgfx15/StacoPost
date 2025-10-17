import React from 'react';

// | Import Component
import ImageComponent from './ImageComponent';

// | Import NavLink
import { NavLink } from 'react-router';

// | Import Dependency
import { format } from 'timeago.js';

// & Single Comment Component

const SingleCommentComponent = ({ comment }) => {
  // ^ Render Single Comment Component
  return (
    <div className='p-4 bg-sky-100 rounded-xl'>
      <div className='flex items-center gap-3 mb-3'>
        <ImageComponent
          src={comment.commentUser?.profileImage}
          alt='User'
          className='h-10 w-10 rounded-full'
          width='24'
          height='24'
        />
        <NavLink className='text-sky-800 font-bold capitalize'>
          {comment.commentUser.username}
        </NavLink>
        <p className='text-base text-gray-500'>{format(comment?.createdAt)}</p>
      </div>
      <p className='ml-10'>{comment.commentDesc}</p>
    </div>
  );
};

export default SingleCommentComponent;
