import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="top-clubs">
        <h3>Top Performing Clubs</h3>
        <ul>
          <li>Kochi Tigers SC - 35 Wins</li>
          <li>Malappuram FC - 30 Wins</li>
          <li>Kochi Dunkers - 28 Wins</li>
        </ul>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <button className="btn-light">Register Your Club</button>
        <button className="btn-light">Register as Player</button>
        <button className="btn-light">Create Tournament</button>
        <button className="btn-light">Register for Tournament</button>
      </div>
    </div>
  );
};

export default Sidebar;