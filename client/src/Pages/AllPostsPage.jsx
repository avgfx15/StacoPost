import React from 'react';
import PostList from '../Components/PostList';
import SideMenu from '../Components/SideMenu';

const AllPostsPage = () => {
  return (
    <div className=''>
      <h1 className='mb-5 text-2xl'>AllPostsPage</h1>
      <div className='flex gap-5'>
        <div className='flex'>
          <PostList />
        </div>
        <div className=''>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default AllPostsPage;
