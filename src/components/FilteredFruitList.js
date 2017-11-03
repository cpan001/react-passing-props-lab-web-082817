import React, { Component } from "react";

const FilteredFruitList = props => {
  const newFruits =
    props.filter === "all" || props.filter === null
      ? props.fruit
      : props.fruit.filter(f => f.fruit_type === props.filter);
  return (
    <ul className="fruit-list">
      {newFruits.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
};

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: ""
};

export default FilteredFruitList;
