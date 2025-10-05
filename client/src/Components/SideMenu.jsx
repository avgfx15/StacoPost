import React from 'react';
import SearchComponent from './SearchComponent';
import MainCategoriesNav from './MainCategoriesNav';
import CategoriesComponent from './CategoriesComponent';

const SideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-8'>
      <h1 className='mb-4 text-sm font-medium'>Search</h1>
      <SearchComponent />
      <h1 className='mt-4 mb-4 text-sm font-medium'>Filter</h1>
      <div className='flex flex-col gap-3 text-sm'>
        <label className='flex items-center gap-3 cursor-pointer' htmlFor=''>
          <input
            type='radio'
            name='sort'
            value='newest'
            className='appearance-none w-4 h-4 border-[1.5px] border-sky-900 cursor-pointer bg-white checked:bg-sky-900'
          />
          {''}
          Newest
        </label>
        <label className='flex items-center gap-3 cursor-pointer' htmlFor=''>
          <input
            type='radio'
            name='sort'
            value='mostpopular'
            className='appearance-none w-4 h-4 border-[1.5px] border-sky-900 cursor-pointer bg-white checked:bg-sky-900'
          />
          {''}
          Most Popular
        </label>
        <label className='flex items-center gap-3 cursor-pointer' htmlFor=''>
          <input
            type='radio'
            name='sort'
            value='trending'
            className='appearance-none w-4 h-4 border-[1.5px] border-sky-900 cursor-pointer bg-white checked:bg-sky-900'
          />{' '}
          Trending
        </label>
        <label className='flex items-center gap-3 cursor-pointer' htmlFor=''>
          <input
            type='radio'
            name='sort'
            value='oldest'
            className='appearance-none w-4 h-4 border-[1.5px] border-sky-900 cursor-pointer bg-white checked:bg-sky-900'
          />{' '}
          Oldest
        </label>
      </div>
      <h1 className='mt-4 mb-4 text-sm font-medium'>Categories</h1>
      <CategoriesComponent />
    </div>
  );
};

export default SideMenu;
