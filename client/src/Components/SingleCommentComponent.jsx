import React from 'react';

// | Import Component
import ImageComponent from './ImageComponent';

// | Import NavLink
import { NavLink } from 'react-router';

// | Import Dependency
import { format } from 'timeago.js';

import { useAuth, useUser } from '@clerk/clerk-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteCommentForPostAction } from '../Actions/PostActions';

// & Single Comment Component

const SingleCommentComponent = ({ comment, postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const role = user?.publicMetadata?.role || 'user';

  const queryClient = useQueryClient();

  // - Delete Comment Functionality can be added here
  const deleteCommentMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      // Call delete comment action here with comment id and token

      return deleteCommentForPostAction(comment._id, token);
    },
    onSuccess: () => {
      // Handle success
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
      toast.success('Comment deleted successfully');
    },
    onError: (error) => {
      toast.error('Error deleting comment: ' + error.message);
    },
  });

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
        {user &&
          (comment.commentUser.username === user.username ||
            role === 'admin') && (
            <span
              className='ml-auto text-red-400 hover:text-red-600 cursor-pointer text-sm font-bold'
              onClick={() => deleteCommentMutation.mutate()}
            >
              Delete
              {deleteCommentMutation.isPending && (
                <span className='pl-3 text-red-700'>Deleting...</span>
              )}
            </span>
          )}
      </div>
      <p className='ml-10'>{comment.commentDesc}</p>
    </div>
  );
};

export default SingleCommentComponent;
