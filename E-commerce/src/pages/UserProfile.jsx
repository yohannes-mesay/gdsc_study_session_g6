// src/components/UserProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();

  return (
    <div>
      <h2>User Profile Page</h2>
      <p>Username: {username}</p>
    </div>
  );
};

export default UserProfile;
