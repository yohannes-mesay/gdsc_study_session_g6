// src/components/Home.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/user/johndoe">User Profile</NavLink>
    </div>
  );
};

export default Home;
