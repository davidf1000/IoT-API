import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            IoT API
          </Link>
        </h1>
        <ul>
    <li>
        <Link to="/getstarted">Get Started</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
      </nav>
    </div>
  );
};


export default Navbar;
