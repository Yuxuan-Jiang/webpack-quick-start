import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { Page } from "./Exercises";
import { exercises, muscles } from "../store";

export default class extends Component {
  state = {
    exercises
  };

  HandleCategorySelection = Category => {
    this.setState({
      Category: Category
    });
  };

  getExercisesByMuscle() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }

  render() {
    const { Category } = this.state;
    return (
      <Fragment>
        <Header />
        <Page exercises={this.getExercisesByMuscle()} Category={Category} />
        <Footer
          muscles={muscles}
          Category={Category}
          onSelect={this.HandleCategorySelection}
        />
      </Fragment>
    );
  }
}
