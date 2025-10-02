import React from 'react';

// | Import Components
import NavbarComponent from '../Components/NavbarComponent';

// | Import Dependency
import { Outlet } from 'react-router';

// & Main Layout Component
const MainLayout = () => {
  // ^ Render Main Layout
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      <NavbarComponent />
      <Outlet />
    </div>
  );
};

// ~ Main Layout Export
export default MainLayout;
