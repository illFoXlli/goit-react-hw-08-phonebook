import Box from '../service/Box';
import { AppBar } from '../AppBar';
import { Outlet } from 'react-router-dom';

const Layout = ({ homePage }) => {
  return (
    <Box>
      <AppBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
