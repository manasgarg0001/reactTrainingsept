import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import img1 from "../assets/img.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, InputAdornment, TextField } from "@mui/material";
import { Chat } from "../components/chat/chat";
import SearchIcon from "@mui/icons-material/Search";
import { Messages } from "../components/chat/messages";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import bgimg from "../assets/bg.jpg";

const drawerWidth = 240;

function Messenger(props) {
  const [msg, setMsg] = useState("");
  const sendMsg = (data) => {
    setMsg(data);
  };
  console.log(msg);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "blue",
          }}
        >
          <Toolbar />
          <QuestionAnswerIcon sx={{ color: "white" }} />
          <Typography variant="h6" color="white" fontWeight="bold">
            Chats
          </Typography>
        </Box>
        <Box>
          <TextField
            size="small"
            borderRadius="50px"
            variant="outlined"
            placeholder="search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton component="label">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              padding: "5px",
              ".MuiInputBase-root": {
                borderRadius: "50px",
              },
            }}
          ></TextField>
        </Box>
        <Divider />
        <List>
          {[
            "Jane",
            "Tyler",
            "Sandy",
            "Halsey",
            "Ashley",
            "Manas",
            "Mohit",
            "Manu",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - 300px)` },
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            top: "65px",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Avatar src={img1} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: "flex", flexGrow: "1", fontWeight: "bold" }}
            >
              Manas Garg
              <Box>
                <FiberManualRecordIcon color="success" fontSize="small" />
              </Box>
            </Typography>

            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box>
                <VideocamIcon />
              </Box>
              <Box>
                <PersonAddAlt1Icon />
              </Box>
              <Box>
                <MoreHorizIcon />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              ml: "60px",
              mt: "64px",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Box
          component="main"
          sx={{
            // flexGrow: 1,
            // p: 3,
            height: `calc(100vh - 150px)`,
            backgroundColor: "aliceblue",
            backgroundImage: `url(${bgimg})`,
          }}
        >
          <Box
            sx={{
              marginTop: "80px",
            }}
          >
            <Messages a1={msg} />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
            <Messages />
          </Box>
          <Toolbar />
        </Box>

        <Box>
          <Chat msg={sendMsg} />
        </Box>
      </Box>
    </Box>
  );
}

export default Messenger;
