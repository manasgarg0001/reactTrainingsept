import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  Button,
  IconButton,
  InputAdornment,
  Modal,
  Typography,
} from "@mui/material";
import { useUploadPost } from "../components/firebaseFunc/useposts";
import CollectionsIcon from "@mui/icons-material/Collections";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Form, Formik } from "formik";
import moment from "moment";
import LocalStorageService from "./localStorageService";
import { firebase } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useGetPosts } from "../components/firebaseFunc/getPost";
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
      createdAt: moment().format(),
      // timeStamp: moment().format(),
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
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Box sx={{ display: "flex", backgroundColor: "white" }}>
          <TextField
            fullWidth
            //onChange={props.handleChange}
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
              onChange={(e) => setImage(e.target.files[0])}
              placeholder="add Image/Status"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="End">
                    <IconButton component="label">
                      <input type="file" hidden />
                      <CollectionsIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

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
              //onChange={getFile}
            />
          </Box>
          <Button type="submit" onClick={onSubmit}>
            add Item
          </Button>
        </Box>
      </Box>
      {/* </Form>
        )}
      </Formik> */}
    </>
  );
}
