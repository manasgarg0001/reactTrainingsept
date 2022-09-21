import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Logimg from "../assets/logimg.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Login from "./login";

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Card>
        <Box sx={{ width: "100%" }}>
          <Grid container sx={{ height: "calc(100vh - 65px)" }}>
            <Grid item xs={6}>
              <CardMedia
                sx={{ height: "100%" }}
                component="img"
                src={Logimg}
                alt="Paella dish"
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Login />
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}
