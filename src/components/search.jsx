import React, { Component } from "react";
import "./search.css";

class Search extends Component {
  state = {};

  createButtons = () => {
    let buttons = [];
    buttons.push(
      <button
        id="leftBtn"
        key="-"
        onClick={this.props.onDecrement}
        className="pageBtn"
      >
        &laquo;
      </button>
    );
    for (let i = 1; i <= this.props.numPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => this.props.onSetPageIndex(i)}
          className="pageBtn"
        >
          {i}
        </button>
      );
    }
    buttons.push(
      <button key="+" onClick={this.props.onIncrement} className="pageBtn">
        &raquo;
      </button>
    );
    return buttons;
  };

  onEnterSearch = event => {
    if (event.which === 13) {
      event.preventDefault();
      this.props.onSearch();
    }
  };

  render() {
    return (
      <div className="search">
        <form id="myForm">
          <input
            type="search"
            id="mySearch"
            onKeyPress={this.onEnterSearch}
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
