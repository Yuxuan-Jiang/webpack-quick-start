import React from "react";
import { Tab, Tabs, Paper } from "@material-ui/core";

export default ({ CuisineList, Cuisine, onSelect }) => {
  const index = Cuisine
    ? CuisineList.findIndex(CuisineSelected => CuisineSelected === Cuisine) + 1
    : 0;
  const onSelectIndex = (e, CuisineSelected) => {
    return onSelect(CuisineSelected ? CuisineList[CuisineSelected - 1] : "");
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
        {CuisineList.map(Cuisine => (
          <Tab label={Cuisine} key={Cuisine} />
        ))}
      </Tabs>
    </Paper>
  );
};
