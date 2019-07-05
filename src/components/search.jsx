import React, { Component } from "react";
import "./search.css";

class Search extends Component {
  state = {};

  createButtons = () => {
    let buttons = [];
    buttons.push(
      <button id="leftBtn" key="-" onClick={this.props.onDecrement}>
        -
      </button>
    );
    for (let i = 1; i <= this.props.numPages; i++) {
      buttons.push(
        <button key={i} onClick={() => this.props.onSetPageIndex(i)}>
          {i}
        </button>
      );
    }
    buttons.push(
      <button key="+" onClick={this.props.onIncrement}>
        +
      </button>
    );
    return buttons;
  };

  render() {
    return (
      <div className="search">
        <form id="myForm">
          <input
            type="search"
            id="mySearch"
            placeholder="Insert Subreddit here"
          />
        </form>
        <button onClick={this.props.onSearch}>Search</button>
        {this.createButtons()}
      </div>
    );
  }
}

export default Search;
