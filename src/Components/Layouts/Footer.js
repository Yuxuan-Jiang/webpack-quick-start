import React from "react";
import { Tab, Tabs, Paper } from "@material-ui/core";

export default ({ muscles }) => (
  <Paper>
    <Tabs value={2} indicatorColor="primary" textColor="primary" centered>
      <Tab label={"All"} />
      {muscles.map(group => (
        <Tab label={group} />
      ))}
    </Tabs>
  </Paper>
);
