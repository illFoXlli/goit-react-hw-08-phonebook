// import { Suspense } from 'react';

import Box from '../service/Box';
import { AppBar } from '../AppBar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

// import Loader from 'components/Loader';

const Layout = () => {
  return (
    <Box>
      <AppBar />
      {/* <Suspense fallback={<Loader />}> */}
        <Outlet/>
      {/* </Suspense> */}
      <ToastContainer />
    </Box>
  );
};

export default Layout;
