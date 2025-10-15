import React from 'react';
import ImageComponent from '../Components/ImageComponent';
import { NavLink, useParams } from 'react-router';

import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import PostMenuActionsComponent from '../Components/PostMenuActionsComponent';
import SearchComponent from '../Components/SearchComponent';
import CommentsComponent from '../Components/CommentsComponent';
import CategoriesComponent from '../Components/CategoriesComponent';
import { useQuery } from '@tanstack/react-query';
import { fetchSinglePostAction } from '../Actions/PostActions';
import { format } from 'timeago.js';

// & Single Post Page Component
const SinglePostPage = () => {
  // Get slug from URL params
  const { slug } = useParams();

  // Fetch post data using the slug

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchSinglePostAction(slug),
    enabled: !!slug, // Only run the query if slug is available
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  if (!data) return <div>No post found</div>;

  const post = data;

  // ^ Render Single Post Page
  return (
    <div className='flex flex-col gap-8'>
      {/* DETAILS */}
      <div className='flex gap-8'>
        {/* TEXT */}
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold'>
            <p dangerouslySetInnerHTML={{ __html: post?.postTitle }}></p>
          </h1>
          <div className='flex gap-2 text-gray-400'>
            <span>Written By</span>
            <NavLink className='text-sky-600 capitalize'>
              {post?.author?.username || 'Stacodev'}
            </NavLink>
            <span>on</span>
            <NavLink className='text-sky-600'>
              {post?.category?.name || 'General'}
            </NavLink>
            <span>{format(post?.createdAt)}</span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: post?.subTitle }}></p>
        </div>
        {/* IMAGE */}
        <div className='hidden lg:block w-2/5 aspect-video'>
          <ImageComponent
            src={post?.postImage}
            alt='Logo Img'
            width='800'
            height='600'
            className='rounded-3xl object-cover'
          />
        </div>
      </div>
      {/* CONTENT */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* TEXT */}
        <div
          className='flex flex-col gap-4 lg:text-lg text-justify w-9/12'
          dangerouslySetInnerHTML={{ __html: post?.content }}
        ></div>
        {/* SIDE MENU */}
        <div className='px-4 h-max sticky top-8 w-3/12 gap-4'>
          <h1>Author</h1>
          <div className=''>
            <div className='flex items-center gap-5 mb-3'>
              <ImageComponent
                src={post?.author?.profileImage}
                alt='User'
                className='h-12 w-12 rounded-full'
                width='48'
                height='48'
              />
              <NavLink className='capitalize'>
                {post?.author?.username || 'Stacodev'}
              </NavLink>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex gap-4 my-3'>
              <NavLink>
                <FaFacebook className='text-3xl' />
              </NavLink>
              <NavLink>
                <FaLinkedin className='text-3xl' />
              </NavLink>
              <NavLink>
                <FaInstagram className='text-3xl' />
              </NavLink>
            </div>
            <PostMenuActionsComponent />
            <h1 className='mb-3 font-bold'>Categories</h1>
            <CategoriesComponent />
            <h1 className='mb-3 font-bold mt-5'>Search</h1>
            <SearchComponent />
          </div>
        </div>
      </div>
      <CommentsComponent postId={post?._id} />
    </div>
  );
};

export default SinglePostPage;
