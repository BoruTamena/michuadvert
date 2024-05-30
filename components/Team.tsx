import { Facebook, Telegram } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

type Props = {}

const Team = (props: Props) => {
  return (
    <div>
        <Box mt={6}>
            <Stack direction={"row"} spacing={2} useFlexGap>
                <Box component="div">
                    <Image
                        width={200}
                        height={300}
                        src="/image/p1.jpeg"
                        alt=""
                        style={{borderRadius:5,padding:5}}
                    />
                </Box>

                <Box component="div">
                    <Typography fontWeight={"bold"} textTransform={"capitalize"}> Talila</Typography>
                    <Typography lineHeight={2.} textAlign={"justify"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat et tenetur sequi. Atque quas, laborum consequuntur voluptas eligendi error impedit nemo ipsa at saepe blanditiis est reprehenderit quaerat vel!
                    </Typography>

                    <Box component="div" p={2}>
                        <Stack direction={"row"} spacing={1}p={1}>
                            <Facebook/>
                            <Typography>Facebook</Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={1} p={1} >
                            <Telegram/>
                            <Typography>Telegram</Typography>
                        </Stack>
                    </Box>
                    
                </Box>
                

            </Stack>
        </Box>
    </div>
  )
};

export default Team;