import { Suspense } from 'react';

import Box from '../service/Box';
import { AppBar } from '../AppBar';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';

const Layout = ({ homePage }) => {
  return (
    <Box>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
