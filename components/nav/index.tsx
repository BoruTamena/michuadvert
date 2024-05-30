import { AppBar, Box, Container, Hidden, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import User from "./User";
import styles from "../style.module.css"
import Image from "next/image";

type Props = {}

const Nav = (props: Props) => {

    
  return (
    <div>
        <AppBar position="sticky" color="transparent" sx={{boxShadow:"none",top:0,pt:2}}>
          <Container>
            <Toolbar >
              
                <Box sx={{marginRight:"40px"}}>
                  <Image
                   width={50}
                   height={50}
                   src="/image/logo.jpg"
                   alt=""
                  />
                </Box>
                <Hidden lgDown>
                <Stack direction={"row"} spacing={4} useFlexGap sx={{flex:1}}>
                  <Typography 
                  className={styles.navitem} 
                  component={Link} href="/" 
                   textTransform={"capitalize"}>home</Typography>

                  <Typography 
                  className={styles.navitem}  
                  component={Link} href="/about"  
                  textTransform={"capitalize"}>about</Typography>

                  <Typography 
                  className={styles.navitem}  
                  component={Link} href="/blog"  
                  textTransform={"capitalize"}>blog</Typography>

                  <Typography className={styles.navitem} 
                   component={Link} href="/#service" textTransform={"capitalize"}>service</Typography>
               
               
                </Stack>
                <User/>
                </Hidden>
               
            </Toolbar>
            </Container>
        </AppBar>
    </div>
  )
};

export default Nav;