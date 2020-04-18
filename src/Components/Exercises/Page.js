import React, { Component, Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link
} from "@material-ui/core";
import DataBar from "./DataBar"

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
        <Grid item xs={4}>
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
        <Grid item xs={8}>
          <Paper
            style={{
              ...styles.Paper,
              marginLeft: 10
            }}
          >
            {Restaurant && (
              <Typography variant="h2">
                <Link href={Restaurant.domainName} >
                  {Restaurant.name}
                </Link>
              </Typography>
            )}
            <br></br>
            <br></br>
            {Restaurant &&
              Restaurant.menuUrls.map(url => {
                return (
                  <Fragment>
                    <DataBar url={url.replace("'", "")} name={url}></DataBar>
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
