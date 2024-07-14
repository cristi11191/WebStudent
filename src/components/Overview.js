import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { UilTachometerFastAlt } from '@iconscout/react-unicons';
import { fetchCurrentUser } from '../services/apiService';
import '../styles/styles.css';

const Overview = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchCurrentUser();
        setUser(data.user);  // Access the user key in the response object
      } catch (error) {
        setError('Failed to fetch user data');
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="overview">
      <div className="title">
        <UilTachometerFastAlt className="uil uil-tachometer-fast-alt" />
        <span className="text">Dashboard</span>
      </div>
      <div className="boxes">
        <Card className="box box1">
          <Card.Body>
            <div className="info">
              <div className="field">
                <span className="field-name text">Id:</span>
                <span className="field-value">{user.id}</span>
              </div>
              <div className="field">
                <span className="field-name text">Name:</span>
                <span className="field-value">{user.name}</span>
              </div>
              <div className="field">
                <span className="field-name text">Email:</span>
                <span className="field-value">{user.email}</span>
              </div>
            
            </div>
          </Card.Body>
        </Card>

        <Card className="box box2" id="news-box">
          <Card.Body>
            <Card.Title>News</Card.Title>
            {/* Add news content here */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
