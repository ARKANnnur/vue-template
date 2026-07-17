import { apiClient } from '@/services/apiClient';
import type { LoginInput, User } from '../types';

export async function loginApi(data: LoginInput): Promise<{ user: User; token: string }> {
  // === INTEGRASI API ASLI (Uncomment jika API Backend sudah siap) ===
  // const response = await apiClient.post<{ user: User; token: string }>('/auth/login', data);
  // return response.data;

  // === MOCK API DEMO ===
  await new Promise((resolve) => setTimeout(resolve, 1200));

  if (data.email === 'admin@admin.com' && data.password === 'admin123') {
    return {
      user: {
        id: '1',
        name: 'Super Admin',
        email: data.email,
        role: 'Administrator',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&h=256&q=80',
      },
      token: 'mock-jwt-token-xyz',
    };
  } else if (data.email === 'user@example.com' && data.password === 'user123') {
    return {
      user: {
        id: '2',
        name: 'John Doe',
        email: data.email,
        role: 'Software Engineer',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80',
      },
      token: 'mock-jwt-token-abc',
    };
  } else {
    throw new Error('Email atau password salah! (Tips: Gunakan user@example.com / user123)');
  }
}
