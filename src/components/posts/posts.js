import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Badge,
  Box,
  Button,
  Collapse,
  InputAdornment,
  Menu,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useUploadPost } from "../firebaseFunc/useposts";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/slice/user";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  TelegramIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
} from "react-share";
import Popover from "@mui/material/Popover";

//moreverticon code
const options = ["save", "delete", "hidePost", "reportpost", "copylink"];
const ITEM_HEIGHT = 48;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Posts(props) {
  //menu code on morehorizon icon
  const [anchor, setAnchor] = React.useState(null);
  const openMenu = Boolean(anchor);
  const handleClickMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchor(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [comments, setComments] = useState("");
  function handleSubmit() {
    const addComment = {
      commentName: `${props.name}`,
      displayComment: comments,
    };
    setData([...data, addComment]);
    setComments("");
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setComments(event.target.value);
      handleSubmit();
    }
  };

  // useEffect(() => {
  //   dispatch(
  //     updateUser({
  //       name: "firstName",
  //       email: "manas@gmail.com",
  //       gender: "male",
  //       age: 30,
  //     })
  //   );
  // }, []);

  const { uploadPost, isLoading, isSuccess } = useUploadPost();
  // const countt = useSelector((state) => state.counter.value);
  function createPost(post) {
    alert(JSON.stringify(post, null, 2));
    console.log(post, "postss");
  }

  //dialog code for show more
  const [opencmnt, setOpencmnt] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpencmnt(true);
  };

  const handleCloseComment = () => {
    setOpencmnt(false);
  };
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
        <IconButton
          aria-label="settings"
          id="long-button"
          aria-controls={openMenu ? "long-menu" : undefined}
          aria-expanded={openMenu ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClickMenu}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchor}
          open={openMenu}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleCloseMenu}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
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
        <CardActions>
          <Badge color="primary" badgeContent={count}>
            <ThumbUpIcon
              sx={{ color: "#788292" }}
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </Badge>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <IconButton>
              <Badge color="primary" badgeContent={data.length}>
                <ChatIcon sx={{ color: "#788292" }} />
              </Badge>
            </IconButton>
          </ExpandMore>

          <IconButton
            aria-label="share"
            aria-describedby={id}
            onClick={handleClick}
          >
            <ShareIcon sx={{ color: "#788292" }} />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <IconButton component="label">
              <FacebookShareButton url={"https://www.facebook.com/"}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
            </IconButton>
            <IconButton component="label">
              <EmailShareButton url={"https://mail.google.com/"}>
                <EmailIcon size={32} round={true} />
              </EmailShareButton>
            </IconButton>
            <IconButton component="label">
              <TwitterShareButton url={"https://twitter.com/i/flow/login"}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
            </IconButton>
            <IconButton component="label">
              <WhatsappShareButton url={"https://www.whatsapp.com/"}>
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
            </IconButton>
            <IconButton component="label">
              <TelegramShareButton url={"https://web.telegram.org/"}>
                <TelegramIcon size={32} round={true} />
              </TelegramShareButton>
            </IconButton>
          </Popover>
        </CardActions>
      </Box>
      <Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
              {data.slice(-2).map((item, index) => (
                <>
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ alignSelf: "center" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </Box>
                    <Box
                      key={index}
                      sx={{
                        border: "0px solid black",
                        borderRadius: "20px",
                        padding: "10px",
                        backgroundColor: "aliceblue",
                        width: "100%",
                      }}
                    >
                      <Typography variant="body1" fontWeight="bold">
                        {item.commentName}
                      </Typography>
                      <Typography variant="body1" sx={{ alignSelf: "center" }}>
                        {item.displayComment}
                      </Typography>

                      <Box sx={{ display: "flex", gap: "10px", color: "gray" }}>
                        <Typography variant="body1" fontWeight="bold">
                          1d
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          Like
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          Reply
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </>
              ))}

              {/* code of dialog for show more */}

              <Dialog
                fullScreen={fullScreen}
                open={opencmnt}
                onClose={handleCloseComment}
                aria-labelledby="responsive-dialog-title"
                sx={{
                  "& .MuiPaper-root": { width: "500px" },
                }}
              >
                <DialogTitle sx={{ fontWeight: "bold", alignSelf: "center" }}>
                  Comments
                </DialogTitle>
                <DialogContent
                  sx={{
                    height: "400px",
                    overflow: "scroll",
                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  {data.map((item, index) => (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          mt: "10px",
                        }}
                      >
                        <Box sx={{ alignSelf: "center" }}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                          />
                        </Box>
                        <Box
                          key={index}
                          sx={{
                            border: "0px solid black",
                            borderRadius: "20px",
                            padding: "10px",
                            backgroundColor: "aliceblue",
                            width: "100%",
                          }}
                        >
                          <Typography variant="body1" fontWeight="bold">
                            {item.commentName}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ alignSelf: "center" }}
                          >
                            {item.displayComment}
                          </Typography>
                          <Box
                            sx={{ display: "flex", gap: "10px", color: "gray" }}
                          >
                            <Typography variant="body1" fontWeight="bold">
                              1d
                            </Typography>
                            <Typography variant="body1" fontWeight="bold">
                              Like
                            </Typography>
                            <Typography variant="body1" fontWeight="bold">
                              Reply
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  ))}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseComment} autoFocus>
                    close
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="body1"
                onClick={handleClickOpen}
                // onClick={handleOpen}
                sx={{ color: "gray", marginTop: "10px" }}
              >
                Show more
              </Typography>
            </Box>
            <TextField
              sx={{
                display: "flex",
                ".MuiInputBase-root": {
                  borderRadius: "50px",
                },
              }}
              fullWidth
              id="outlined-basic"
              placeholder="type your comment here"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              onKeyPress={handleKeyPress}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start" onClick={handleSubmit}>
                    <IconButton component="label" type="submit">
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton component="label">
                      <TagFacesIcon />
                      <CameraAltIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
}
