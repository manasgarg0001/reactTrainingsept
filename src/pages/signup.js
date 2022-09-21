import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import React from "react";
import { Navigate } from "react-router-dom";
import Signup from "../assets/logimg2.jpg";
import * as Yup from "yup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../firebase";
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc, query } from "firebase/firestore";
import { db } from "../firebase";
// import app from "../firebase";
const SignUp = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "*entered value is too short")
      .max(50, "*maximum 20 characters long")
      .required("*first name is required"),
    lastName: Yup.string()
      .min(2, "*minimum 8 characters long")
      .max(50, "*maximum 20 characters long")
      .required("*last name is required"),
    email: Yup.string()
      .email("*please enter a valid email address")
      .required("*email is required"),
    password: Yup.string()
      .min(8, "password must be 8 characters long!")
      .max(30, "password must not exceed 30 characters!")
      .required("password is required"),
    cpassword: Yup.string()
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "*password didn't match"
        ),
      })
      .required("*password confirmation is required"),
    gender: Yup.string().required("*please select a gender"),
    status: Yup.string().required("*choose an option"),
    checkbox: Yup.string().required("*please check this"),
  });
  const auth = getAuth();
  const [agree, setAgree] = useState("false");
  //const app = initializeApp(firebaseConfig);

  //Add Database by collection method
  // const db = getFirestore(firebaseConfig.app);
  // async function addData(values) {
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       firstName: values.firstName,
  //       lastName: values.lastName,
  //       email: values.email,

  //       gender: values.gender,
  //       status: values.status,
  //       checkbox: values.checkbox,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  //   alert("data saved");
  //};

  //const db = getFirestore(firebaseConfig.app);
  async function addData(values) {
    console.log(values, "valuess");
    await setDoc(doc(db, "users", values.uid), { ...values });
  }
  const signupUserWithEmailAndPassword = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...

        addData({
          uid: user.uid,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,

          gender: values.gender,
          status: values.status,
          checkbox: values.checkbox,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <>
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={6}>
          <CardMedia
            sx={{ height: "100%" }}
            component="img"
            src={Signup}
            alt="Paella dish"
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            background: "aliceblue",
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "100vh",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "700",
                fontSize: "36px",
                lineHeight: "49px",
                color: "#525252",
              }}
            >
              SignUp Form
            </Typography>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                cpassword: "",
                gender: "",
                status: "",
                checkbox: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                // await new Promise((r) => setTimeout(r, 500));
                // alert(JSON.stringify(values, null, 2));
                console.log(values, "valuess");
                signupUserWithEmailAndPassword(values);
                addData(values);
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
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#828282",
                    }}
                  >
                    Firstname
                  </Typography>
                  <TextField
                    label="firstname"
                    variant="outlined"
                    id="firstName"
                    name="firstName"
                    placeholder="enter your name"
                    onChange={props.handleChange}
                    value={props.values.firstName}
                    error={props.touched.firstName && props.errors.firstName}
                    helperText={
                      props.touched.firstName && props.errors.firstName
                    }
                    onBlur={props.handleBlur}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#828282",
                    }}
                  >
                    lastName
                  </Typography>
                  <TextField
                    label="lastname"
                    variant="outlined"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Your Lastname"
                    onChange={props.handleChange}
                    value={props.values.lastName}
                    error={props.touched.lastName && props.errors.lastName}
                    helperText={props.touched.lastName && props.errors.lastName}
                    onBlur={props.handleBlur}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#828282",
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    label="email"
                    variant="outlined"
                    id="email"
                    name="email"
                    placeholder="abc@gmail.com"
                    onChange={props.handleChange}
                    value={props.values.email}
                    error={props.touched.email && props.errors.email}
                    helperText={props.touched.email && props.errors.email}
                    onBlur={props.handleBlur}
                  />

                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#828282",
                    }}
                  >
                    Password
                  </Typography>
                  <TextField
                    label="password"
                    variant="outlined"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    onChange={props.handleChange}
                    value={props.values.password}
                    error={props.touched.password && props.errors.password}
                    helperText={props.touched.password && props.errors.password}
                    onBlur={props.handleBlur}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#828282",
                    }}
                  >
                    ConfirmPassword
                  </Typography>
                  <TextField
                    label="Confirm password"
                    variant="outlined"
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    placeholder="confirm your password"
                    onChange={props.handleChange}
                    value={props.values.cpassword}
                    error={props.touched.cpassword && props.errors.cpassword}
                    helperText={
                      props.touched.cpassword && props.errors.cpassword
                    }
                    onBlur={props.handleBlur}
                  />
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="gender"
                      onChange={props.handleChange}
                      value={props.values.gender}
                      error={props.touched.gender && props.errors.gender}
                      helperText={props.touched.gender && props.errors.gender}
                      onBlur={props.handleBlur}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                    <FormHelperText error>{props.errors.gender}</FormHelperText>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Marital Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={props.values.status}
                      error={props.touched.gender && props.errors.gender}
                      helperText={props.touched.gender && props.errors.gender}
                      onBlur={props.handleBlur}
                      label="status"
                      onChange={(e) =>
                        props.setFieldValue("status", e.target.value)
                      }
                    >
                      <MenuItem value="Single">Single</MenuItem>
                      <MenuItem value="Married">Married</MenuItem>
                      <MenuItem value="Widowed">Widowed</MenuItem>
                    </Select>
                    <FormHelperText error>{props.errors.status}</FormHelperText>
                  </FormControl>

                  <FormControl
                    id="checkbox"
                    label="checkbox"
                    name="checkbox-parent"
                    onChange={props.handleChange}
                    value={props.values.checkbox}
                    error={props.touched.checkbox && props.errors.checkbox}
                    helperText={props.touched.checkbox && props.errors.checkbox}
                    onBlur={props.handleBlur}
                  >
                    <FormControlLabel
                      control={<Checkbox value={true} color="primary" />}
                      name="checkbox"
                      label="I agree with the terms and conditions*"
                      onChange={(e) => setAgree(!e.target.checked)}
                    />
                    <FormHelperText error>
                      {props.touched.checkbox && props.errors.checkbox}
                    </FormHelperText>
                  </FormControl>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={agree}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "13px 10px 12px",
                      gap: "13px",
                      width: "460px",
                      height: "50px",
                      background: "#7F265B",
                      borderRadius: "6px",
                    }}
                  >
                    Signup
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default SignUp;
