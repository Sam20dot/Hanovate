import React from 'react';
import { useAuth } from '../hooks/useAuth'; // Ensure correct path
import { Link } from 'react-router-dom';
import '../style/Dashboard.css'; // Optional: Add CSS styles

const Dashboard = () => {
  const { user } = useAuth() || {}; // Handle case where useAuth might be undefined

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user ? user.displayName : "User"}!</h1>
      <p>Your one-stop platform for smart farming solutions.</p>
      
      <div className="navigation-links">
        <Link to="/add-device" className="nav-link">Add Device</Link>
        <Link to="/marketplace" className="nav-link">Marketplace</Link>
        <Link to="/learn" className="nav-link">Learn</Link>
        <Link to="/community" className="nav-link">Community</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
      </div>
    </div>
  );
};

export default Dashboard;