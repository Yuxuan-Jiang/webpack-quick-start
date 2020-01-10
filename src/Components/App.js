import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { Page } from "./Exercises";
import { exercises, muscles } from "../store";
import { menu } from "../menu";

export default class extends Component {
  state = {
    exercises,
    Exercise: {},
    menu,
    Cuisines: {}
  };

  HandleCategorySelection = Category => {
    this.setState({
      Category: Category
    });
  };

  HandleCuisineSelection = Cuisine => {
    this.setState({
      Cuisine: Cuisine
    });
  };

  HandleExerciseSelection = id => {
    this.setState(prevState => ({
      Exercise: prevState.exercises.find(ex => ex.id === id)
    }));
  };

  HandleRestaurantSelection = restaurant => {
    this.setState(prevState => ({}));
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
    const { Cuisine, Restaurant, Menu } = this.state;
    return (
      <Fragment>
        <Header />
        <Page
          Menu={Menu}
          Cuisine={Cuisine}
          onSelect={this.HandleExerciseSelection}
          Restaurant={Restaurant}
        />
        <Footer
          CusineList={Menu.key()}
          Cuisine={Cuisine}
          onSelect={this.HandleCuisineSelection}
        />
      </Fragment>
    );
  }
}
