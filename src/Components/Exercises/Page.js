import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

export default ({ exercises }) => (
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
        {exercises.map(([muscles, exercises]) => (
          <Fragment>
            <Typography
              variant="subtitle1"
              style={{ textTransform: "capitalize" }}
            >
              {muscles}
            </Typography>
            <List component="nav" aria-label="secondary mailbox folder">
              {exercises.map(exercise => {
                return (
                  <ListItem button>
                    <ListItemText primary={exercise.id} />
                  </ListItem>
                );
              })}
            </List>
          </Fragment>
        ))}
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
