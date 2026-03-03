'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const t = useTranslations('contact_page');
  const locale = useLocale();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
    privacy: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, privacy: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (res.ok) {
        router.push(`/${locale}/contact-success`);
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
    <div className="contact-from-wrap">
      <h3 className="form-title">{t('form_title')}</h3>
      <p className="form-subtitle">{t('form_subtitle')}</p>

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
          <strong>{t('error_title')}</strong> {t('error_retry')}
        </div>
      )}

      <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder={t('form_name')}
            required
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t('form_email')}
                required
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={t('form_phone')}
                required
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="subject"
            placeholder={t('form_subject')}
            required
            className="form-control"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <select
            name="service"
            className="form-control"
            required
            value={formData.service}
            onChange={handleChange}
          >
            <option value="" disabled>
              {t('service_select')}
            </option>
            <option value="affaires">{t('service_business')}</option>
            <option value="minier">{t('service_mining')}</option>
            <option value="ohada">{t('service_ohada')}</option>
            <option value="assurances">{t('service_insurance')}</option>
            <option value="immobilier">{t('service_real_estate')}</option>
            <option value="droits-homme">{t('service_human_rights')}</option>
            <option value="ecommerce">{t('service_ecommerce')}</option>
            <option value="pret">{t('service_banking')}</option>
            <option value="corporatif">{t('service_agricultural')}</option>
            <option value="autre">{t('service_other')}</option>
          </select>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            rows={6}
            placeholder={t('form_message')}
            required
            className="form-control"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="privacyCheck"
            required
            checked={formData.privacy}
            onChange={handleCheckbox}
          />
          <label className="form-check-label" htmlFor="privacyCheck">
            {t('privacy_consent')}{' '}
            <a href={`/${locale}/legal-notice`} target="_blank" rel="noopener noreferrer">
              {t('privacy_policy')}
            </a>
          </label>
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={status === 'loading'}
          >
            <i className="fas fa-paper-plane" /> {status === 'loading' ? '...' : t('submit_btn')}
          </button>
        </div>
      </form>

      <div className="alternative-contact mt-4">
        <h6>{t('alternative_contact')}</h6>
        <p>
          <small>
            <i className="fas fa-info-circle" /> {t('urgent_info')}{' '}
            <a href="tel:+243995482416" className="urgent-link">
              +243 995 482 416
            </a>
          </small>
        </p>
      </div>
    </div>
  );
}
