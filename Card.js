import React from 'react';
import './Card.css'; // Create a CSS file for Card component styling

const Card = ({ ticket, updateStatus, users }) => {
  const handleStatusChange = newStatus => {
    updateStatus(ticket.id, newStatus);
  };

  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <p>Assigned to: {users.find(user => user.id === ticket.userId)?.name}</p>
      <div className="feature-request">
        <button className="feature-button" onClick={() => handleStatusChange('Todo')}>
          <img src="gray-image.png" alt=" " className="gray-image" />
          Feature Request
        </button>
        <button className="three-dots-button">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
