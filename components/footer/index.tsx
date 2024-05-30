import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "../style.module.css"
import Link from "next/link";
import { Copyright } from "@mui/icons-material";
type Props = {}

const Footer = (props: Props) => {

const contact =["Facebook","twitter","Telegram"]
const usefulLinks=[{
                    name:"About",
                    link:"/about"
                  },
                  {
                    name:"Blog",
                    link:"/blog"
                  },
                  {
                    name:"service",
                    link:"/#service"
                  },
                  
                  
                
                ]
const service =["Logo","Mud","banner","Bussiness card"]


  return (
    <div className={styles.footerbg}>
    <Container>
        <Grid container spacing={5}>

            <Grid item md={4}>
               <Typography variant="h6">Follow us </Typography>
               <Box >
                {
                contact.map((item,index)=><Typography p={1} key={index}>{item}</Typography>)
                }
               </Box>
               
            </Grid>

            <Grid item md={4}>
               <Typography variant="h6">Service</Typography>  
               <Box >
                {
                service.map((item,index)=><Typography p={1} key={index}>{item}</Typography>)
                }
               </Box>
            </Grid>

            <Grid item md={4}>
              <Typography variant="h6">Usefull Links</Typography> 

              {
                usefulLinks.map((item,index)=><Typography component={Link} 
                                                 href={item.link} 
                                                  p={1} key={index}
                                                  sx={{textDecoration:"none",display:"block",color:"black"}}
                                                  >

                                                  {item.name}

                                                  </Typography>)
                }
            </Grid>

        </Grid>


        <Box>
          <Typography variant="body2" textAlign={"center"} mt={3} >
           &copy; All right reserved by Michu 
          </Typography>
          <Typography variant="body2" 
            textAlign={"center"} 
            textTransform={"capitalize"}
            pb={2}
             >designed and developed by Boru Tamane </Typography>
        </Box>
    </Container>
    </div>
  )
};

export default Footer;