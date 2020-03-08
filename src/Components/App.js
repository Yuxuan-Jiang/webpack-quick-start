import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { Page } from "./Exercises";
import { Menu } from "../menu";

export default class extends Component {
  state = {
    Menu,
    Cuisine: null,
    Cuisines: {},
    Restaurant: null
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
    this.setState(prevState => ({ Restaurant: restaurant }));
  };

  getRestaurantByCuisine() {
    return Object.entries(this.state.Menu.reduce());
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
    const { Cuisine, Restaurant, Menu } = this.state;
    return (
      <Fragment>
        <Header />
        <Page
          Menu={Menu}
          Cuisine={Cuisine}
          onSelect={this.HandleRestaurantSelection}
          Restaurant={Restaurant}
        />
        <Footer
          CuisineList={Object.keys(Menu)}
          Cuisine={Cuisine}
          onSelect={this.HandleCuisineSelection}
        />
      </Fragment>
    );
  }
}
