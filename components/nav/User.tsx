import { MoreHoriz, MoreVert, Settings, SettingsAccessibility } from "@mui/icons-material";
import { Avatar, Box, Stack } from "@mui/material";
import styles from "../style.module.css"
type Props = {}

const User = (props: Props) => {
  return (
    <div>
        <Stack className={styles.userbox} spacing={2} direction={"row"} justifyContent={"center"} alignItems={"center"} useFlexGap>
            <Avatar sx={{ background: "brown" }} variant="rounded">B</Avatar>
            {/* <MoreVert/> */}
        </Stack>
    </div>
  )
};

export default User;