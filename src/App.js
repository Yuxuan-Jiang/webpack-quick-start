import React, { Component, Fragment } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
    );
  }
}
