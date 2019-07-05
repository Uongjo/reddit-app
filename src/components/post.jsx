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
        <a href={this.state.url} target="_blank">
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
        </a>
      </div>
    );
  }
}

export default Post;
