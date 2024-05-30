import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import AboutDescription from "./AboutDescription";

type Props = {}

const AboutOption = (props: Props) => {
  return (
    <div>
          <Box p={3}>
          <Grid container spacing={2}>
            <Grid item md={5}>
              <ButtonGroup variant="contained" orientation="vertical" sx={{width:"100%",boxShadow:"none",m:2}}>
                <Button sx={{p:2,m:1,border:"none"}}>Our Techenology</Button>
                <Button sx={{p:2,m:1}}>Our Techenology</Button>
                <Button sx={{p:2,m:1}}>Our Techenology</Button>
              </ButtonGroup>
            </Grid>
            <Grid item md={7}>

                <OptionDescription description="description goes here..."/>

            </Grid>
          </Grid>

        </Box>
    </div>
  )
};



const OptionDescription=({description}:{description:string})=>{
  return(
    <Box>
      <Typography p={3}>{description}</Typography>
    </Box>
  )
}





export default AboutOption;