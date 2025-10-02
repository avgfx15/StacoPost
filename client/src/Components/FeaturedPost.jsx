import React from 'react';

// | Image Component
import ImageComponent from './ImageComponent';
import { NavLink } from 'react-router';

// & Featured Post Component

const FeaturedPost = () => {
  // ^ Render Featured Post Component
  return (
    <div className='mt-2 flex flex-col lg:flex-row gap-8'>
      {/* MOST RECENT POST OR FIRST POST FROM FEATURED POST */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        {/* IMAGE */}
        <ImageComponent
          src='/Logo.png'
          alt='Post Image'
          className='w-full rounded-3xl object-cover'
        />
        {/* DETAILS */}
        <div className='flex items-center gap-4'>
          <h1 className='text-lg font-semibold'>01.</h1>
          <NavLink className='text-sky-600 lg:text-lg'>Web Design</NavLink>
          <sapn className='text-gray-500'>2 days ago</sapn>
        </div>
        {/* TITLE */}
        <NavLink
          to='/test'
          className='text-lg lg:text-3xl font-semibold lg:font-bold'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, error
          rem! Repellendus recusandae porro dicta, doloribus sit provident!
          Nostrum est porro debitis eligendi animi provident?
        </NavLink>
      </div>
      {/* REST FEATURED POST */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        {/* SECOND POST */}
        <div className='lg:h-1/3 flex justify-between gap-4'>
          <ImageComponent
            src='/Logo.png'
            alt='Logo Img'
            className='w-1/3 rounded-3xl object-cover aspect-video'
          />
          <div className='w-2/3'>
            <div className='flex items-center gap-4 text-sm lg:text-base mb-3'>
              <h1 className='font-semibold'>02.</h1>
              <NavLink className='text-sky-600'>Web Design</NavLink>
              <sapn className='text-gray-500'>2 days ago</sapn>
            </div>
            {/* TITLE */}
            <NavLink
              to='/test'
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              error rem! Repellendus recusandae porro dicta.
            </NavLink>
          </div>
        </div>
        {/* THIRD POST */}
        <div className='lg:h-1/3 flex justify-between gap-4'>
          <ImageComponent
            src='/Logo.png'
            alt='Logo Img'
            className='w-1/3 rounded-3xl object-cover aspect-video'
          />
          <div className='w-2/3'>
            <div className='flex items-center gap-4 text-sm lg:text-base mb-3'>
              <h1 className='font-semibold'>03.</h1>
              <NavLink className='text-sky-600'>Web Development</NavLink>
              <sapn className='text-gray-500'>5 days ago</sapn>
            </div>
            {/* TITLE */}
            <NavLink
              to='/test'
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              dolores?
            </NavLink>
          </div>
        </div>
        {/* FORTH POST */}
        <div className='lg:h-1/3 flex justify-between gap-4'>
          <ImageComponent
            src='/Logo.png'
            alt='Logo Img'
            className='w-1/3 rounded-3xl object-cover aspect-video'
          />
          <div className='w-2/3'>
            <div className='flex items-center gap-4 text-sm lg:text-base mb-3'>
              <h1 className='font-semibold'>04.</h1>
              <NavLink className='text-sky-600'>Data Science</NavLink>
              <sapn className='text-gray-500'>1 week ago</sapn>
            </div>
            {/* TITLE */}
            <NavLink
              to='/test'
              className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              ullam.
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
