<script setup lang="ts">
import { reactive, onUnmounted } from 'vue';
import { useAuthStore } from '@/features/auth/store/auth';
import { loginSchema } from '@/features/auth/types';

const authStore = useAuthStore();

const form = reactive({
  email: '',
  password: '',
});

const errors = reactive({
  email: '',
  password: '',
});

const validateForm = () => {
  errors.email = '';
  errors.password = '';
  
  const result = loginSchema.safeParse(form);
  
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as 'email' | 'password';
      if (field) {
        errors[field] = issue.message;
      }
    });
    return false;
  }
  return true;
};

const handleSubmit = async () => {
  if (!validateForm()) return;
  
  try {
    await authStore.login(form);
  } catch (err) {
    // Error ditangani oleh authStore
  }
};

const handleLogout = () => {
  authStore.logout();
  form.email = '';
  form.password = '';
};

// Bersihkan error auth saat form unmount
onUnmounted(() => {
  authStore.clearError();
});
</script>

<template>
  <div v-if="authStore.user" class="p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 rounded-2xl text-center flex flex-col items-center gap-2">
    <p class="text-emerald-600 dark:text-emerald-400 font-medium">🎉 Login Berhasil! (State: Pinia)</p>
    <p class="text-sm text-zinc-500 dark:text-zinc-400">
      Selamat datang kembali, <strong>{{ authStore.user.name }}</strong>!
    </p>
    <button 
      @click="handleLogout"
      class="mt-4 px-4 py-2.5 text-xs font-semibold bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-lg hover:opacity-90 transition w-full max-w-[120px]"
    >
      Logout
    </button>
  </div>

  <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-4 p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl shadow-sm">
    <div>
      <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Sign In (Auth Feature Example)</h3>
      <p class="text-xs text-zinc-500 dark:text-zinc-400">
        Menggunakan Composition API + Zod + Pinia
      </p>
    </div>

    <div v-if="authStore.error" class="p-3.5 text-xs bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 rounded-lg">
      {{ authStore.error }}
    </div>

    <!-- Email Input -->
    <div class="flex flex-col gap-1.5">
      <label class="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Email Address</label>
      <input
        v-model="form.email"
        type="email"
        placeholder="you@example.com"
        :class="[
          'px-3.5 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-900/50 border rounded-lg focus:outline-none focus:ring-2 transition',
          errors.email 
            ? 'border-red-300 focus:ring-red-500/30 dark:border-red-800' 
            : 'border-zinc-200 focus:ring-black dark:focus:ring-white dark:border-zinc-800'
        ]"
      />
      <span v-if="errors.email" class="text-[11px] text-red-500 font-medium">{{ errors.email }}</span>
    </div>

    <!-- Password Input -->
    <div class="flex flex-col gap-1.5">
      <label class="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Password</label>
      <input
        v-model="form.password"
        type="password"
        placeholder="••••••••"
        :class="[
          'px-3.5 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-900/50 border rounded-lg focus:outline-none focus:ring-2 transition',
          errors.password 
            ? 'border-red-300 focus:ring-red-500/30 dark:border-red-800' 
            : 'border-zinc-200 focus:ring-black dark:focus:ring-white dark:border-zinc-800'
        ]"
      />
      <span v-if="errors.password" class="text-[11px] text-red-500 font-medium">{{ errors.password }}</span>
    </div>

    <button
      type="submit"
      :disabled="authStore.loading"
      class="w-full mt-2 py-2.5 text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
    >
      <span v-if="authStore.loading" class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
      <span>{{ authStore.loading ? 'Signing in...' : 'Sign In' }}</span>
    </button>

    <div class="mt-2 text-center">
      <p class="text-[10px] text-zinc-400">
        Uji coba dengan: <code class="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded font-mono">dev@antigravity.ai</code> dan pass: <code class="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded font-mono">dev123</code>
      </p>
    </div>
  </form>
</template>
