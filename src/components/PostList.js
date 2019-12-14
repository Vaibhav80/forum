import React, { Component } from "react";
import _ from "lodash";

import Post from "./Post";
import UserView from "./UserView";
import { posts, users } from "../db";
import PostView from "./PostView";
import { Header } from "semantic-ui-react";

class PostList extends Component {
  state = {
    open: false,
    data: {},
    postView: false
  };

  getUserDetails(userId) {
    const user = _.find(users, { id: userId });
    return user || {};
  }

  onPostClick(id, data) {
    if (id === "username") {
      this.setState({ open: true, data: this.getUserDetails(data.userId) });
    } else {
      this.setState({ postView: true, data: data });
    }
  }

  onClose() {
    this.setState({ open: false, data: {} });
  }

  onBack() {
    this.setState({ postView: false, data: {} });
  }

  render() {
    const { open, data, postView } = this.state;

    if (postView) {
      const postViewProps = {
        data,
        onBack: () => this.onBack()
      };

      return <PostView {...postViewProps} />;
    }

    const userViewProps = {
      open,
      data,
      onClose: () => this.onClose()
    };

    return (
      <div className="post-list">
        <Header as="h3" dividing>
          Posts
        </Header>
        {posts &&
          posts.map((post, i) => (
            <Post
              key={i}
              {...{ post }}
              onClick={(id, data) => this.onPostClick(id, data)}
            />
          ))}
        <UserView {...userViewProps} />
      </div>
    );
  }
}

export default PostList;
