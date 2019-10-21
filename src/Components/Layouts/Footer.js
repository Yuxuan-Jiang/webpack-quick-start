import React from "react";
import { Tab, Tabs, Paper } from "@material-ui/core";

export default ({ muscles, Category, onSelect }) => {
  const index = Category
    ? muscles.findIndex(muscle => muscle === Category) + 1
    : 0;
  const onSelectIndex = (e, Category) => {
    return onSelect(Category ? muscles[Category - 1] : "");
  };
  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={onSelectIndex}
      >
        <Tab label={"All"} />
        {muscles.map(group => (
          <Tab label={group} key={group} />
        ))}
      </Tabs>
    </Paper>
  );
};
