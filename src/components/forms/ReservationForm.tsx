'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function ReservationForm() {
  const t = useTranslations('reservation_page');
  const locale = useLocale();
  const router = useRouter();

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const timeStr =
    now.getHours().toString().padStart(2, '0') +
    ':' +
    now.getMinutes().toString().padStart(2, '0');

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    address: '',
    phone: '',
    date: todayStr,
    time: timeStr,
    note: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push(`/${locale}/reservation/success`);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="reservation-detais form-inner">
        <h3>{t('your_information')}</h3>

        {status === 'error' && (
          <div
            style={{
              background: '#f8d7da',
              color: '#721c24',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '20px',
              borderLeft: '4px solid #dc3545',
            }}
          >
            <strong>Erreur.</strong> Veuillez réessayer.
          </div>
        )}

        <div className="row form-wrap">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder={t('firstname')}
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder={t('lastname')}
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            <input
              type="text"
              name="middlename"
              id="middlename"
              placeholder={t('middlename')}
              value={formData.middlename}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={t('email')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            <input
              type="text"
              name="address"
              id="address"
              placeholder={t('address')}
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            <input
              type="tel"
              name="phone"
              id="phone-no"
              placeholder={t('phone')}
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
            {/* Empty spacer */}
          </div>
          <div className="col-lg-12 col-12 form-group">
            <textarea
              rows={7}
              name="note"
              id="note"
              placeholder={t('case_description')}
              value={formData.note}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="button-primary"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? '...' : t('submit')}
      </button>
    </form>
  );
}
