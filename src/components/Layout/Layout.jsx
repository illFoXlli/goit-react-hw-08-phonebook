import { Suspense } from 'react';

import Box from '../service/Box';
import { AppBar } from '../AppBar';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
    
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
