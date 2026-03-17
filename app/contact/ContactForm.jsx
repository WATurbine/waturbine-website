"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from '@/styles/contactForm.module.css';

export default function ContactForm() {
  // UI state machine: idle -> loading -> success/error.
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const selectedTeam = searchParams.get('team') || '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      // Keep payload keys in sync with app/api/contact/route.js
      name: formData.get('name')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      team: formData.get('team')?.toString().trim() || '',
      message: formData.get('message')?.toString().trim() || '',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      event.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Unable to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label className={styles.formLabel}>
        <span className={styles.labelText}>Name</span>
        <input name="name" type="text" required placeholder="Your name" className={styles.input} />
      </label>
      <label className={styles.formLabel}>
        <span className={styles.labelText}>Email</span>
        <input name="email" type="email" required placeholder="you@example.com" className={styles.input} />
      </label>
      <label className={styles.formLabel}>
        <span className={styles.labelText}>Team of Interest</span>
        <input
          name="team"
          type="text"
          defaultValue={selectedTeam}
          placeholder="Choose a subteam"
          className={styles.input}
        />
      </label>
      <label className={styles.formLabel}>
        <span className={styles.labelText}>Message</span>
        <textarea name="message" required placeholder="How can we help?" rows={5} className={styles.textarea} />
      </label>
      <button type="submit" disabled={status === 'loading'} className={styles.submitBtn}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className={styles.successMessage}>Message sent! We will get back to you soon.</p>}
      {status === 'error' && <p className={styles.errorMessage}>{error}</p>}
    </form>
  );
}
