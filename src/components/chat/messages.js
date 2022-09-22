import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const Messages = (props) => {
  return (
    <Box
      sx={{
        marginTop: "10px",
        backgroundColor: "aliceblue",
        display: "flex",
        justifyContent: "flex-end",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">{props.a1}</Typography>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Box>
  );
};
