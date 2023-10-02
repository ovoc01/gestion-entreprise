import React from 'react';
import './postContainer.css'
import Post from './post/Post';

function PostContainer() {
  return (
    <div className="postContainer">
      <Post id={1} />
      <Post id={2} />
      <Post id={2} />
    </div>
  );
}

export default PostContainer;
