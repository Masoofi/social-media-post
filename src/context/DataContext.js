import { createContext, useEffect, useState } from "react";
import Nav from "../Nav";
import NewPost from "../NewPost";
import PostPage from "../PostPage";
import Feed from "../Feed";
import { format } from "date-fns";
import api from '../api/posts';
import EditPost from "../EditPost";
import useWindowSize from "../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const navigate = useNavigate();
  const { width } = useWindowSize();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPost(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = post.length ? post[post.length - 1].id + 1 : 1;
    const date = format(new Date(), "MMM dd,yyyy pp");
    const newPost = { id, title: postTitle, date, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPost = [...post, response.data];
      setPost(allPost);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = post.filter((post) => post.id !== id);
      setPost(postList);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleEdit = async (id) => {
    const date = format(new Date(), "MMM dd,yyyy pp");
    const updatedPost = { id, title: editTitle, date, body: editBody };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPost(
        post.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    const filterResults = post.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filterResults.reverse());
  }, [post, search]);
  return (
    <DataContext.Provider
      value={{
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        handleEdit,
        post,
        width,
        search,
        setSearch,
        handleSubmit,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        handleDelete,
        searchResult
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
