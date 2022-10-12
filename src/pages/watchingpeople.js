import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import bgimg1 from "../assets/bgimg1.png";
import bgimg2 from "../assets/bgimg2.png";
import { Box } from "@mui/system";
import { Avatar, AvatarGroup, Button } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import avt1 from "../assets/Ellipse28.png";
import avt2 from "../assets/Ellipse28(1).png";
import avt3 from "../assets/Ellipse29.png";
import avt4 from "../assets/Ellipse29(1).png";
import avt5 from "../assets/Ellipse30.png";
import avt6 from "../assets/Ellipse30(1).png";
export default function WatchingPeople() {
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        gap: "20px",
        marginLeft: "10px",
        flexWrap: "wrap",
      }}
    >
      <Card
        sx={{
          maxWidth: "200px",
          backgroundImage: `url(${bgimg1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          height: "250px",
        }}
      >
        <CardContent>
          <FavoriteIcon sx={{ color: "white" }} />
          <Typography variant="body2" color="white" sx={{ paddingTop: "35px" }}>
            Start Watching With Friends & Family
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          size="small"
          sx={{ color: "#203758", background: "white", left: "25px" }}
        >
          Watch Now
        </Button>

        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AvatarGroup size="small" max={4} sx={{ justifyContent: "center" }}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src={avt1}
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src={avt2}
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Cindy Baker"
                src={avt3}
              />
            </AvatarGroup>
            <Typography
              variant="body2"
              sx={{ padding: "5px", color: "#788292" }}
            >
              35 Friends Watching now
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* 2nd substory */}

      <Card
        sx={{
          maxWidth: "200px",
          backgroundImage: `url(${bgimg2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          height: "250px",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <EventIcon sx={{ color: "white" }} />
            <Typography
              variant="h6"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              Events
            </Typography>
          </Box>
          <Typography variant="body2" color="white" sx={{ paddingTop: "35px" }}>
            Join events here for you for free
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          size="small"
          sx={{ color: "#203758", background: "white", left: "25px" }}
        >
          Explore All
        </Button>

        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AvatarGroup size="small" max={4} sx={{ justifyContent: "center" }}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Remy Sharp"
                src={avt4}
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Travis Howard"
                src={avt5}
              />
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Cindy Baker"
                src={avt6}
              />
            </AvatarGroup>
            <Typography
              variant="body2"
              sx={{ padding: "5px", color: "#788292" }}
            >
              14 Friends Going
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
