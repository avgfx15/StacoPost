import React from 'react';
import ImageComponent from '../Components/ImageComponent';
import { NavLink } from 'react-router';

import { FaFacebook, FaLinkedin, FaInstagram, Fa500Px } from 'react-icons/fa';
import PostMenuActionsComponent from '../Components/PostMenuActionsComponent';
import SearchComponent from '../Components/SearchComponent';
import CommentsComponent from '../Components/CommentsComponent';
import CategoriesComponent from '../Components/CategoriesComponent';

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* DETAILS */}
      <div className='flex gap-8'>
        {/* TEXT */}
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, ex.
          </h1>
          <div className='flex gap-2 text-gray-400'>
            <span>Written By</span>
            <NavLink className='text-sky-600'>Stacodev</NavLink>
            <span>on</span>
            <NavLink className='text-sky-600'>Web Development</NavLink>
            <span>5 days ago</span>
          </div>
          <p className='text-gray-600 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id
            autem labore sint eius aliquid alias nemo obcaecati necessitatibus,
            tempora vitae delectus, doloremque, fugit repudiandae.
          </p>
        </div>
        {/* IMAGE */}
        <div className='hidden lg:block w-2/5 aspect-video'>
          <ImageComponent
            src='/Logo.png'
            alt='Logo Img'
            width='800'
            height='600'
            className='rounded-3xl object-cover'
          />
        </div>
      </div>
      {/* CONTENT */}
      <div className='flex flex-col md:flex-row gap-8'>
        {/* TEXT */}
        <div className='flex flex-col gap-4 lg:text-lg text-justify w-9/12'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            soluta reprehenderit animi necessitatibus quam amet enim. Aliquid
            adipisci quas ad quod eos asperiores officia, commodi ipsum vitae
            delectus fugit consectetur laboriosam. Beatae harum, dolore dolor,
            odio officiis illo obcaecati hic quis quisquam mollitia pariatur,
            veritatis delectus aperiam. Quaerat, quis sapiente?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            laudantium quos! Quae necessitatibus aperiam et atque reiciendis
            enim quas dolores vel saepe veniam tenetur a, soluta quod. Accusamus
            neque ducimus fugit similique sint veritatis veniam temporibus ipsum
            debitis nostrum maiores, asperiores ullam et quaerat voluptas! Ullam
            excepturi officia aut illum, aspernatur sint quibusdam distinctio
            corrupti vel provident consequatur tempora, dolores, pariatur
            mollitia cumque reiciendis. Amet iste dignissimos aliquam dolorum
            quaerat cumque nostrum vitae aspernatur ullam!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            corrupti cumque nisi aperiam nulla aspernatur sunt accusamus sint,
            dolore explicabo commodi necessitatibus minima deleniti. Labore ad
            quo voluptas. Dolorem, voluptates. Numquam, tenetur libero ad harum
            repudiandae fugiat quos quia totam repellendus? Officiis asperiores
            nesciunt iusto eaque dicta quo modi ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            corrupti. Suscipit quas ut architecto, accusantium et error atque
            repellendus quo culpa maxime fugiat id deleniti vel. Officia odio id
            porro quis voluptatum iste mollitia est nihil laboriosam nostrum
            ducimus culpa voluptatibus cumque vero expedita harum asperiores,
            rem corporis nobis doloribus. Ipsum ut nesciunt vel voluptate!
            Aliquid repudiandae sed recusandae voluptate similique earum soluta,
            tenetur id quia nemo ducimus sequi, eaque omnis ullam exercitationem
            obcaecati? Suscipit ut eveniet aspernatur obcaecati minus totam
            aperiam cupiditate, veritatis excepturi nihil, nesciunt error id?
            Repellendus labore laboriosam saepe minima reiciendis reprehenderit
            aut beatae ad iste.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            corrupti cumque nisi aperiam nulla aspernatur sunt accusamus sint,
            dolore explicabo commodi necessitatibus minima deleniti. Labore ad
            quo voluptas. Dolorem, voluptates. Numquam, tenetur libero ad harum
            repudiandae fugiat quos quia totam repellendus? Officiis asperiores
            nesciunt iusto eaque dicta quo modi ex.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium eaque odio praesentium consectetur exercitationem quas
            quae, natus aliquid, placeat animi id quam quis cum illo quo? Rerum,
            magnam. Soluta atque, vel numquam, eos et non obcaecati nihil
            tempora molestiae ut veniam. Accusantium perspiciatis recusandae
            cumque, necessitatibus explicabo impedit quaerat aperiam, facilis
            quo beatae commodi aliquam nisi accusamus error vero cupiditate
            consequatur illo facere minus voluptates. Harum fugit dolores
            doloribus officia qui deleniti laboriosam iusto vero. Sint, commodi
            incidunt debitis, necessitatibus ducimus numquam praesentium
            mollitia qui ipsum saepe voluptatibus perspiciatis ad, dolorum
            nostrum explicabo at fugit modi ea deserunt cumque. Ut tenetur
            nesciunt praesentium eius corrupti. Ratione eveniet itaque
            praesentium adipisci sint dolore odio suscipit, atque tenetur iusto
            enim fugiat officiis debitis error nesciunt autem deleniti. Vero
            rerum et doloremque dignissimos magnam, praesentium error, aut
            assumenda eos, consequuntur atque! Animi error, ex sapiente aut
            eaque fuga incidunt quia dignissimos at non?
          </p>
        </div>
        {/* SIDE MENU */}
        <div className='px-4 h-max sticky top-8 w-3/12 gap-4'>
          <h1>Author</h1>
          <div className=''>
            <div className='flex items-center gap-5 mb-3'>
              <ImageComponent
                src='/Logo.png'
                alt='User'
                className='h-12 w-12 rounded-full'
                width='48'
                height='48'
              />
              <NavLink>Stacodev</NavLink>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex gap-4 my-3'>
              <NavLink>
                <FaFacebook className='text-3xl' />
              </NavLink>
              <NavLink>
                <FaLinkedin className='text-3xl' />
              </NavLink>
              <NavLink>
                <FaInstagram className='text-3xl' />
              </NavLink>
            </div>
            <PostMenuActionsComponent />
            <h1 className='mb-3 font-bold'>Categories</h1>
            <CategoriesComponent />
            <h1 className='mb-3 font-bold mt-5'>Search</h1>
            <SearchComponent />
          </div>
        </div>
      </div>
      <CommentsComponent />
    </div>
  );
};

export default SinglePostPage;
