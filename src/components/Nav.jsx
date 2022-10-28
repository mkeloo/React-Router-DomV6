import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          type="text"
          id="search"
          placeholder="Search Posts"
          value={search}
          // controlled form input: value is set by state
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
      <ul>
        <li>
          {/* Link tells react to not request link from the server, just route to proper component */}
          <Link to="/">Home</Link>
          <Link to="post">Post</Link>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
