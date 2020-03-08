import React, { Component, Fragment } from "react";
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

export default class extends Component {
  render() {
    const { Menu, Cuisine, onSelect, Restaurant } = this.props;
    let CuisineList;
    if (Cuisine) CuisineList = [Cuisine];
    else CuisineList = Object.keys(Menu);

    return (
      <Grid container>
        <Grid item sm>
          <Paper
            style={{
              ...styles.Paper,
              marginRight: 10
            }}
          >
            {CuisineList.map(Cuisine => (
              <Fragment key={Cuisine}>
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize" }}
                >
                  {Cuisine}
                </Typography>
                <List component="nav" aria-label="exercise-list">
                  {Object.entries(Menu[Cuisine]).map(([key, restaurant]) => {
                    return (
                      <ListItem
                        button
                        key={key}
                        onClick={() => onSelect(restaurant)}
                      >
                        <ListItemText primary={restaurant["name"]} />
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
              ...styles.Paper,
              marginLeft: 10
            }}
          >
            {Restaurant && (
              <a href={Restaurant.domainName}>{Restaurant.name}</a>
            )}
            <br></br>
            <br></br>
            {Restaurant &&
              Restaurant.menuUrls.map(url => {
                return (
                  <Fragment>
                    <a href={url}>{url}</a>
                    <br></br>
                  </Fragment>
                );
              })}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
