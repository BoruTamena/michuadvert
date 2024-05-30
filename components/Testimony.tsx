import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

type Props = {}

const Testimony = (props: Props) => {
  return (
    <div style={{display:"block",width:"100%",height:"100%"}}>

        <Stack direction={"row"} spacing={2} mt={5} >
              <Box pl={9} >
                  <Image
                    width={100}
                    height={100}
                    src="/image/p1.jpeg"
                    alt=""
                    />
              </Box>
              <Box>
                <Typography>Boru Tamane Yadeta </Typography>
                <Typography variant="caption" pl={1}>Author of .....</Typography>
              </Box>
          </Stack>

          <Typography 
            pl={9} 
            textAlign={"justify"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laboriosam laborum, totam perspiciatis cumque inventore sit autem accusamus tempore. 
                Eos repudiandae at consequatur, tempore eum dolorum nostrum earum eaque et.
          </Typography>

          <br />
          <br />
          <br />


    </div>
  )
};

export default Testimony;