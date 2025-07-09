'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('https://secondproject-backend.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        router.push('/login'); // Redirect to login page after successful signup
      } else {
        setMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('Network error or server is not running.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ padding: '40px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Sign Up</h1>
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
            Sign Up
          </button>
        </form>
        {message && <p style={{ textAlign: 'center', marginTop: '20px', color: message.includes('failed') || message.includes('error') ? 'red' : 'green' }}>{message}</p>}
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#555' }}>
          Already have an account? <a href="/login" style={{ color: '#0070f3', textDecoration: 'none' }}>Login here</a>
        </p>
      </div>
    </div>
  );
}
