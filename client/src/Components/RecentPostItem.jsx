import React from 'react';

import { format } from 'timeago.js';

// | Import Component
import ImageComponent from './ImageComponent';

// | Import Dependency
import { NavLink } from 'react-router';

// & Recent Post Item Component
const RecentPostItem = ({ post }) => {
  // ^ Render Recent Post Item
  return (
    <div className='flex flex-col xl:flex-row gap-8 mb-12'>
      <div className='xl:w-2/5 md:hidden xl:block'>
        <ImageComponent
          src={
            post?.postImage
              ? post?.postImage
              : 'https://ik.imagekit.io/avgfx15/Logo.png?updatedAt=1759289205304'
          } // Placeholder image if no URL provided
          alt='Logo Img'
          width='700'
          className='rounded-3xl object-cover aspect-video'
        />
      </div>
      {/* TITLE */}
      <div className='xl:w-3/5 flex flex-col gap-4'>
        <NavLink
          to={`/posts/${post?.slug}`}
          className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'
        >
          <p dangerouslySetInnerHTML={{ __html: post?.postTitle }}></p>
          <p dangerouslySetInnerHTML={{ __html: post?.subTitle }}></p>
        </NavLink>
        <div className='flex items-center gap-4 text-sm lg:text-base text-gray-400'>
          <span>Written By</span>
          <NavLink
            className='text-sky-600 capitalize'
            to={`/posts?author=${post?.author?.username}`}
          >
            {post?.author?.username || 'Stacodev'}
          </NavLink>
          <span>on</span>
          <NavLink
            className='text-sky-600 capitalize'
            to={`/posts?category=${post?.category?.name}`}
          >
            {post?.category?.name || 'General'}
          </NavLink>
          <span>{format(post?.createdAt)}</span>
        </div>
        <p
          className='line-clamp-3'
          dangerouslySetInnerHTML={{ __html: post?.content }}
        ></p>
        <NavLink
          className='text-sky-600 underline text-sm'
          to={`/posts/${post?.slug}`}
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
};

// ~ Recent Post Item Export
export default RecentPostItem;
