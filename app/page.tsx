'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSimulatedLogin = () => {
    // This is a simulated login for demonstration purposes.
    // In a real application, this would involve actual authentication.
    setIsLoggedIn(true);
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      {isLoggedIn ? (
        <h1 style={{ textAlign: 'center', color: '#333' }}>Welcome to the home page of Abhay Shaguna and Kashvi.</h1>
      ) : (
        <>
          <h1 style={{ textAlign: 'center', color: '#333' }}>Welcome!</h1>
          <p>
            <Link href="/login" style={{ marginRight: '10px', color: '#0070f3', textDecoration: 'none' }}>Login</Link>
            <Link href="/signup" style={{ color: '#0070f3', textDecoration: 'none' }}>Sign Up</Link>
          </p>
          <button
            onClick={handleSimulatedLogin}
            style={{
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: '#28a745',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '20px',
              transition: 'background-color 0.3s ease'
            }}
          >
            Simulate Login
          </button>
        </>
      )}
    </main>
  );
}
