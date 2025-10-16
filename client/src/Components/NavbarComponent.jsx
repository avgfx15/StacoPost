import React, { useState, useEffect } from 'react';

// | Clerk
import {
  SignedIn,
  SignedOut,
  // SignInButton,
  useAuth,
  UserButton,
} from '@clerk/clerk-react';

// | react-icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import ImageComponent from './ImageComponent';
import { NavLink } from 'react-router';

// & Navbar Component
const NavbarComponent = () => {
  // / Get Token From Clerk
  const { getToken } = useAuth();

  useEffect(() => {
    (async () => {
      await getToken();
    })();
  }, [getToken]);

  // @ Open Mobile Menu Declare Variable With State
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  // $ Close Mobile Menu On Select Route
  const closeMenu = () => {
    setOpenMobileMenu(false);
  };

  // ^ Render Navbar Component
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/* LOGO */}
      <NavLink
        to='/'
        className='flex items-center gap-4 cursor-pointer text-2xl font-bold'
      >
        <ImageComponent
          className='w-12 h-12 rounded-full'
          src='/Logo.png'
          alt='Logo'
        />
        <span>StacoPost</span>
      </NavLink>

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
          <NavLink to='/' onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to='/' onClick={closeMenu}>
            Trending
          </NavLink>
          <NavLink to='/' onClick={closeMenu}>
            Most Popular
          </NavLink>
          <NavLink to='/about' onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to='/contact' onClick={closeMenu}>
            Contact Us
          </NavLink>
          <NavLink to='/login' onClick={closeMenu}>
            <button className='py-2 px-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-all duration-300 ease-in-out'>
              Login
            </button>
          </NavLink>
        </div>
      </div>

      {/* DESKTOP MENU */}

      <div className='hidden md:flex items-center gap-8 xl:gap-12 text-base font-medium'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Trending</NavLink>
        <NavLink to='/'>Most Popular</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
        <SignedOut>
          <NavLink to='/login'>
            <button className='py-2 px-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-all duration-300 ease-in-out'>
              Login
            </button>
          </NavLink>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default NavbarComponent;
