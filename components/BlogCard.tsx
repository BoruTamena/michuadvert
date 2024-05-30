import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";

type Props = {}

const BlogCard = (props: Props) => {
  return (
    <div style={{padding:1}}>
        <Card >
            <CardMedia
              component="img"
              src="/image/t.jpg"
            />
            <CardContent>
                <Typography
                 fontWeight={"bold"} 
                 textTransform={"capitalize"}
                 component={Link}
                 href="/blog/1"
                 
                 >
                 Maaliif banner barbachisaa
                 </Typography>
                
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto officia fuga accusamus impedit dolor consequuntur quidem, saepe aspernatur ullam, repellendus repudiandae praesentium, nesciunt magni? Optio culpa qui esse eligendi neque.
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
};

export default BlogCard;