import React from 'react';

import { IoIosSave } from 'react-icons/io';

import { RiDeleteBin6Fill } from 'react-icons/ri';

const PostMenuActionsComponent = () => {
  return (
    <div className='flex flex-col gap-5 my-5'>
      <h1 className='font-bold'>Actions</h1>
      <div className='flex items-center gap-3 cursor-pointer'>
        <IoIosSave className='text-3xl text-gray-600' />
        <span>Save this post</span>
      </div>
      <div className='flex items-center gap-3 cursor-pointer'>
        <RiDeleteBin6Fill className='text-3xl text-red-600' />
        <span>Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuActionsComponent;
