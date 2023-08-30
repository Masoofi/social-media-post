import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./context/DataContext";

const Home = () => {
  const { searchResult } = useContext(DataContext);
  return (
    <main className="home">
      {searchResult.length ? (
        <Feed posts={searchResult} />
      ) : (
        <p
          style={{
            padding: "10px 20px",
            color: "red",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          No Posts Available
        </p>
      )}
    </main>
  );
};

export default Home;
