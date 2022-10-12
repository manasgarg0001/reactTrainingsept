import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { Box, Card } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { getOnlineUserId } from "../store/slice/onlineUser";
import Badge from "@mui/material/Badge";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUserId } from "../store/slice/onlineUser";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const OnlineContactsHome = [
  {
    name: "Manas",
    avatar:
      "https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=",
    status: true,
  },
  {
    name: "MAnu",
    avatar:
      "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif",

    status: true,
  },
  {
    name: "Mohit",
    avatar:
      "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg",
    status: false,
  },
  {
    name: "Harsh",
    avatar:
      "https://i.pinimg.com/originals/4f/c6/08/4fc6081d264fe58538a2df527d1a0339.gif",
    status: true,
  },
  {
    name: "Taylor",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKoht14jUG2RcRsk88aKhrQfJgzK_cqXaG1fW-6jTdDAhv5o63yUbqph175nBSNFQtrms&usqp=CAU",
    status: true,
  },
  {
    name: "sarah",
    avatar:
      "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?k=20&m=1322277517&s=612x612&w=0&h=ZdxT3aGDGLsOAn3mILBS6FD7ARonKRHe_EKKa-V-Hws=",
    status: true,
  },
  {
    name: "harry",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcxm1tSJphluNimxurlape3Q9nhLcX3_apA&usqp=CAU",
    status: false,
  },
  {
    name: "shahrukh",
    avatar: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    status: true,
  },
];
export default function AlignItemsList() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "15px",
          marginTop: "10px",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 500,
            color: "#203758",
            margin: "0px 0px 0px 0px",
            display: "flex",

            fontFamily: "Montserrat",
          }}
        >
          Online Contacts
        </Typography>
        <Box sx={{ ml: 1, flexGrow: "1" }}>
          <FiberManualRecordIcon color="success" fontSize="small" />
        </Box>
        <Box
          sx={{
            display: "flex",

            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <MoreHorizIcon sx={{ color: "#788292" }} />
        </Box>
      </Box>
      <Card sx={{ borderRadius: "8px", cursor: "pointer" }}>
        <List>
          {OnlineContactsHome.map((item, index) => (
            <>
              <ListItem
                alignItems="flex-start"
                onClick={() => {
                  navigate("/messenger");
                  dispatch(getUserId(item));
                }}
                key={index}
              >
                <ListItemAvatar>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant={item.status ? "dot" : null}
                  >
                    <Avatar alt="Remy Sharp" src={item.avatar} />
                  </StyledBadge>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  sx={{
                    alignSelf: "center",
                    color: "#788292",
                    FontFamily: "Montserrat",
                  }}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Card>
    </>
  );
}
