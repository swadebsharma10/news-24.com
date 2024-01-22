import { getCategories } from "@/utilites/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";


 

const CategoriesList = async() => {
    const {data} = await getCategories();
    // console.log(data)
    
    return (
        <Box className="mt-5 bg-gray-100 p-4">
           <Typography variant="h5" className="text-center">Categories</Typography> 
           <Divider></Divider>
           <Stack rowGap={2}>
           {
            data.map((category) =>(
             
                <Button variant="outlined" key={category.id}> 
                <Link href={`/categories/news?category =${category.title.toLowerCase()}`}>
                {category.title}
                </Link></Button>
             
            ))
           }
           </Stack>
        </Box>
    );
};

export default CategoriesList;