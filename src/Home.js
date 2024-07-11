import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to School Registration</h1>
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
