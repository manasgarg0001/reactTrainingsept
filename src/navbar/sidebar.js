import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import List from "@mui/material/List";

import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import VideoChatRoundedIcon from "@mui/icons-material/VideoChatRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 60;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            position: "relative",
            height: "calc(100vh - 69px)",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <DrawerHeader>
          <FacebookRoundedIcon
            sx={{
              fontSize: "xxx-large",
              color: "#1877f2",
            }}
          />
        </DrawerHeader>
        <Divider /> */}
        <List sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
          <ListItem
            disablePadding
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <BookmarkBorderIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <EventRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <RecommendRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <VideoChatRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <SettingsRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <HelpRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={{ py: "15px" }}>
              <ListItemIcon sx={{ minWidth: 0, color: "#788292" }}>
                <GridViewRoundedIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
        <IconButton
          size="large"
          aria-label="search"
          fill="#F0F7FF"
          sx={{
            mx: 1,
            my: 1,
            color: "#1877F2",
            border: "1px solid #788292",
            marginBottom: "30px",
          }}
        >
          <AddRoundedIcon />
        </IconButton>
      </Drawer>
    </Box>
  );
}
