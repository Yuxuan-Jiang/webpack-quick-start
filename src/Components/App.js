import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { Page } from "./Exercises";
import { exercises, muscles } from "../store";

export default class extends Component {
  states = {
    exercises
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Page />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
