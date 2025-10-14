import React from 'react';
import { NavLink } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchAllCategoriesAction } from '../Actions/PostActions';

const CategoriesComponent = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchAllCategoriesAction,
  });

  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <div className='flex flex-col gap-2 text-sm'>
      <NavLink
        to='/posts'
        className='hover:bg-blue-50 px-4 py-2 rounded-full underline'
      >
        All Posts
      </NavLink>
      {categories?.map((category) => (
        <NavLink
          key={category._id}
          to={`/posts?category=${category.slug}`}
          className='hover:bg-blue-50 px-4 py-2 rounded-full underline'
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoriesComponent;
