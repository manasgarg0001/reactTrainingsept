import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
export const Messages = (props) => {
  return (
    <>
      <Box sx={{ color: "white", display: "flex", justifyContent: "center" }}>
        <Typography variant="subtitle1">today 10:20am</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ backgroundColor: "aliceblue", padding: "5px" }}
        >
          {props.a1}
        </Typography>
      </Box>
      <Box sx={{ color: "white", display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="subtitle1">10:20am</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ backgroundColor: "aliceblue" }}>
          {props.a1}
        </Typography>
      </Box>
      <Box
        sx={{ color: "white", display: "flex", justifyContent: "flex-start" }}
      >
        <Typography variant="subtitle1">10:20am</Typography>
      </Box>
    </>
  );
};
