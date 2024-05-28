import { Button, Container, Grid, Typography } from "@mui/material";

import styles from "./style.module.css"
import Image from "next/image";

type Props = {}

const Heeroo = (props: Props) => {
  return (
    <div>
        <Container>
             <Grid container spacing={2}>
                <Grid item md={6}>

                    <Typography variant="h1" textTransform={"capitalize"} mt={4}>
                         Yaadotaa gara Hojitti!!!
                    </Typography>
                      
                    <Typography variant="h3" className={styles.ctxt} > Michu wajjiin</Typography>


                     <Button
                      className={styles.primarybtn} 
                      variant="contained" 
                      sx={{boxShadow:"none",borderRadius:"40px",mt:2,width:"50%" }}
                      >
                        <Typography 
                        textTransform={"capitalize"} 
                        fontWeight={"bold"} p={1}> Get Started</Typography>
                       
                     </Button>
                </Grid>

                <Grid item md={6}>
                    <Image
                     style={{marginTop:5}}
                     width={500}
                     height={500}
                     src="/image/ban.png"
                     alt=""
                    />
                </Grid>
             </Grid>
        </Container>
    </div>
  )
};

export default Heeroo;