import React from 'react';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;