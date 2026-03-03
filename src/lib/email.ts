import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  requireTLS: true,
  connectionTimeout: 30000,
  socketTimeout: 30000,
});

export const CABINET_EMAIL = process.env.SMTP_TO_CABINET || '';
export const FROM_SITE = process.env.SMTP_FROM_SITE || process.env.SMTP_USER || '';
export const FROM_CONTACT = process.env.SMTP_FROM_CONTACT || process.env.SMTP_USER || '';
