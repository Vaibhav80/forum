import React from "react";
import { Comment } from "semantic-ui-react";

function UserComment({ name, body, email }) {
  return (
    <div style={{ paddingBottom: 20 }}>
      <Comment>
        <Comment.Content>
          <Comment.Author as="a">{email}</Comment.Author>
          <Comment.Text>
            <span style={{ fontWeight: 500 }}>Subject:</span> {name}
          </Comment.Text>
          <Comment.Text>{body}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </div>
  );
}

export default UserComment;
