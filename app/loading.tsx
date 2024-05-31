import { Skeleton } from "@mui/material";

type Props = {}

const Loading = (props: Props) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
       <Skeleton variant="rectangular" width={500} height={500} />
    </div>
  )
};

export default Loading;