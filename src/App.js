import React, { Component } from "react";
import Posts from "./components/post";
import "./App.css";
import Search from "./components/search";

class App extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      posts: [],
      pageIndex: 0,
      numPages: 0,
      defaultThumbnail:
        "https://i2.wp.com/www.onetechstop.net/wp-content/uploads/2019/03/Reddit_logo_full_1.png?fit=5000%2C1620&ssl=1"
    };
  }

  updatePosts = async subreddit => {
    const url = "https://www.reddit.com/r/" + subreddit + "/top.json?limit=50";
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
    const numPages = Math.ceil(posts.length / 10);
    this.setState({
      posts,
      numPages
    });
  };

  getPosts = () => {
    let allPosts = [...this.state.posts];
    let startPage = this.state.pageIndex * 10;
    const selectedPosts = allPosts.splice(startPage, startPage + 10);
    return selectedPosts;
  };

  handleSearch = () => {
    let subreddit = document.getElementById("mySearch").value;
    this.updatePosts(subreddit);
  };

  handleIncrement = () => {
    const pageIndex =
      this.state.pageIndex + 1 < this.state.numPages
        ? this.state.pageIndex + 1
        : this.state.pageIndex;
    this.setState({ pageIndex });
    console.log("In handle Increment: ", pageIndex);
  };

  handleDecrement = () => {
    const pageIndex =
      this.state.pageIndex - 1 >= 0
        ? this.state.pageIndex - 1
        : this.state.pageIndex;
    this.setState({ pageIndex });
  };

  handleSetPageIndex = index => {
    this.setState({ pageIndex: index - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Subreddit Post Generator</h1>
        <Search
          onSearch={this.handleSearch}
          numPages={this.state.numPages}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onSetPageIndex={this.handleSetPageIndex}
        />
        <ul>
          {this.getPosts().map(post => (
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
