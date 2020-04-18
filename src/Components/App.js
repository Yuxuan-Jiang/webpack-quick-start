import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { Page, ExpandSearch } from "./Exercises";
//import { Menu } from "../menu";

export default class extends Component {
  state = {
    Menu: {},
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

  getCuisine = search_string => {
    let body = {
      passwort: "yuxuan@wtm1920",
      user: "apitester",
      search_string: search_string
    }

    fetch(
      "https://getmenu.info/restaurant_urls", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(
      //response => (response.json())
      response => response.json().then(result => {
        this.setState(prevState => (prevState.Menu[search_string] = result))
      })
    ).catch(error => this.setState({ error, isLoading: false }));

  }

  clearData = () => {
    this.setState({ Menu: {} })
  }

  render() {
    const { Cuisine, Restaurant, Menu } = this.state;
    console.log(this.state.Menu)
    return (
      <Fragment>
        <script src="https://unpkg.com/regenerator-runtime@0.13.1/runtime.js"></script>
        <Header />
        <ExpandSearch
          handleSearch={this.getCuisine}
          handleClear={this.clearData}
        />
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
