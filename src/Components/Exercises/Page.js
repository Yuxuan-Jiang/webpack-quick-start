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

export default ({
  exercises,
  Category,
  onSelect,
  Exercise: {
    title = "Welcome!",
    description = "Please select an exercise from the list on the left."
  }
}) => (
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
            <Fragment key={muscles}>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {muscles}
              </Typography>
              <List component="nav" aria-label="exercise-list">
                {exercises.map(({ id, title }) => {
                  return (
                    <ListItem button key={id} onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
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
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1" style={{ marginTop: 10 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
