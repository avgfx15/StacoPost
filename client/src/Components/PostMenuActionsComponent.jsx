import { useAuth, useUser } from '@clerk/clerk-react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { IoIosSave } from 'react-icons/io';

import { IoSaveOutline } from 'react-icons/io5';

import { RiDeleteBin6Fill } from 'react-icons/ri';
import { fetchAllSavedPostsAction } from '../Actions/PostActions';

// & Post Menu Actions Component
const PostMenuActionsComponent = ({ post }) => {
  const { user } = useUser();

  const { getToken } = useAuth();
  // Fetch saved posts to check if the current post is already saved};

  const {
    isPending,
    error,
    data: savedposts,
  } = useQuery({
    queryKey: ['savedposts'],
    queryFn: async () => {
      const token = await getToken();
      return fetchAllSavedPostsAction(token);
    },
  });

  console.log(savedposts);

  const isPostSaved =
    savedposts?.data?.some((savedPost) => savedPost._id === post._id) || false;

  console.log(isPostSaved);

  // ^ Render Post Menu Actions Component
  return (
    <div className='flex flex-col gap-5 my-5'>
      <h1 className='font-bold'>Actions</h1>
      {isPending ? (
        'Loading...'
      ) : error ? (
        'Error to fetching saved posts'
      ) : (
        <div className='flex items-center gap-3 cursor-pointer'>
          {isPostSaved ? (
            <IoIosSave className='text-3xl text-gray-600' />
          ) : (
            <IoSaveOutline className='text-3xl text-gray-600' />
          )}

          <span>Save this post</span>
        </div>
      )}
      {user?.username === post?.author?.username && (
        <div className='flex items-center gap-3 cursor-pointer'>
          <RiDeleteBin6Fill className='text-3xl text-red-600' />
          <span>Delete this post</span>
        </div>
      )}
    </div>
  );
};

export default PostMenuActionsComponent;
