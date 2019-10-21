import React from "react";
import { Tab, Tabs, Paper } from "@material-ui/core";

export default ({ muscles, Chosen, onChange }) => (
  <Paper>
    <Tabs
      value={Chosen}
      indicatorColor="primary"
      textColor="primary"
      centered
      onChange={onChange}
    >
      <Tab label={"All"} />
      {muscles.map(group => (
        <Tab label={group} key={group} />
      ))}
    </Tabs>
  </Paper>
);
