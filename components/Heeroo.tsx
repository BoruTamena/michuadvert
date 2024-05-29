import { Button, Container, Grid, Hidden, Typography } from "@mui/material";

import styles from "./style.module.css"
import Image from "next/image";

type Props = {}

const Heeroo = (props: Props) => {
  return (
    <div style={{marginTop:"30px"}}>
        <Container>
             <Grid container spacing={2}>
                <Grid item md={6}  xs={12} sm={12}>

                    <Typography variant={"h1"} fontWeight={"bold"}  textTransform={"capitalize"} mt={4}>
                         Yaadotaa gara Hojitti!!!
                    </Typography>
                      
                    <Typography variant="h3" className={styles.ctxt} > Michu wajjiin</Typography>


                     <Button
                      className={styles.primarybtn} 
                      variant="contained" 
                      sx={{boxShadow:"none",borderRadius:"40px",mt:3,width:"50%" }}
                      >
                        <Typography 
                        textTransform={"capitalize"} 
                        fontWeight={"bold"} p={1}> Get Started</Typography>
                       
                     </Button>
                </Grid>
              <Hidden mdDown>
              <Grid item md={6} xs={12} sm={12}>
                    <Image
                     style={{marginTop:5}}
                     width={500}
                     height={500}
                     src="/image/ban.png"
                     alt=""
                    />
                </Grid>

              </Hidden>
                
             </Grid>
        </Container>
    </div>
  )
};

export default Heeroo;