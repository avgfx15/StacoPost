import { useUser } from '@clerk/clerk-react';
import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const WritePage = () => {
  const [value, setValue] = useState('');

  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className=''>Loading</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className=''>Please Sign In first</div>;
  }
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-5'>
      <h1 className='text-xl font-light'>Create A New Post</h1>
      <form className='flex flex-col gap-5 flex-1 mb-5'>
        <button className='w-max p-2 rounded-xl text-sm shadow-md text-gray-500 bg-white'>
          Add A Cover Image
        </button>
        <input
          type='text'
          placeholder='My Awasome Story...'
          className='text-4xl bg-transparent outline-none font-semibold'
        />
        <div className='flex items-center gap-3'>
          <label htmlFor='category' className='text-sm'>
            Choose a category :{' '}
          </label>
          <select
            name='category'
            id='category'
            className='p-2 rounded-xl shadow-md bg-white'
          >
            <option value='general'>General</option>
            <option value='webdesign'>Web Design</option>
            <option value='webdevelopment'>Web Development</option>
            <option value='datascience'>Data Science</option>
            <option value='database'>Database</option>
            <option value='searchengine'>Searchengine</option>
          </select>
        </div>
        <textarea
          name='description'
          placeholder='A Short Description...'
          className='p-4 rounded-xl shadow-md bg-white'
        />

        <ReactQuill
          theme='snow'
          value={value}
          onChange={setValue}
          className='flex-1 rounded-xl shadow-md bg-white'
        />
        <button className='py-2 px-3 w-28 bg-sky-800 text-white rounded-xl font-medium my-3'>
          Send
        </button>
      </form>
    </div>
  );
};

export default WritePage;
