// Exercise 2: Set It Up
  // write a functional component
  // make it a ul with a class name of Header
  // make four li: GDInsta, Home, About, Profile
  // put class name of Logo on the li element with GDInsta
  // export the component!

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul className="Header">
      <li className="Logo">
        GDInsta
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
};

export default Header;
