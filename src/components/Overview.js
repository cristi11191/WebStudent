import React from 'react';
import '../styles/styles.css';
import { UilTachometerFastAlt } from '@iconscout/react-unicons';

const Overview = () => {
  return (
    <div className="overview">
      <div className="title">
        <UilTachometerFastAlt className="uil uil-tachometer-fast-alt"></UilTachometerFastAlt>
        <span className="text">Dashboard</span>
      </div>
      <div className="boxes">
        <div className="box box1">
          <div className="photo">
            <img src="path_to_photo.jpg" alt="Profile Photo" />
            <button className="edit-button">Edit Photo</button>
          </div>
          <div className="info">
            <div className="field">
              <span className="field-name text">Name:</span>
              <span className="field-value">John Bond</span>
            </div>
            <div className="field">
              <span className="field-name text">Birth Date:</span>
              <span className="field-value">1990-01-01</span>
            </div>
            <div className="field">
              <span className="field-name text">Birth City:</span>
              <span className="field-value">New York</span>
            </div>
            <div className="field">
              <span className="field-name text">City:</span>
              <span className="field-value">Los Angeles</span>
            </div>
            <div className="field">
              <span className="field-name text">Address:</span>
              <span className="field-value">123 Main St</span>
            </div>
            <div className="field">
              <span className="field-name text">Phone Number:</span>
              <span className="field-value">123-456-7890</span>
            </div>
          </div>
        </div>

<div className="box box2" id="news-box">
  
</div>

      </div>
    </div>
  );
};

export default Overview;
