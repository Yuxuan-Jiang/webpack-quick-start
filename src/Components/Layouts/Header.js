import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import Create from "../Exercises/Dialogs/Create";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h4" style={{ flex: 1 }}>
        Menu UI Alpha Build
      </Typography>
      <Create />
    </Toolbar>
  </AppBar>
);
