import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const PostPage = () => {
  const { searchResult, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = searchResult.find((post) => post.id.toString() === id);
  return (
    <main className="post-page">
      <article className="post">
        {post && (
          <>
            <h2 className="post-title">{post.title}</h2>
            <small className="post-date">{post.date}</small>
            <p
              className="post-body"
              style={{ fontSize: "18px", margin: "15px 0px 0px" }}
            >
              {post.body}
            </p>
            <div className="btns">
              <Link to={`/edit/${post.id}`}>
                <button className="btn-edit">Edit Post</button>
              </Link>
              <button
                onClick={() => handleDelete(post.id)}
                className="btn-delete"
              >
                Delete Post
              </button>
            </div>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
