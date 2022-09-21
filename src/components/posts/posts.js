import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import iconimage from "../../assets/Group48.png";
import cardimg from "../../assets/mirandaimg.png";
import mirandaimg from "../../assets/miranda.png";
import { Badge, Box, InputAdornment } from "@mui/material";
import { useUploadPost } from "../firebaseFunc/useposts";
export default function Posts(props) {
  const [count, setCount] = useState(1);
  //const [post, setPost] = useState();

  const { uploadPost, isLoading, isSuccess } = useUploadPost();
  function createPost(post) {
    alert(JSON.stringify(post, null, 2));
    console.log(post, "postss");
  }

  return (
    <Card sx={{ width: "100%", maxWidth: "100%", borderRadius: "8px" }}>
      <Box sx={{ display: "flex" }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <img src={props.avatar} />
            </Avatar>
          }
        />
        <Box sx={{ alignSelf: "center", flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "15px", fontWeight: "bolder", color: "#203758" }}
          >
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "15px", color: "#788292" }}
          >
            {props.time}
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
          {props.text}
        </Typography>
        <CardMedia
          component="img"
          //height="194"
          image={props.url}
          //alt=""
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
