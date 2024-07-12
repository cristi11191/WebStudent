import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import './styles/styles.css';

const App = () => {
    

    return (
        <div className="app">
                    <Navbar />
                    <Dashboard />
        </div>
    );
};

export default App;