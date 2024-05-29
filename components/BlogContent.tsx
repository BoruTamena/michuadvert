import { Box, Divider, Link, Typography } from "@mui/material";

type Props = {}

const BlogContent = (props: Props) => {
  return (
    <div>
        <Box>
        
        <Typography variant="h4" textTransform={"capitalize"} fontWeight={"bolder"}>subtitle1</Typography>
        <Typography lineHeight={2.0} gutterBottom>
                    In the world of Go programming language, io/fs#FileMode is an indispensable part that relates to basic file system operations and permission management. In this article, we will delve into the concept of FileMode, its usage, and its significance in Go file operations.
                    Basic Concept of FileModeThe FileMode type is defined in the io/fs package of the Go language and 
                    is used to represent the mode and permissions of a file. In UNIX and UNIX-like systems, 
                    this is a very familiar concept. FileMode is essentially 
                    a bit field representing the type and access permissions of a file.
         </Typography>

        <br/>
         <Divider/>

         <Box pt={2}>
            <Typography pt ={1}fontWeight={"bold"}>Resource</Typography>

            <Typography mt={1} p={2} 
            component={Link} 
            href="https://goolge.com" 
            target="_blank"
            color="info"
            >google.com</Typography>
            
         </Box>

        </Box>
    </div>
  )
};

export default BlogContent;