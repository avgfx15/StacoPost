import React from 'react';

// | Recent Post Item Component
import RecentPostItem from './RecentPostItem';

// & Recent Posts Component
const RecentPostsComponent = () => {
  // ^ Render Recent Posts Items
  return (
    <div className='flex flex-col gap-12 mb-5'>
      <RecentPostItem />
      <RecentPostItem />
      <RecentPostItem />
      <RecentPostItem />
      <RecentPostItem />
      <RecentPostItem />
    </div>
  );
};

//~ Recent Post Item Export
export default RecentPostsComponent;
