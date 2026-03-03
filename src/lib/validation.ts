import { z } from 'zod';

export const reservationSchema = z.object({
  firstname: z.string().min(1).max(100),
  lastname: z.string().min(1).max(100),
  middlename: z.string().max(100).optional().default(''),
  email: z.string().email(),
  address: z.string().min(1).max(500),
  phone: z.string().min(5).max(20),
  date: z.string().min(1),
  time: z.string().min(1),
  note: z.string().max(5000).optional().default(''),
});

export const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(5000),
});

export const faqQuestionSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().min(5).max(20),
  message: z.string().min(1).max(5000),
});
