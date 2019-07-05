import React, { Component } from "react";
import Posts from "./components/post";
import "./App.css";
import Search from "./components/search";

/*
To do list: 

Form input

Parse input and make API call

Create Post component

link post component with App.js
*/

class App extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      posts: [],
      defaultThumbnail:
        "https://i2.wp.com/www.onetechstop.net/wp-content/uploads/2019/03/Reddit_logo_full_1.png?fit=5000%2C1620&ssl=1"
    };
  }

  updatePosts = async subreddit => {
    const url = "https://www.reddit.com/r/" + subreddit + "/top.json?limit=50";
    console.log("URL: ", url);
    const response = await fetch(url);
    const body = await response.json();
    const subredditPosts = body.data.children;
    let currentID = 1;
    let posts = [];
    this.setState({ posts });
    subredditPosts.map(currentPost =>
      posts.push({
        id: currentID++,
        title: currentPost.data.title,
        url: "https://www.reddit.com" + currentPost.data.permalink,
        thumbnail: currentPost.data.thumbnail,
        text: currentPost.data.selftext
      })
    );
    console.log("Posts", posts);
    this.setState({ posts });
  };

  handleSearch = () => {
    let subreddit = document.getElementById("mySearch").value;
    this.updatePosts(subreddit);
  };

  handleIncrement = () => {};

  handleDecrement = () => {};

  render() {
    return (
      <React.Fragment>
        <h1>Subreddit Post Generator</h1>
        <Search
          onSearch={this.handleSearch}
          numPosts={this.state.posts.length}
        />
        <ul>
          {this.state.posts.map(post => (
            <Posts
              key={post.id}
              data={post}
              defaultThumbnail={this.state.defaultThumbnail}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
