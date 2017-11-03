import React from "react";

import FruitBasket from "./FruitBasket";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: null,
      fruit: [],
      filters: []
    };
  }

  componentDidMount() {
    this.fetchFruits();
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch("/api/fruit_types")
      .then(response => response.json())
      .then(filters => {
        this.setState({ filters });
      });
  };

  fetchFruits = () => {
    fetch("/api/fruit")
      .then(response => response.json())
      .then(fruit => {
        this.setState({ fruit });
      });
  };

  handleFilterChange = e => {
    this.setState({ currentFilter: e.target.value });
  };

  render() {
    return (
      <FruitBasket
        updateFilterCallback={this.handleFilterChange}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        fruit={this.state.fruit}
      />
    );
  }
}

export default App;
