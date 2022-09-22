import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CollectionsIcon from "@mui/icons-material/Collections";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import { urlAlphabet } from "nanoid";

export const Chat = (props) => {
  const [text, setText] = useState("");
  const handleSubmit = () => {
    setText(text);
    {
      props.msg(text);
    }
    console.log(text);
  };

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
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="outlined-basic"
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
                  onClick={handleSubmit}
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
