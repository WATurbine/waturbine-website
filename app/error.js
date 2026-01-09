'use client'

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
      <h1>Something went wrong!</h1>
      <p style={{ margin: '2rem 0', fontSize: '18px' }}>
        We&#39;re sorry, but something unexpected happened.
      </p>
      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
