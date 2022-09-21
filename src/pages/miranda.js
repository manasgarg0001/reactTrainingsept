import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import mirandaimg from "../assets/miranda.png";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import iconimage from "../assets/Group48.png";
import cardimg from "../assets/mirandaimg.png";
import { Badge, Box, InputAdornment } from "@mui/material";
export default function Miranda() {
  const [count, setCount] = React.useState(1);
  return (
    <Card sx={{ width: "100%", maxWidth: "100%", borderRadius: "8px" }}>
      <Box sx={{ display: "flex" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={mirandaimg} />
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreHorizIcon />
          //   </IconButton>
          // }
          // title="Miranda Shaffer"
          // subheader="june 21,12:45"
        />
        <Box sx={{ alignSelf: "center", flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "15px", fontWeight: "bolder", color: "#203758" }}
          >
            Miranada Shaffer
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "15px", color: "#788292" }}
          >
            june 21, 12:45pm
          </Typography>
        </Box>
        <IconButton aria-label="settings">
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: "400",
            color: "#203758",

            fontWeight: "bold",
          }}
        >
          Having fun while cooking and eating variety of foods with @Sarah
        </Typography>
        <CardMedia
          component="img"
          height="194"
          image={cardimg}
          alt="Paella dish"
        />
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CardActions sx={{ gap: "20px" }}>
          <Badge color="primary" badgeContent={count}>
            <ThumbUpIcon
              sx={{ color: "#788292" }}
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </Badge>
          <Badge color="primary" badgeContent={4}>
            <ChatIcon sx={{ color: "#788292" }} />
          </Badge>
          <IconButton aria-label="share">
            <ShareIcon sx={{ color: "#788292" }} />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}
