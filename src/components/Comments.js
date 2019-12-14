import React from "react";
import { Comment, Header } from "semantic-ui-react";

import UserComment from "./UserComment";

function Comments({ comments }) {
  return (
    <div style={{ padding: "20px 0" }}>
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        {comments &&
          comments.map((comment, i) => <UserComment key={i} {...comment} />)}
      </Comment.Group>
    </div>
  );
}

export default Comments;
