import React from 'react';

// | Recent Post Item Component
import RecentPostItem from './RecentPostItem';

// | Import TanStackQuery
import { useQuery } from '@tanstack/react-query';
import { fetchAllPostsAction } from '../Actions/PostActions';

// & Recent Posts Component
const RecentPostsComponent = () => {
  // ` Configure TanStack Query For Data
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetchAllPostsAction(),
  });
  console.log(data);
  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

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
