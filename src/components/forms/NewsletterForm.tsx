'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';

const messages = {
  fr: {
    error: 'Veuillez entrer une adresse email valide.',
    success: 'Merci ! Vous êtes maintenant inscrit à notre newsletter.',
  },
  en: {
    error: 'Please enter a valid email address.',
    success: 'Thank you! You are now subscribed to our newsletter.',
  },
};

export default function NewsletterForm({ placeholder, submitLabel }: { placeholder: string; submitLabel: string }) {
  const locale = useLocale() as 'fr' | 'en';
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@') || !email.includes('.')) {
      setMessage({ text: messages[locale].error, type: 'error' });
      return;
    }

    setMessage({ text: messages[locale].success, type: 'success' });
    setEmail('');
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <>
      {message && (
        <div
          id="newsletter-message"
          style={{
            display: 'block',
            background: message.type === 'success' ? '#d4edda' : '#f8d7da',
            color: message.type === 'success' ? '#155724' : '#721c24',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '15px',
            borderLeft: `4px solid ${message.type === 'success' ? '#28a745' : '#dc3545'}`,
          }}
        >
          <i className="fas fa-check-circle" /> {message.text}
        </div>
      )}
      <form className="footer-email-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="footer-email-btn" title={submitLabel}>
            <i className="fas fa-paper-plane" />
          </button>
        </div>
      </form>
    </>
  );
}
