import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

import logo from '@/assets/The Dragon News.png';
import { showCurrentDateTime } from "@/utilites/getCurrentDate";

const Header = () => {
    const currentDate = showCurrentDateTime();
    return (
        <Box className ="w-full my-5">
            <Container>
            <Image src={logo} alt="lOGO" height={500} width={500} className="mx-auto"></Image>
            <Typography color='gray' variant="body2" textAlign='center' className="my-2">
            Journalism Without Fear or Favour</Typography>
            <Typography color='gray' variant="body2" textAlign='center'>
            {currentDate}</Typography>
            </Container>
            
        </Box>
    );
}; 

export default Header;