import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { Page } from "./Exercises";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Page />
        <Footer />
      </Fragment>
    );
  }
}
