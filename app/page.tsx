import Image from "next/image";
import styles from "./page.module.css";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Heeroo from "@/components/Heeroo";
import CardComponent from "@/components/CardComponent";
import Testimony from "@/components/Testimony";

export default function Home() {
  return (
    <main>
    <Heeroo/>  
    <Box id="service" className={styles.service}  mt={5} p={2}>
     <Container >
      <Typography fontWeight={"bold"}  variant="h5" textAlign={"center"} mb={5} mt={5}>Tajajila Keenyaa </Typography>
      <Grid container spacing ={1}>
        <Grid item md={3 } xs={12} sm={12}>
          <CardComponent/>
        </Grid>
        <Grid item md={3 } xs={12} sm={12}>
          <CardComponent/>
        </Grid>
        <Grid item md={3 } xs={12} sm={12}>
          <CardComponent/>
        </Grid>
        <Grid item md={3 } xs={12} sm={12}>
          <CardComponent/>
        </Grid>
      </Grid>

     </Container>

    </Box>


    <Box id ="testimony" m={5}>

      <Typography fontWeight={"bold"}  
      variant="h5" textAlign={"center"}
       mb={5}
        mt={5}>Our Success Story</Typography>


      <Container>

        <Grid container spacing={5}>
          <Grid item md={4} >

            <Typography 
            variant="h2" 
             fontWeight={"bolder"}
             textAlign="justify"
            
             color="blue"
             alignSelf={"center"}
             >
              Gammachuun Keenya Maamillaa Keenyaa !
              
              </Typography>

          </Grid>

          <Grid item md={8} >
            <Box  component="div"
             sx={{display:"flex",
             flexDirection:"column",
             justifyContent:"center",
             alignItems:"center",
             width:"100%",
             maxHeight:"450px",
             overflow:"scroll"}} >
            <Testimony/>
            <Testimony/>
            <Testimony/>

            </Box>

           
          </Grid>
        </Grid>

      </Container>

    </Box>

    <br/>
    <br/>
    
    </main>
  );  
}
