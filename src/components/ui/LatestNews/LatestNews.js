"use client"

import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import topNews from '@/assets/TopNews.png';
import Image from "next/image";

const LatestNews = () => {
    return (
        
           <Box className= 'my-5'>
           <Card>
      <CardActionArea>
        <CardMedia>
        <Image src={topNews} alt="Logo" width={800} height={400  }></Image>
        </CardMedia>
        <CardContent>
            
              <Button  className="my-2" variant="outlined" color="error">Technology</Button>
          <Typography gutterBottom variant="h5" component="div">
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          By Awlad Hossain - Mar 18 2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className="bg-orange-600 text-white">Details</Button>
      </CardActions>
           </Card>
           <Grid className="my-3" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
           <Grid item xs={6}>
           <Card>
           <CardActionArea>
             <CardMedia>
             <Image src={topNews} alt="Logo" width={800} height={400  }></Image>
             </CardMedia>
             <CardContent>
                 
                   <Button  className="my-2" variant="outlined" color="error">Technology</Button>
               <Typography gutterBottom variant="h5" component="div">
               Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
               </Typography>
               <Typography gutterBottom variant="h5" component="div">
               By Awlad Hossain - Mar 18 2023
               </Typography>
               <Typography variant="body2" color="text.secondary">
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. 
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions>
           <Button className="bg-orange-600 text-white">Details</Button>
           </CardActions>
          </Card>
           </Grid>
           <Grid item xs={6}>
           <Card>
           <CardActionArea>
             <CardMedia>
             <Image src={topNews} alt="Logo" width={800} height={400  }></Image>
             </CardMedia>
             <CardContent>
                 
                   <Button  className="my-2" variant="outlined" color="error">Technology</Button>
               <Typography gutterBottom variant="h5" component="div">
               Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
               </Typography>
               <Typography gutterBottom variant="h5" component="div">
               By Awlad Hossain - Mar 18 2023
               </Typography>
               <Typography variant="body2" color="text.secondary">
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. 
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions>
           <Button className="bg-orange-600 text-white">Details</Button>
           </CardActions>
          </Card>
           </Grid>
           <Grid item xs={6}>
           <Card>
           <CardActionArea>
             <CardMedia>
             <Image src={topNews} alt="Logo" width={800} height={400  }></Image>
             </CardMedia>
             <CardContent>
                 
                   <Button  className="my-2" variant="outlined" color="error">Technology</Button>
               <Typography gutterBottom variant="h5" component="div">
               Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
               </Typography>
               <Typography gutterBottom variant="h5" component="div">
               By Awlad Hossain - Mar 18 2023
               </Typography>
               <Typography variant="body2" color="text.secondary">
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. 
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions>
           <Button className="bg-orange-600 text-white">Details</Button>
           </CardActions>
          </Card>
           </Grid>
           <Grid item xs={6}>
           <Card>
           <CardActionArea>
             <CardMedia>
             <Image src={topNews} alt="Logo" width={800} height={400  }></Image>
             </CardMedia>
             <CardContent>
                 
                   <Button  className="my-2" variant="outlined" color="error">Technology</Button>
               <Typography gutterBottom variant="h5" component="div">
               Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
               </Typography>
               <Typography gutterBottom variant="h5" component="div">
               By Awlad Hossain - Mar 18 2023
               </Typography>
               <Typography variant="body2" color="text.secondary">
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. 
               </Typography>
             </CardContent>
           </CardActionArea>
           <CardActions>
           <Button className="bg-orange-600 text-white">Details</Button>
           </CardActions>
          </Card>
           </Grid>
           
         </Grid>
           </Box> 
    );
};

export default LatestNews;