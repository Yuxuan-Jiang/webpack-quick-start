import React from "react";
import { Grid, Paper } from "@material-ui/core";

export default props => (
  <Grid container>
    <Grid item sm>
      <Paper
        style={{
          padding: 20,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10
        }}
      >
        left
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper
        style={{
          padding: 20,
          marginLeft: 10,
          marginTop: 10,
          marginBottom: 10
        }}
      >
        Right
      </Paper>
    </Grid>
  </Grid>
);
