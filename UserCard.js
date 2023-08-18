import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Status: {user.available ? 'Available' : 'Not Available'}</p>
    </div>
  );
};

export default UserCard;
