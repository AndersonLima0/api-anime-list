import React from "react";

import "./Navbar.css";

export const Navbar = ({ handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit(e.target.value);
  };

  return (
    <div className="header">
      <h1>MyAnimeList</h1>
      <div className="search-box">
        <input
          type="search"
          placeholder="Search your anime"
          onChange={submit}
        />
      </div>
    </div>
  );
};
