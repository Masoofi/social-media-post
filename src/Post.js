import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link to={`post/${post.id}`}>
        <h2 className="post-title">{post.title}</h2>
        
      </Link>
      <p
        className="post-body"
        style={{ fontSize: "18px", margin: "15px 0px 0px" }}
      >
        {post.body.length <= 40 ? post.body : `${post.body.slice(0, 40)}...`}
      </p>
    </article>
  );
};

export default Post;
