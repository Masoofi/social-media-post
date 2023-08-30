import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const EditPost = () => {
  const {
    editTitle,
    setEditTitle,
    editBody,
    setEditBody,
    handleEdit,
    searchResult
  } = useContext(DataContext);
  const { id } = useParams();
  const post = searchResult.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);
  return (
    <main className="new-post">
      {editTitle && (
        <>
          <h1>Edit Post</h1>
          <form className="new-post-form" onSubmit={(e) => e.preventDefault()}>
            <div className="post-title">
              <label htmlFor="postTitle">Title:</label>
              <input
                type="text"
                name="postTitle"
                id="postTitle"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
            <div className="post-body">
              <label htmlFor="postBody">Post:</label>
              <textarea
                cols="30"
                rows="10"
                name="postBody"
                id="postBody"
                type="text"
                required
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{ fontSize: "16px" }}
              onClick={() => {
                handleEdit(post.id);
              }}
            >
              Update Post
            </button>
          </form>
        </>
      )}
    </main>
  );
};

export default EditPost;
