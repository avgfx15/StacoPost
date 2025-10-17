import React, { useEffect } from 'react';

// | Import Dependency
import { NavLink } from 'react-router';

// | Import Components
import MainCategoriesNav from '../Components/MainCategoriesNav';
import FeaturedPost from '../Components/FeaturedPost';
import RecentPostsComponent from '../Components/RecentPostsComponent';
import { useAuth } from '@clerk/clerk-react';

// & Home Page Component
const HomePage = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      console.log('Clerk Token:', token);
    };

    fetchToken();
  }, [getToken]);

  // ^ Render Home Page
  return (
    <div className='flex flex-col gap-4'>
      {/* <BreadCrumb /> */}
      <div className='flex gap-4'>
        <NavLink to='/'>Home</NavLink>
        <span>.</span>
        <span className='text-blue-900'>Blogs and Articles</span>
      </div>

      {/* <Introduction /> */}

      <div className='flex items-center justify-center'>
        {/* Titles */}
        <div className=''>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
            nihil!
          </h1>
          <p className='text-gray-500 my-5 text-md md:text-xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ea
            nesciunt debitis dolor totam odit tempora vero obcaecati temporibus
            omnis, sed deserunt maxime non iusto.
          </p>
        </div>
        {/* Animated Button For New Post */}
        <NavLink to='/write' className='hidden md:block relative p-3'>
          <svg
            viewBox='0 0 200 200'
            width='200'
            height='200'
            className='text-lg tracking-widest animate-spin animatedDuration'
          >
            <path
              id='circlePath'
              fill='none'
              d='M100,100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1, 1 -150, 0'
            />
            <text>
              <textPath href='#circlePath' startOffset='50%'>
                Write Your Blog
              </textPath>
              <textPath href='#circlePath' startOffset='0%'>
                Share Your Ideas
              </textPath>
            </text>
          </svg>
          <button className='absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-900 flex items-center justify-center rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              width='50'
              height='50'
              stroke='white'
              strokeWidth='2'
              className='text-lg tracking-widest'
            >
              <line x1='6' y1='18' x2='18' y2='6' />
              <polyline points='9 6 18 6 18 15' />
            </svg>
          </button>
        </NavLink>
      </div>

      {/* <CATEGORIES NAVBAR /> */}

      <MainCategoriesNav />
      {/* <FeaturedPost /> */}

      <FeaturedPost />

      {/* <Recent Post List /> */}

      <div className='flex flex-col gap-4'>
        <h1 className='my-5 text-2xl text-gray-400'>Recent Posts</h1>
        <RecentPostsComponent />
      </div>
    </div>
  );
};

// ~ Home Page Export
export default HomePage;
