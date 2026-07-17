import axios from 'axios';

// Konfigurasi instance Axios global
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 detik
});

// Request Interceptor: Tempelkan token JWT otomatis ke setiap request
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      // Ambil token dari storage (disesuaikan dengan persist key Pinia)
      const authPersist = localStorage.getItem('auth');
      if (authPersist) {
        try {
          const parsed = JSON.parse(authPersist);
          const token = parsed.token;
          if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        } catch (e) {
          console.error('Error parsing auth token for Axios request:', e);
        }
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Penanganan error terpusat (misal: 401 Unauthorized)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        console.warn('Unauthorized! Redirecting to login...');
        // Opsi: Hapus storage dan redirect ke halaman login
        if (typeof window !== 'undefined') {
          localStorage.removeItem('auth');
          window.location.href = '/';
        }
      }
    }
    return Promise.reject(error);
  }
);
