import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

import { Box, InputAdornment } from "@mui/material";

const Stories = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginLeft: "10px",
          padding: "5px",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Card
          sx={{
            maxWidth: "100%",
            backgroundImage: `url(${props.backgroundImg})`,
            height: "210px",
            width: "120px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Box
            sx={{
              padding: "120px 0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={props.avatar}
              sx={{ bgcolor: blue[500] }}
            />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "13px",
                color: "#FFFFFF",
              }}
            >
              {props.name}
            </Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
};
export default Stories;
