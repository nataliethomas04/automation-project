import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <img src="/logo.svg" className="App-logo" alt="logo" />
      <h1>Welcome to the School Registration Portal</h1>
      <nav>
        <ul>
          <li>
            <Link to="/register" className="nav-link">Register New Student</Link>
          </li>
          <li>
            <Link to="/view-class" className="nav-link">View Class</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
