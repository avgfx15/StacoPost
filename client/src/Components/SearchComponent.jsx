import React from 'react';

const SearchComponent = () => {
  return (
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
  );
};

export default SearchComponent;
