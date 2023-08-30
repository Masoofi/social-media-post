import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="missing">
      <h1>Page Not Found</h1>
      <Link to="/" className="missing-link">
        Visit Homepage
      </Link>
    </main>
  );
};

export default Missing;
