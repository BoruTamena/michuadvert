import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "../style.module.css"
type Props = {}

const Footer = (props: Props) => {

const contact =["Facebook","twitter","Telegram"]

const service =[""]


  return (
    <div className={styles.footerbg}>
    <Container>
        <Grid container spacing={5}>

            <Grid item md={4}>
               <Typography variant="h6">Contact </Typography>
               <Box >
                {
                contact.map((item,index)=><Typography p={1} key={index}>{item}</Typography>)
                }
               </Box>
               
            </Grid>

            <Grid item md={4}>
               <Typography variant="h6">Service</Typography>  
            </Grid>

            <Grid item md={4}>
              <Typography variant="h6">Help</Typography> 

              <Typography>lorem ipsum dolorsiet  </Typography>  
            </Grid>

        </Grid>
    </Container>
    </div>
  )
};

export default Footer;