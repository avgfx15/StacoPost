import React, { useState } from 'react';

// | react-icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import ImageComponent from './ImageComponent';

// & Navbar Component
const NavbarComponent = () => {
  // @ Open Mobile Menu Declare Variable With State
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  // ^ Render Navbar Component
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/* LOGO */}
      <div className='flex items-center gap-4 cursor-pointer text-2xl font-bold'>
        <ImageComponent
          className='w-12 h-12 rounded-full'
          src='/Logo.png'
          alt='Logo'
        />
        <span>StacoPost</span>
      </div>

      {/* MOBILE MENU */}
      <div className='md:hidden'>
        {/* OPEN CLOSE MENU BUTTON */}
        <div
          className='cursor-pointer text-3xl'
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          {openMobileMenu ? <GrClose /> : <GiHamburgerMenu />}
        </div>

        {/* MOBILE MENU LIST */}
        <div
          className={`w-full h-screen flex justify-center items-center flex-col bg-[#e6e6ff] absolute top-16 text-lg font-medium gap-8 teansition-all duration-500 ease-in-out ${
            openMobileMenu ? '-right-0' : '-right-[100%]'
          }`}
        >
          <a href='/'>Home</a>
          <a href='/'>Trending</a>
          <a href='/'>Most Popular</a>
          <a href='/'>About</a>
          <a href='/'>
            <button className='py-2 px-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-all duration-300 ease-in-out'>
              Login
            </button>
          </a>
        </div>
      </div>

      {/* DESKTOP MENU */}

      <div className='hidden md:flex items-center gap-8 xl:gap-12 text-base font-medium'>
        <a href='/'>Home</a>
        <a href='/'>Trending</a>
        <a href='/'>Most Popular</a>
        <a href='/'>About</a>
        <a href='/'>
          <button className='py-2 px-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-all duration-300 ease-in-out'>
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavbarComponent;
