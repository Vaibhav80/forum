import React from "react";
import { Segment } from "semantic-ui-react";

function Post({ post, onClick }) {
  const onPostClick = event => {
    onClick(event.target.id, post);
  };

  return (
    <div className="post" onClick={onPostClick}>
      <Segment>
        <label className="title">{post.title}</label>
        <br />
        <label>
          By 
          <span id="username" className="user-name" onClick={onPostClick}>
            {post.username}
          </span>
        </label>
      </Segment>
    </div>
  );
}

export default Post;
