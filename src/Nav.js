import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="nav">
      <form className="form-search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Post</label>
        <input
          type="text"
          placeholder="Search"
          required
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
