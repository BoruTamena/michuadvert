import BlogCard from "@/components/BlogCard";
import BlogContent from "@/components/BlogContent";
import { Box, Card, CardContent, Container, Divider, Grid, Typography } from "@mui/material";

type Props = {}

const page = (props: Props) => {
  return (
    <div style={{marginTop:10}}>
        <Container>

          <Typography variant="h5" fontWeight={"bold"} mb={2} mt={4}> Our Blogs</Typography>
           
           <Grid container spacing={2}>

            <Grid item md={4}>
              <BlogCard/>
            </Grid>

            <Grid item md={4}>
              <BlogCard/>
            </Grid>

            <Grid item md={4}>
              <BlogCard/>
            </Grid>

           </Grid>
        </Container>
        <br />
        <br />
        <br />
    </div>
  )
};

export default page;