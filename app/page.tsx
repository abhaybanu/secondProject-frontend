import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <h1>Welcome!</h1>
      <p>
        <Link href="/login" style={{ marginRight: '10px', color: '#0070f3', textDecoration: 'none' }}>Login</Link>
        <Link href="/signup" style={{ color: '#0070f3', textDecoration: 'none' }}>Sign Up</Link>
      </p>
    </main>
  );
}