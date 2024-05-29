import { AddBoxTwoTone } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type Props = {}

const CardComponent = (props: Props) => {
  return (
    <div>

    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",mb:5,}}>
       <Box component="div">
       <Image
         width={250}
         height={250}
         alt=""
         src="/image/t.jpg"
         style={{borderRadius:"10%"}}
       />
       </Box>
       
      
     <Typography 
         gutterBottom
         variant="h5" 
         textAlign={"center"}
         component={Link}
         href="/service/1"
         sx={{display:"block",textDecoration:"none",color:"black"}}
         >
          T-shrits
        </Typography>
     
    </Box>
    </div>
  )
};

export default CardComponent;