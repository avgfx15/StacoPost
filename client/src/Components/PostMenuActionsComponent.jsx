import { useAuth, useUser } from '@clerk/clerk-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';

import { IoIosSave } from 'react-icons/io';

import { IoSaveOutline } from 'react-icons/io5';

import { RiDeleteBin6Fill } from 'react-icons/ri';
import {
  deletePostByAuthorAction,
  fetchAllSavedPostsAction,
  userSaveOrUnSavePostAction,
} from '../Actions/PostActions';

import { useNavigate } from 'react-router';

import { toast } from 'react-toastify';
import { SignInButton } from '@clerk/clerk-react';

// & Post Menu Actions Component
const PostMenuActionsComponent = ({ post }) => {
  const { user } = useUser();

  const { getToken } = useAuth();

  const navigate = useNavigate();

  // @ Check user is Admin or not
  const isAdmin = user?.publicMetadata?.role === 'admin' || false;

  // Fetch saved posts to check if the current post is already saved;

  // / Get Saved Posts Query
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
    enabled: !!user && !!getToken, // Only run if user is logged in and token is available
  });
  const isPostSaved = savedposts?.savedPosts?.includes(post._id) || false;

  // - Delete Post by Author Mutation
  const deletePostByAuthorMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return deletePostByAuthorAction(post._id, token);
    },
    onSuccess: () => {
      toast.success('Post deleted successfully');
      navigate('/');
    },
    onError: (error) => {
      toast.error('Error deleting post: ' + error.message);
    },
  });

  const queryClient = useQueryClient();

  // + saved or unSaved Post Mutation
  const saveOrUnSavePostMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return userSaveOrUnSavePostAction(post._id, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['savedposts']);
      toast.success('Post Saved or Unsaved successfully');
    },
    onError: (error) => {
      toast.error('Error for save or unsave post: ' + error.message);
    },
  });

  // $ Handle Delete Post
  const handleDeletePost = () => {
    if (prompt('Are you sure you want to delete this post?')) {
      deletePostByAuthorMutation.mutate();
    }
  };

  // $ Handle Delete Post
  const handleSaveOrUnSavePost = () => {
    saveOrUnSavePostMutation.mutate();
  };

  // ^ Render Post Menu Actions Component
  return (
    <div className='flex flex-col gap-5 my-5'>
      <h1 className='font-bold'>Actions</h1>
      {user ? (
        <>
          {isPending ? (
            'Loading...'
          ) : error ? (
            'Error to fetching saved posts'
          ) : (
            <div
              className='flex items-center gap-3 cursor-pointer'
              onClick={handleSaveOrUnSavePost}
            >
              {isPostSaved ? (
                <IoIosSave className='text-3xl text-gray-600' />
              ) : (
                <IoSaveOutline className='text-3xl text-gray-600' />
              )}

              <span>Save this post</span>
            </div>
          )}
          {user && (user?.username === post?.author?.username || isAdmin) && (
            <div
              className='flex items-center gap-3 cursor-pointer'
              onClick={handleDeletePost}
            >
              <RiDeleteBin6Fill className='text-3xl text-red-600' />
              <span>Delete this post</span>
              {deletePostByAuthorMutation.isPending && (
                <span className='pl-3 text-red-700'>Deleting...</span>
              )}
            </div>
          )}
        </>
      ) : (
        <div className='flex flex-col gap-3'>
          <SignInButton mode='modal'>
            <button className='flex items-center gap-3 cursor-pointer'>
              <IoSaveOutline className='text-3xl text-gray-600' />
              <span>Save this post</span>
            </button>
          </SignInButton>
          <SignInButton mode='modal'>
            <button className='flex items-center gap-3 cursor-pointer'>
              <RiDeleteBin6Fill className='text-3xl text-red-600' />
              <span>Delete this post</span>
            </button>
          </SignInButton>
        </div>
      )}
    </div>
  );
};

export default PostMenuActionsComponent;
