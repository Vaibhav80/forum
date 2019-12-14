import React, { Component } from "react";
import _ from "lodash";

import * as db from "../db";
import Comments from "./Comments";

class PostView extends Component {
  state = {
    post: {},
    comments: []
  };

  componentDidMount() {
    const { data } = this.props;
    this.setState({
      post: data,
      comments: this.getPostComments(data.id)
    });
  }

  getPostComments(postId) {
    const postComments = _.filter(db.comments, { postId });
    return postComments || [];
  }

  render() {
    const { post, comments } = this.state;
    const { onBack } = this.props;

    return (
      <div>
        <h3 className="back-link" onClick={onBack}>
          Back to Posts
        </h3>
        <div>
          <h3>{post.title}</h3>
          <label>Posted by {post.username}</label>
          <p style={{ padding: "15px 0" }}>{post.body}</p>
        </div>
        <Comments {...{ comments }} />
      </div>
    );
  }
}

export default PostView;
