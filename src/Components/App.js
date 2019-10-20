import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { Page } from "./Exercises";
import { exercises, muscles } from "../store";

export default class extends Component {
  state = {
    exercises,
    chosen: 0
  };

  selectMuscle(chosen) {
    this.setState({
      chosen: 2
    });
  }

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
    return (
      <Fragment>
        <Header />
        <Page exercises={this.getExercisesByMuscle()} />
        <Footer
          muscles={muscles}
          Chosen={this.state.chosen}
          onChange={this.selectMuscle.bind(this)}
        />
      </Fragment>
    );
  }
}
