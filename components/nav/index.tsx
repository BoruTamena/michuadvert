import { AppBar, Box, Container, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import User from "./User";
import styles from "../style.module.css"
import Image from "next/image";

type Props = {}

const Nav = (props: Props) => {

    
  return (
    <div>
        <AppBar position="relative" sx={{boxShadow:"none"}}>
          <Container>
            <Toolbar>
              
                <Box sx={{paddingRight:"40px"}}>
                  <Image
                   width={50}
                   height={50}
                   src="/image/logo.jpg"
                   alt=""
                  />
                </Box>

               
                <Stack direction={"row"} spacing={4} useFlexGap sx={{flex:1}}>
                  <Typography className={styles.navitem} component={Link} href="/" textTransform={"capitalize"}>home</Typography>
                  <Typography className={styles.navitem}  component={Link} href="/"  textTransform={"capitalize"}>blog</Typography>
                  <Typography className={styles.navitem}  component={Link} href="/" textTransform={"capitalize"}>service</Typography>
                </Stack>
                <User/>
            </Toolbar>
            </Container>
        </AppBar>
    </div>
  )
};

export default Nav;