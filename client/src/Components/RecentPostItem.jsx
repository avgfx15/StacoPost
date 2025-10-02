import React from 'react';

// | Import Component
import ImageComponent from './ImageComponent';

// | Import Dependency
import { NavLink } from 'react-router';

// & Recent Post Item Component
const RecentPostItem = () => {
  // ^ Render Recent Post Item
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      <div className='xl:w-2/5 md:hidden xl:block'>
        <ImageComponent
          src='/Logo.png'
          alt='Logo Img'
          width='700'
          className='rounded-3xl object-cover aspect-video'
        />
      </div>
      {/* TITLE */}
      <div className='xl:w-3/5 flex flex-col gap-4'>
        <NavLink
          to='/test'
          className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, ullam.
        </NavLink>
        <div className='flex items-center gap-4 text-sm lg:text-base text-gray-400'>
          <span>Written By</span>
          <NavLink className='text-sky-600'>Stacodev</NavLink>
          <span>on</span>
          <NavLink className='text-sky-600'>Web Development</NavLink>
          <span>5 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
          fuga commodi consectetur ipsa amet, id totam deserunt, soluta
          quibusdam nam quis omnis quidem facilis voluptatum?
        </p>
        <NavLink className='text-sky-600 underline text-sm'>Read More</NavLink>
      </div>
    </div>
  );
};

// ~ Recent Post Item Export
export default RecentPostItem;
