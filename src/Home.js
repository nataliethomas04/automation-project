import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>School Registration</h1>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register New Student</Link>
          </li>
          <li>
            <Link to="/view-class">View Class</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
