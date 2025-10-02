import React from 'react';
import { NavLink } from 'react-router';

const MainCategoriesNav = () => {
  return (
    <div className='hidden md:flex items-center justify-center rounded-2xl md:rounded-full bg-white p-4 shadow-lg gap-8'>
      {/* CATEGORIES NAV LINKS */}
      <div className='flex-1 flex items-center justify-between flex-wrap'>
        <NavLink
          to='/posts'
          className='bg-blue-900 text-white px-4 py-2 rounded-full'
        >
          All Posts
        </NavLink>
        <NavLink
          to='/posts?category=webdevelopment'
          className='hover:bg-blue-50 px-4 py-2 rounded-full'
        >
          Web Development
        </NavLink>
        <NavLink
          to='/posts?category=webdesign'
          className='hover:bg-blue-50 px-4 py-2 rounded-full'
        >
          Web Design
        </NavLink>
        <NavLink
          to='/posts?category=datascience'
          className='hover:bg-blue-50 px-4 py-2 rounded-full'
        >
          Data Science
        </NavLink>
        <NavLink
          to='/posts?category=database'
          className='hover:bg-blue-50 px-4 py-2 rounded-full'
        >
          Database
        </NavLink>
        <NavLink
          to='/posts?category=searchengine'
          className='hover:bg-blue-50 px-4 py-2 rounded-full'
        >
          Search Engine
        </NavLink>
      </div>

      {/* SEARCH */}
      <div className=''>Search</div>
    </div>
  );
};

export default MainCategoriesNav;
