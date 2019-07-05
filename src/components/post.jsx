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
          <a href={this.state.url} target="_blank">
            {this.state.id + 1}: {this.state.title}
          </a>
        </h3>
      </div>
    );
  }
}

export default Post;
