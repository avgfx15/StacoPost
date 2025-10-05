import { useUser } from '@clerk/clerk-react';
import React, { useState } from 'react';
import ReactQuillComponent from '../Components/ReactQuillComponent';

// & Write Post Component

const WritePage = () => {
  // @ Declare values for ReactQuill components
  const [titleValue, setTitleValue] = useState('<h1><strong></strong></h1>');
  const [descValue, setDescValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    subTitle: '',
    content: '',
  });

  // 1. Define the whitelist for Quill (must match the names used in SCSS)
  const CUSTOM_FONT_NAMES = [
    'CascadiaCode',
    'GoogleSansCode',
    'IBMPlexMono',
    'Lato',
    'MontserratAlternates',
    'Raleway',
    'Roboto',
    'Rubik',
    'Sixtyfour',
    'SofiaSans',
  ];

  // Define modules for different editors
  const titleModules = {
    toolbar: [[{ font: CUSTOM_FONT_NAMES }], [{ header: 1 }], ['bold']],
  };
  const descModules = {
    toolbar: [
      [{ font: CUSTOM_FONT_NAMES }],
      [{ header: 2 }],
      ['bold', 'italic', 'underline', 'strike'],
    ],
  };

  // @ useris Logged In or Not Getting value from Clark
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className=''>Loading</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className=''>Please Sign In first</div>;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // ^ Render Write New Post Component
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-5'>
      <h1 className='text-xl font-light'>Create A New Post</h1>
      <form
        className='flex flex-col gap-5 flex-1 mb-5'
        onSubmit={handleFormSubmit}
      >
        <button className='w-max p-2 rounded-xl text-sm shadow-md text-gray-500 bg-white'>
          Add A Cover Image
        </button>
        <div className='flex flex-col justify-start mb-3'>
          <label htmlFor='title' className='text-xl mb-3'>
            Title
          </label>
          <ReactQuillComponent
            modules={titleModules}
            value={titleValue}
            onChange={(v) => {
              setTitleValue(v);
              setFormData({ ...formData, title: v });
            }}
            className='title-editor text-4xl outline-none font-semibold bg-sky-100 rounded-xl p-3'
            placeholder='My Awesome Story Title...'
          />
        </div>
        <div className='flex items-center gap-3'>
          <label htmlFor='category' className='text-sm'>
            Choose a category :{' '}
          </label>
          <div className='relative'>
            <select
              name='category'
              id='category'
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
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
        </div>
        <div className='flex flex-col mb-3'>
          <label htmlFor='title' className='text-xl mb-3'>
            Sub Title
          </label>
          <ReactQuillComponent
            modules={descModules}
            value={descValue}
            onChange={(v) => {
              setDescValue(v);
              setFormData({ ...formData, subTitle: v });
            }}
            className='subTitle-editor p-4 rounded-xl shadow-md bg-purple-100'
            placeholder='A Sub Title For Post...'
          />
        </div>
        <ReactQuillComponent
          value={contentValue}
          onChange={(v) => {
            setContentValue(v);
            setFormData({ ...formData, content: v });
          }}
          className='flex-1 rounded-xl shadow-md bg-white p-3'
        />
        <button
          type='submit'
          className='py-2 px-3 w-28 bg-sky-800 text-white rounded-xl font-medium my-3'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default WritePage;
