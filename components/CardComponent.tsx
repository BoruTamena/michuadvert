import { AddBoxTwoTone } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

type Props = {}

const CardComponent = (props: Props) => {
  return (
    <div>

    <Box sx={{mb:5}}>
       <Image
         width={250}
         height={250}
         alt=""
         src="/image/t.jpg"
         style={{borderRadius:"10%"}}
       />
      
     <Typography 
         gutterBottom
         variant="h5" 
         textAlign={"center"}
         component="div">
          t-shrit
        </Typography>
     
    </Box>
    </div>
  )
};

export default CardComponent;