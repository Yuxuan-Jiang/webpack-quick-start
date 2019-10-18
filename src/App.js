import React, { Component, Fragment } from "react";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";

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
