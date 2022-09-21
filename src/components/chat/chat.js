import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import CollectionsIcon from "@mui/icons-material/Collections";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import { urlAlphabet } from "nanoid";
export const Chat = () => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "10px",
      }}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        //label="Outlined"
        variant="outlined"
        size="large"
        InputProps={{
          endAdornment: (
            <InputAdornment position="End">
              <IconButton component="label" sx={{ gap: "10px" }}>
                <AttachFileIcon />
                <CollectionsIcon />

                <Button
                  variant="outlined"
                  sx={{ backgroundColor: "blue", color: "white" }}
                >
                  Send
                </Button>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
