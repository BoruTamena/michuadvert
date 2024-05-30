import AboutDescription from "@/components/AboutDescription";
import AboutOption from "@/components/AboutOption";
import Team from "@/components/Team";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

type Props = {}

const page = (props: Props) => {
  return (
    <div>

      <Container>

        <Box 
          mt={4}
          m={2}
          style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            width:"100%",
            height:"140px",
            backgroundImage:"../public/image/michutable.jpg",
            backgroundColor:"blue"
          }}
        >
         

          <Typography variant="h3">Michu Printing and Advert</Typography>

        </Box>

        <Box mt={5} p={2}>
           <AboutDescription/>
           <AboutOption/>
        </Box>
        <Box mt={2} p={2}>
          <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>Meet Our Team </Typography>
           <Grid container spacing={5} mt={1}>
             <Grid item md={6}>
              <Team/>
             </Grid>
             <Grid item md={6}>
             <Team/>
             </Grid>
           </Grid>

        </Box>
    
      </Container>
      

      
    </div>
  )
};

export default page;