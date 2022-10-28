import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Page not found.</h2>
      <p>Well, that's disappointing.</p>
      <h3>
        <Link to="/">Visit Our HomePage</Link>
      </h3>
    </main>
  );
};

export default Missing;
