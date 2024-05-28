import Image from "next/image";
import styles from "./page.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import Heeroo from "@/components/Heeroo";
import CardComponent from "@/components/CardComponent";

export default function Home() {
  return (
    <main>
      <Heeroo/>

      
    <Box className={styles.service}  mt={5} p={2}>
     <Container >
      <Typography fontWeight={"bold"}  variant="h5" textAlign={"center"} mb={5} mt={5}>Tajajila Keenyaa </Typography>
      <Grid container spacing ={1}>
        <Grid item md={3 }>
          <CardComponent/>
        </Grid>
        <Grid item md={3 }>
          <CardComponent/>
        </Grid>
        <Grid item md={3 }>
          <CardComponent/>
        </Grid>
        <Grid item md={3 }>
          <CardComponent/>
        </Grid>
      </Grid>

     </Container>
    
    </Box>
      
    
    </main>
  );  
}
