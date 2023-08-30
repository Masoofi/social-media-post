import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const NewPost = () => {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } =
    useContext(DataContext);
  return (
    <main className="new-post">
      <h1>New Post</h1>
      <form className="new-post-form" onSubmit={handleSubmit}>
        <div className="post-title">
          <label htmlFor="postTitle">Title:</label>
          <input
            type="text"
            name="postTitle"
            id="postTitle"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
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
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
