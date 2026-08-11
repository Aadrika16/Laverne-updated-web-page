import React from 'react';
import './index.css';
import { FiDisc, FiFeather, FiUsers, FiEdit3 } from 'react-icons/fi';

const Stats = () => {
  return (
    <div className="stats-section">
      <div className="stat-item">
        <FiDisc className="stat-icon" />
        <div>
          <h3>15+</h3>
          <p>Years of Craftsmanship</p>
        </div>
      </div>
      <div className="stat-item">
        <FiFeather className="stat-icon" />
        <div>
          <h3>100%</h3>
          <p>Sustainably Sourced</p>
        </div>
      </div>
      <div className="stat-item">
        <FiUsers className="stat-icon" />
        <div>
          <h3>3500+</h3>
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="stat-item">
        <FiEdit3 className="stat-icon" />
        <div>
          <h3>40+</h3>
          <p>Master Artisans</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;