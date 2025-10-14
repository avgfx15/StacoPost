import React from 'react';
import { NavLink } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchAllCategoriesAction } from '../Actions/PostActions';

// & Main Categories Navbar Component
const MainCategoriesNav = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchAllCategoriesAction,
  });

  // ^ Render Main Categories Component
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
        {!isLoading &&
          categories?.slice(0, 5).map((category) => (
            <NavLink
              key={category._id}
              to={`/posts?category=${category.slug}`}
              className='hover:bg-blue-50 px-4 py-2 rounded-full'
            >
              {category.name}
            </NavLink>
          ))}
      </div>
      {/* DIVIDER LINE */}
      <span className='text-xl font-medium'>|</span>

      {/* SEARCH */}
      <div className='bg-sky-100 text-sky-900 p-2 rounded-full flex items-center gap-2'>
        <svg
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
        </svg>
        <input
          type='text'
          placeholder='Search'
          className='bg-transparent outline-none'
        />
      </div>
    </div>
  );
};

// ~ Export Main Categories Nav Component
export default MainCategoriesNav;
