// import { Suspense } from 'react';

import Box from '../service/Box';
import { AppBar } from '../AppBar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Wrapper } from './Layout.styled';

// import Loader from 'components/Loader';
let gog;
const Layout = () => {
  return (
    <Wrapper dog={gog}>
      <AppBar />
      {/* <Suspense fallback={<Loader />}> */}
        <Outlet/>
      {/* </Suspense> */}
      <ToastContainer />
    </Wrapper>
  );
};

export default Layout;
