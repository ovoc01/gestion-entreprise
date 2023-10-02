import React from "react";
import "./postContainer.css";
import Post from "./post/Post";
import PostFilter from "../postFilter/PostFilter";
function PostContainer() {
  return (
    <>
      <div className="post_body">
        <PostFilter />
        <div className="postContainer">
          <Post id={1} />
          <Post id={2} />
          <Post id={2} />
          <Post id={2} />
          <Post id={2} />
          <Post id={2} />
          <Post id={2} />
          <Post id={2} />
        </div>
      </div>
    </>
  );
}

export default PostContainer;
