import React from 'react';
import '../styles/styles.css';

const Activity = () => {
  return (
    <div className="activity">
      <div className="title">
        <i className="uil uil-clock-three"></i>
        <span className="text">Recent Activity</span>
      </div>
      <div className="activity-data">
        <div className="data names">
          <span className="data-title">Name</span>
          <span className="data-list">Prem Shahi</span>
        </div>
        <div className="data email">
          <span className="data-title">Email</span>
          <span className="data-list">premshahi@gmail.com</span>
        </div>
        <div className="data joined">
          <span className="data-title">Joined</span>
          <span className="data-list">2022-02-12</span>
        </div>
        <div className="data type">
          <span className="data-title">Type</span>
          <span className="data-list">New</span>
        </div>
        <div className="data status">
          <span className="data-title">Status</span>
          <span className="data-list">Liked</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;
