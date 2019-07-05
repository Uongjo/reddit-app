import React, { Component } from "react";
import "./search.css";

class Search extends Component {
  state = {};

  createButtons = () => {
    let buttons = [];
    buttons.push(
      <button id="leftBtn" onClick="onDecrement">
        -
      </button>
    );
    for (let i = 1; i <= Math.ceil(this.props.numPosts / 10); i++) {
      buttons.push(<button key={i}>{i}</button>);
    }
    buttons.push(<button onClick="onIncrement">+</button>);
    console.log(buttons);
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
