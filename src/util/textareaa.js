import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Card,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useUploadPost } from "../components/firebaseFunc/useposts";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Form, Formik } from "formik";
import moment from "moment";
import LocalStorageService from "./localStorageService";
import { firebase } from "../firebase";
import { getAuth } from "firebase/auth";
import { useGetPosts } from "../components/firebaseFunc/getPost";
import VideocamIcon from "@mui/icons-material/Videocam";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
//import { useGetUserById } from "../components/firebaseFunc/getUserById";
export default function FullWidthTextField(props) {
  const [image, setImage] = useState(null);
  const [postText, setPostText] = useState("");
  const currentUser = LocalStorageService.getCurrentUser();
  const { uploadPost, isLoading, isSuccess } = useUploadPost();
  const auth = getAuth();

  const { getPosts } = useGetPosts();

  const onSubmit = () => {
    uploadPost({
      uploadFile: image,
      content: postText,
      user: currentUser,
      createdAt: moment().format("llll"),
    });
    getPosts();
  };

  return (
    <>
      {/* <Formik
        initialValues={{
          id: Math.floor(Math.random() * 100),
          text: "",
          url: "",
        }}
        onSubmit={(data) => {
          {
            props.getData(data);
          }
          console.log(data, "dataa");
          alert(JSON.stringify(data, null, 2));
          console.log(values, "valuess");
        }}
      >
        {(props) => (
          <Form
            onSubmit={props.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "center",
            }}
          > */}
      <Card>
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Box sx={{ display: "flex", backgroundColor: "white" }}>
            <TextField
              fullWidth
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              name="text"
              id="fullWidth"
              placeholder="whats on your mind paul?"
            />
            <Box>
              <TextField
                name="url"
                fullWidth
                sx={{
                  display: "flex",
                  color: "#788292",
                  fontFamily: "Montserrat",
                  fontSize: "15px",
                }}
                id="fullWidth"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Box>
            <Button type="submit" onClick={onSubmit}>
              add Item
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            padding: "5px",
            alignItems: "center",
          }}
        >
          <VideocamIcon sx={{ color: "red" }} />
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
          >
            Live
          </Typography>
          <Button
            component="label"
            sx={{ flexGrow: 1 }}
            startIcon={<CollectionsIcon sx={{ color: "blue" }} />}
          >
            image/file
            <input
              type="file"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Button>
          {/* <Typography variant="body1" sx={{ fontWeight: "bold", flexGrow: 1 }}>
            image/file
          </Typography> */}

          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
          >
            Games
          </Typography>
          <SportsEsportsIcon />
        </Box>
      </Card>

      {/* </Form>
        )}
      </Formik> */}
    </>
  );
}
