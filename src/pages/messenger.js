import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from "../store/slice/onlineUser";
//code for online dot on people chat list

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

const drawerWidth = 240;
const dummyData = ["id:1", "name:john", "lastName:garg"];
const people = [
  {
    name: "Jane",
    id: "1",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBx9Wr0-Vrvo7-X_EwAXnCxBrBODj3sjPLE_6DZPA&s",
    status: true,
  },
  {
    name: "Tyler",
    id: "2",
    img: "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320",
    status: true,
  },
  {
    name: "Sandy",
    id: "3",
    img: "https://image.shutterstock.com/image-photo/boats-on-braies-lake-pragser-260nw-1499847638.jpg",
    status: true,
  },
  {
    name: "Halsey",
    id: "4",
    img: "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000",
    status: true,
  },
  {
    name: "Ashley",
    id: "5",
    img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png",
    status: true,
  },
  {
    name: " Manas",
    id: "6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv7fq3Uvk0xGsMHmKMd3NG1zPkTivPLgDiI6ih-EjECX3JLau1G8W3rNGfhE70i5-BxVo&usqp=CAU",
    status: false,
  },
  {
    name: " Mohit",
    id: "7",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiV6MdNLlMbXVoW_CXzYA70zJ7KgFhP4y8_QtOEL9ZuksPsDV_-0RYHDiZDtPRgUUyYE&usqp=CAU",
    status: true,
  },
  {
    name: "Manu",
    id: "8",
    img: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
    status: false,
  },
];
function Messenger(props) {
  const dispatch = useDispatch();
  const getOnlineUser = useSelector((state) => state.userId.getUser);
  const [msg, setMsg] = useState([]);
  const sendMsg = (data) => {
    setMsg([...msg, data]);
  };
  console.log(msg);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [search, setSearch] = useState("");

  console.log(search);

  const [onlineUser, setOnlineUser] = useState({});

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
            onChange={(e) => setSearch(e.target.value)}
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
          {people
            .filter((text) => {
              if (search == "") {
                return text;
              } else if (
                text.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return text;
              }
            })
            .map((text, index) => (
              <>
                <ListItem
                  key={index}
                  onClick={() => {
                    setOnlineUser(text);
                    dispatch(getUserId(""));
                  }}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant={text.status ? "dot" : null}
                      >
                        <Avatar alt="Remy Sharp" src={text.img} />
                      </StyledBadge>
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              </>
            ))}
        </List>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
    // sx={{ display: "flex" }}
    >
      <CssBaseline />
      <Box>
        <AppBar
          position="none"
          sx={{
            width: { sm: `calc(100% - 240px)` },
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            top: "63px",
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
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant={getOnlineUser.status || onlineUser.status ? "dot" : null}
            >
              <Avatar
                src={getOnlineUser ? getOnlineUser.avatar : onlineUser.img}
              />
            </StyledBadge>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: "flex", flexGrow: "1", fontWeight: "bold" }}
            >
              {getOnlineUser ? getOnlineUser.name : onlineUser.name}
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
              mt: { md: "64px", sm: "72px" },
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
          marginLeft: "auto",
        }}
      >
        <Box
          component="main"
          sx={{
            height: `calc(100vh - 150px)`,
            backgroundColor: "aliceblue",
            backgroundImage: `url(${bgimg})`,
            height: "78vh",
            overflow: "scroll",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {msg.map((item, index) => (
            <Box
              sx={{
                "& .MuiTypography-root": { borderRadius: "15px" },
              }}
            >
              <Messages key={index} a1={item} />
            </Box>
          ))}
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
