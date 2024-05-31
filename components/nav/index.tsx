"use client"
import { AppBar, Box, Container, Hidden, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import User from "./User";
import styles from "../style.module.css"
import Image from "next/image";
import { ArrowDropDown } from "@mui/icons-material";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {}

const Nav = (props: Props) => {

  const [anchorEl, setAnchorEl] = React.useState<null |HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const router =useRouter()
    
  return (
    <div>
        <AppBar position="sticky" color="transparent" sx={{boxShadow:"none",top:0,pt:2}}>
          <Container>
            <Toolbar >
              
                <Box sx={{flex:1}} >
                  <Image
                   width={50}
                   height={50}
                   src="/image/logo.jpg"
                   alt=""
                   onClick={()=>{router.push("/")}}
                   style={{cursor:"pointer"}}
                  />
                </Box>
                <Hidden lgDown>
                <Stack direction={"row"} spacing={4} useFlexGap>
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

                  <Stack direction={"row"} 
                    spacing={1} 
                    alignContent={"center"} 
                    alignItems={"center"}>

                  <Typography className={styles.navitem} 
                  //  component={Link} href="/#service" 
                   textTransform={"capitalize"}
                  
                   onClick={handleClick}
                   
                   >service</Typography>

                  <ArrowDropDown/>
                  </Stack>
                </Stack>
                <User/>
                </Hidden>
               
            </Toolbar>
            </Container>
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Logo</MenuItem>
        <MenuItem onClick={handleClose}>Banner</MenuItem>
        <MenuItem onClick={handleClose}>Cards</MenuItem>
      </Menu>
        </AppBar>


       
    </div>
  )
};

export default Nav;