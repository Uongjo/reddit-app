import React, { Component } from "react";
import "./post.css";

class Post extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = this.props.data;
    console.log(this.props.defaultThumbnail);
  }

  render() {
    return (
      <div className="postClass">
        <img
          src={
            this.state.thumbnail === "" || this.state.thumbnail === "self"
              ? this.props.defaultThumbnail
              : this.state.thumbnail
          }
        />
        <h3>
          {this.state.id}: {this.state.title}
        </h3>
        <a href={this.state.url} target="_blank">
          <button>See More</button>
        </a>
        <p>updoots: {this.state.upvotes}</p>
      </div>
    );
  }
}

export default Post;
