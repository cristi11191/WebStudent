// LoginForm.js
import React, { useState } from 'react';
import '../styles/login.css'; // Import your CSS file for styling

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate login logic (replace with actual authentication)
        if (email === 'admin' && password === 'admin') {
            setMessage('Logging in...');
            onLogin(); // Call the onLogin callback to update isLoggedIn in parent component
        } else {
            setMessage('Invalid email or password');
        }
        // Clear the form after submission (if needed)
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-form">
            <div className="text">LOGIN</div>
            <form onSubmit={handleSubmit} id="loginForm">
                <div className="field">
                    <div className="fas fa-envelope"></div>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Student Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="field">
                    <div className="fas fa-lock"></div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div id="message">{message}</div>
        </div>
    );
};

export default LoginForm;
