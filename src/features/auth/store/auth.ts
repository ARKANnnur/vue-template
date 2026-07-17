import { defineStore } from 'pinia';
import type { AuthState, LoginInput } from '@/features/auth/types';

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    loading: false,
    error: null,
  }),
  actions: {
    async login(data: LoginInput) {
      this.loading = true;
      this.error = null;
      try {
        // Simulasi API delay selama 1.2 detik
        await new Promise((resolve) => setTimeout(resolve, 1200));

        if (data.email === 'admin@admin.com' && data.password === 'admin123') {
          this.user = {
            id: '1',
            name: 'Super Admin',
            email: data.email,
            role: 'Administrator',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&h=256&q=80',
          };
          this.token = 'mock-jwt-token-xyz';
        } else if (data.email === 'dev@antigravity.ai' && data.password === 'dev123') {
          this.user = {
            id: '2',
            name: 'Antigravity Developer',
            email: data.email,
            role: 'Lead Architect',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80',
          };
          this.token = 'mock-jwt-token-abc';
        } else {
          throw new Error('Email atau password salah! (Tips: Gunakan dev@antigravity.ai / dev123)');
        }
      } catch (err: any) {
        this.error = err.message || 'Terjadi kesalahan sistem';
        throw err;
      } finally {
        this.loading = false;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.error = null;
      this.loading = false;
    },
    clearError() {
      this.error = null;
    }
  },
  // Menggunakan pinia-plugin-persistedstate untuk sinkronisasi dengan localStorage
  persist: {
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    pick: ['user', 'token'],
  },
});
