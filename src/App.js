import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import { useEffect, useState } from "react";
import Feed from "./Feed";
import { format } from "date-fns";
import api from "./api/posts";
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;