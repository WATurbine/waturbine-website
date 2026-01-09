import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found',
};

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '120px', margin: 0 }}>404</h1>
      <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '2rem', fontSize: '18px' }}>
        Sorry, we couldn&#39;t find the page you&#39;re looking for.
      </p>
      <Link href="/">
        <button>Go back home</button>
      </Link>
    </div>
  );
}
