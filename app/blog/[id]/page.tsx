import BlogContent from "@/components/BlogContent";
import { Box, Container, Divider, Typography } from "@mui/material";

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Container>
            <Typography 
            variant="h3" 
            textTransform={"capitalize"}
            textAlign={"center"}
            fontWeight={"bolder"}
            mt={3}
            >
            Titile of the Blog</Typography>

            <Divider/>

            <Box mt={3}>
               <BlogContent/>

            </Box>
            <br />
            <br />
            <br />

        </Container>
    </div>
  )
};

export default page;