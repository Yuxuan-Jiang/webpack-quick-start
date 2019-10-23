import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import Create from "../Exercises/Dialogs/Create";

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h4">Exercise database</Typography>
      <Create />
    </Toolbar>
  </AppBar>
);
