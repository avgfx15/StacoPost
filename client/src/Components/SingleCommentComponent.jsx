import React from 'react';
import ImageComponent from './ImageComponent';
import { NavLink } from 'react-router';

const SingleCommentComponent = ({ comment }) => {
  console.log(comment.length);

  if (comment.length === 0) {
    return <div>No comment data available</div>;
  }

  return (
    <div className='p-4 bg-sky-100 rounded-xl mb-5'>
      <div className='flex items-center gap-3'>
        <ImageComponent
          src='/Logo.png'
          alt='User'
          className='h-10 w-10 rounded-full'
          width='24'
          height='24'
        />
        <NavLink className='text-sky-800 font-bold'>Stacodev</NavLink>
        <p className='text-base text-gray-500'>3 days ago</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        voluptas dolores similique veniam aliquid labore ipsum repellendus
        praesentium quibusdam vel ipsam, distinctio necessitatibus quaerat
        fugiat ratione ea earum delectus est exercitationem eos temporibus ullam
        rem, ab in. Libero, in nulla, odit iure, incidunt laudantium quis soluta
        beatae ullam eum at earum. Reprehenderit, ut non velit aliquam qui sequi
        mollitia nemo totam vero architecto incidunt animi adipisci? Sint itaque
        suscipit non iste voluptas tempora eveniet, rem aspernatur ab est
        accusamus qui obcaecati quas voluptate velit necessitatibus et at.
        Saepe, non deleniti aut, cum, placeat ullam sed ex explicabo eum
        possimus incidunt?
      </p>
    </div>
  );
};

export default SingleCommentComponent;
