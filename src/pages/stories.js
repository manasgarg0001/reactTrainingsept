import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

import storyimg from "../assets/Rectangle.png";
import storyimg1 from "../assets/MaskGroup.png";
import storyimg2 from "../assets/Rectangle2.png";
import substory from "../assets/Group.png";
import substory1 from "../assets/Ellipse.png";
import substory2 from "../assets/Group2.png";
import { Box, InputAdornment } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Stories = (props) => {
  return (
    <>
      {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            padding: "10px",
            lineHeight: "21px",
            color: "#203758",
            display: "flex",
            //flexGrow: 10,
          }}
        >
          Stories
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MoreHorizIcon sx={{ color: "#788292" }} />
        </Box>
      </Box> */}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          marginLeft: "10px",
          padding: "5px",
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
        {/* <Card
          sx={{
            maxWidth: 150,
            backgroundImage: `url(${storyimg1})`,
            height: "210px",
            width: "100%",
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
              src={substory}
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
              Brandom cramer
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            maxWidth: 150,
            backgroundImage: `url(${storyimg2})`,
            height: "210px",
            width: "100%",
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
              src={substory2}
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
              Perrie cox
            </Typography>
          </Box>
        </Card> */}
      </Box>
    </>
  );
};
export default Stories;
