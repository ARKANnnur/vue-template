import { defineStore } from 'pinia';
import type { AuthState, LoginInput } from '@/features/auth/types';
import { loginApi } from '@/features/auth/services/auth';

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
        const result = await loginApi(data);
        this.user = result.user;
        this.token = result.token;
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
