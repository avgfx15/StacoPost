import React from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      <NavbarComponent />
      <Outlet />
    </div>
  );
};

export default MainLayout;
