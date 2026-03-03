'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FaqQuestionForm() {
  const t = useTranslations('faq_page.form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/faq-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 7000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 7000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 7000);
    }
  };

  return (
    <>
      {status === 'success' && (
        <div
          id="faq-message"
          style={{
            display: 'block',
            background: '#d4edda',
            color: '#155724',
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '20px',
            borderLeft: '4px solid #28a745',
          }}
          dangerouslySetInnerHTML={{ __html: t('success_message') }}
        />
      )}
      {status === 'error' && (
        <div
          id="faq-message"
          style={{
            display: 'block',
            background: '#f8d7da',
            color: '#721c24',
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '20px',
            borderLeft: '4px solid #dc3545',
          }}
          dangerouslySetInnerHTML={{ __html: t('error_message') }}
        />
      )}
      <form id="faq-form" onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="name"
            placeholder={t('name')}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <input
            type="email"
            name="email"
            placeholder={t('email')}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <input
            type="tel"
            name="phone"
            placeholder={t('phone')}
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <textarea
            rows={8}
            name="message"
            placeholder={t('message')}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <input
            type="submit"
            className="button-white-border"
            name="submit"
            value={status === 'loading' ? '...' : t('submit')}
            disabled={status === 'loading'}
          />
        </p>
      </form>
    </>
  );
}
