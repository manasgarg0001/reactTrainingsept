import { Grid } from "@mui/material";
import React from "react";
import MiniDrawer from "../navbar/sidebar";
import ResponsiveAppBar from "../navbar/navBar";
const GridLayout = (props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <ResponsiveAppBar />
        </Grid>
        <Grid item sx={{ width: "fit-content" }}>
          <MiniDrawer />
        </Grid>
        <Grid item xs>
          {props.children}
        </Grid>
      </Grid>
    </>
  );
};
export default GridLayout;
