import ImageSlider from "@/components/ImageSlider";
import getservice from "@/utils";
import { ContactEmergency, LocationOff, LocationOn, Mail, Phone } from "@mui/icons-material";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

interface Props {
    id:number,
    title:string ,
    description:string,
    cover:string,
    img:string [] 
}

const  page = async({params}:{params:{id:string}}) => {

    const data= await getservice(params.id)

    
 console.log(data)

  return (
    <Container >

    <Grid container spacing={3} mt={4}>

      <Grid item md={6}>
        <ImageSlider/>

      </Grid>

      <Grid item md={6}>
          {
            data.map((item:Props,index:number)=><Box key={index}>

              <Typography 
              variant="h3" 
              fontWeight={"bold"} 
              textTransform={"capitalize"}>
                {item.title}
              </Typography>

              <Typography p={2} lineHeight={2.1} textAlign={"justify"}>{item.description}</Typography>

               <Typography p={1} fontWeight={"bold"}>Order Us</Typography>

               <Box p={2}>

                  <Stack spacing={4}>
                    <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                       <LocationOn/>
                       <Typography pl={3}>Ethiopia Adama Oromiya</Typography>
                    </Box>

                    <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                       <Phone/>
                       <Typography pl={3}>+251----------</Typography>
                    </Box>

                    <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                       <Mail/>
                       <Typography pl={3}>michuadver@gmail.com</Typography>
                    </Box>
                  </Stack>

                  <Button 
                   variant="contained"
                   sx={{boxShadow:"none",
                   borderRadius:10,width:"100%",
                   marginTop:2,
                  }} 
                 
                  >Order Item </Button>

               </Box>



            </Box>)
          }
        
      </Grid>




    </Grid>

        <br />
        <br />
        <br />
    </Container>
  )
};

export default page;