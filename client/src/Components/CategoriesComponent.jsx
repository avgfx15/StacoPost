import React from 'react';
import { NavLink } from 'react-router';

const CategoriesComponent = () => {
  return (
    <div className='flex flex-col gap-2 text-sm'>
      <NavLink
        to='/posts'
        className='hover:bg-blue-50 px-4 py-2 rounded-full underline'
      >
        All Posts
      </NavLink>
      <NavLink
        to='/posts?category=webdevelopment'
        className='hover:bg-blue-50 px-4 py-2 rounded-full underline'
      >
        Web Development
      </NavLink>
      <NavLink
        to='/posts?category=webdesign'
        className='hover:bg-blue-50 px-4 py-2 rounded-full underline'
      >
        Web Design
      </NavLink>
      <NavLink
        to='/posts?category=datascience'
        className='hover:bg-blue-50 px-4 py-2 rounded-full underline'
      >
        Data Science
      </NavLink>
      <NavLink
        to='/posts?category=database'
        className='hover:bg-blue-50 px-4 py-2 rounded-full underline'
      >
        Database
      </NavLink>
      <NavLink
        to='/posts?category=searchengine'
        className='hover:bg-blue-50 px-4 py-2 rounded-full underline'
      >
        Search Engine
      </NavLink>
    </div>
  );
};

export default CategoriesComponent;
