import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import img from "../assets/img.jpg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import firebaseConfig from "../firebase";
import LocalStorageService from "../util/localStorageService";

import { useSelector, useDispatch } from "react-redux";
const auth = getAuth();

// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settings = ["Logout"];
const pages = [
  { title: "Home", path: "/" },
  { title: "Notification", path: "/notification" },
  { title: "Watch", path: "/watch" },
  { title: "MarketPlace", path: "/marketplace" },
  { title: "Group", path: "/group" },
  { title: "Messenger", path: "/messenger" },
  { title: "Live", path: "/live" },
  { title: "Login/sign up", path: "/login" },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  const handlePath = (path) => {
    navigate(`${path}`);
  };
  const Signoutfunc = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        LocalStorageService.clearToken();
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const getUser = LocalStorageService.getCurrentUser();

  return (
    <AppBar position="relative" sx={{ backgroundColor: "white" }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
              <FacebookRoundedIcon
                sx={{ fontSize: "xxx-large", color: "#1877f2" }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FacebookRoundedIcon
            sx={{
              fontSize: "xxx-large",
              color: "#1877f2",
              display: { xs: "none", md: "flex" },
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handlePath(page.path)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  color: "#788292",
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "16px",
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <IconButton size="large" aria-label="search" backgroundColor="black">
            <SearchIcon />
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={img} />
                {/* <div>{getUser.displayName || getUser.firstName}</div>
                <div>{getUser.email}</div> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem sx={{ flexDirection: "column" }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {getUser.displayName || getUser.firstName}
                </Typography>
                <Typography variant="body2">{getUser.email}</Typography>
              </MenuItem>
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ justifyContent: "center" }}
                >
                  <Typography onClick={Signoutfunc}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
