
import { AppBar } from '../AppBar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Wrapper } from './Layout.styled';

let gog;
const Layout = () => {
  return (
    <Wrapper dog={gog}>
      <AppBar />
        <Outlet/>
      <ToastContainer />
    </Wrapper>
  );
};

export default Layout;
