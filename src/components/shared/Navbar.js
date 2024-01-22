'use client'
import logo from '@/assets/newslogo.png';
import { Button, IconButton, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';

// Icons comes Here
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import Header from './Header';

const navItems = [
    {
        route: 'Home',
        pathname: '/'
    },
    {
        route: 'Pages',
        pathname: '/pages'
    },
    {
        route: 'Category',
        pathname: '/categories/news'
    },
    {
        route: 'News',
        pathname: '/news'
    },
    {
        route: 'Contact',
        pathname: '/contact'
    },
    {
        route: 'About',
        pathname: '/about'
    },

];


const Navbar = () => {

 
  return (
    <>
    <Header></Header>
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

       <Image src={logo} alt='Logo' width={100} height={100}></Image>

          <Box className="w-full  text-center">
            {navItems.map((item, idx) => (
              <Link key={idx} href={item.pathname}>
                <Button className='text-white'>{item.route}</Button>
              </Link>
            ))}
          </Box>

          <Box>
                <Stack direction="row" spacing={2} sx={{
                    "& svg":{
                        color: 'orangered'
                    }
                }}>
                <IconButton>
                <FacebookIcon/>    
              </IconButton>
              <IconButton>
               <TwitterIcon/>   
              </IconButton>
              <IconButton>
                <GitHubIcon/>   
              </IconButton>
                </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Navbar;