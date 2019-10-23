import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { Page } from "./Exercises";
import { exercises, muscles } from "../store";

export default class extends Component {
  state = {
    exercises,
    Exercise: {}
  };

  HandleCategorySelection = Category => {
    this.setState({
      Category: Category
    });
  };

  HandleExerciseSelection = id => {
    this.setState(prevState => ({
      Exercise: prevState.exercises.find(ex => ex.id === id)
    }));
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
    const { Category, Exercise } = this.state;
    return (
      <Fragment>
        <Header />
        <Page
          exercises={this.getExercisesByMuscle()}
          Category={Category}
          onSelect={this.HandleExerciseSelection}
          Exercise={Exercise}
        />
        <Footer
          muscles={muscles}
          Category={Category}
          onSelect={this.HandleCategorySelection}
        />
      </Fragment>
    );
  }
}
