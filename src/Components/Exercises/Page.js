import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 700,
    overflowY: "auto"
  }
};

export default ({ exercises, Category }) => (
  <Grid container>
    <Grid item sm>
      <Paper
        style={{
          ...styles.Paper,
          marginRight: 10
        }}
      >
        {exercises.map(([muscles, exercises]) =>
          !Category || Category === muscles ? (
            <Fragment key={muscles + "-0"}>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {muscles}
              </Typography>
              <List component="nav" aria-label="exercise-list">
                {exercises.map(exercise => {
                  return (
                    <ListItem button key={exercise.id}>
                      <ListItemText primary={exercise.id} />
                    </ListItem>
                  );
                })}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper
        style={{
          ...styles.Paper,
          marginLeft: 10
        }}
      >
        <Typography variant="h4">Welcome!</Typography>
        <Typography variant="subtitle1" style={{ marginTop: 10 }}>
          Please select an exercise from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
