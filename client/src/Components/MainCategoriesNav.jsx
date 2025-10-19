import React from 'react';
import { NavLink } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchAllCategoriesAction } from '../Actions/PostActions';
import SearchComponent from './SearchComponent';

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
      <SearchComponent />
    </div>
  );
};

// ~ Export Main Categories Nav Component
export default MainCategoriesNav;
