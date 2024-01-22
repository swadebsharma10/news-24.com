import { Box, Button, Container, IconButton, Typography } from "@mui/material";
// Icons comes Here
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";


const Footer = () => {
    return (
        <Box className="bg-black px-2 py-10">
          <Container>
          <Box className="w-full text-center" sx={{
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
        
          </Box>

          <Box className="w-full  text-center">
            {navItems.map((item, idx) => (
              <Link key={idx} href={item.pathname}>
                <Button className='text-white'>{item.route}</Button>
              </Link>
            ))}
          </Box>

          <Typography color='gray' variant="body2" textAlign='center'>
          @2024 news.24.com all Rights Reserved</Typography>

          </Container>  
        </Box>
    );
};

export default Footer;



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
        pathname: '/category'
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
