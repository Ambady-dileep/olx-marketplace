import { z } from 'zod';

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters long' })
      .regex(/^[A-Za-z ]+$/, 'Name must contain only letters and spaces'),

    email: z.string().email({ message: 'Invalid email address' }),

    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),

    confirmPassword: z
      .string()
      .min(6, { message: 'Please confirm your password' }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const productSchema = z.object({
  name: z
    .string()
    .min(3, 'Product name must be at least 3 characters.')
    .regex(/^[A-Za-z ]+$/, 'Name must contain only letters and spaces'),
  price: z.number('Price is required').min(1, 'Price must be at least 1'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters.'),
  address: z
    .string()
    .min(5, 'Address must be at least 5 characters.')
    .regex(/^[A-Za-z ]+$/, 'Address must contain only letters and spaces'),
  file: z.any().refine(file => file?.length > 0, 'Image is required'),
});





