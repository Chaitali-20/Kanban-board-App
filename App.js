import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import UserCard from './UserCard';
import data from './db.json'; // Your provided JSON data

const App = () => {
  const [tickets, setTickets] = useState(data.tickets);

  const updateTicketStatus = (ticketId, newStatus) => {
    const updatedTickets = tickets.map(ticket =>
      ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
    );
    setTickets(updatedTickets);
  };

  // Organize tickets into separate status arrays
  const statusColumns = {
    Backlog: [],
    Todo: [],
    'In progress': [],
    Done: [],
    Cancellation: []
  };

  tickets.forEach(ticket => {
    statusColumns[ticket.status].push(ticket);
  });

  return (
    <div className="kanban-board">
      {Object.entries(statusColumns).map(([status, ticketsInStatus]) => (
        <div key={status} className="column">
          <h2>{status}</h2>
          {ticketsInStatus.map(ticket => (
            <Card key={ticket.id} ticket={ticket} updateStatus={updateTicketStatus} />
          ))}
        </div>
      ))}
      <div className="column">
        <h2>Users</h2>
        {data.users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
