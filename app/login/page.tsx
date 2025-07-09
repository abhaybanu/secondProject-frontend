'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('https://secondproject-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('User logged-in');
        setIsLoggedIn(true);
      } else {
        setMessage(data.message || 'Login failed');
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Network error or server is not running.');
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setMessage('Logged out successfully.');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ padding: '40px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Login</h1>
        
        {isLoggedIn ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'green', fontSize: '1.2em', marginBottom: '20px' }}>{message}</p>
            <button
              onClick={handleLogout}
              style={{ padding: '12px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#dc3545', color: '#fff', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '16px', color: 'black' }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '16px', color: 'black' }}
            />
            <button
              type="submit"
              style={{ padding: '12px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#0070f3', color: '#fff', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
            >
              Login
            </button>
          </form>
        )}

        {message && !isLoggedIn && <p style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>{message}</p>}

        {!isLoggedIn && (
          <p style={{ textAlign: 'center', marginTop: '20px', color: '#555' }}>
            Don't have an account? <Link href="/signup" style={{ color: '#0070f3', textDecoration: 'none' }}>Sign Up</Link>
          </p>
        )}
      </div>
    </div>
  );
}