<script setup lang="ts">
import { LoginForm } from '@/features/auth';
import { UserProfile } from '@/features/users';
</script>

<template>
  <div class="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-50 flex flex-col">
    <!-- Header -->
    <header class="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-4 px-6 sm:px-12 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <!-- Vue logo SVG -->
        <svg class="h-6 w-auto text-emerald-500" viewBox="0 0 128 128" width="24" height="24">
          <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z"/>
          <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76.5l38.4-66.5H78.8z"/>
        </svg>
        <span class="text-zinc-300 dark:text-zinc-700">|</span>
        <span class="text-sm font-semibold tracking-wide uppercase text-zinc-500">Vue Starter Template</span>
      </div>
      <div class="flex gap-4">
        <a
          href="https://vuejs.org/guide/introduction.html"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          Docs
        </a>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 max-w-6xl w-full mx-auto px-6 py-12 sm:px-12 flex flex-col gap-10">
      
      <!-- Intro Hero Section -->
      <section class="text-center sm:text-left flex flex-col gap-3">
        <span class="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-semibold w-max mx-auto sm:mx-0">
          Feature-Driven / Vertical Slicing Architecture
        </span>
        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Vue 3 Starter Template
        </h1>
        <p class="text-zinc-500 dark:text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Project ini distrukturkan menggunakan prinsip <strong>Vertical Slicing</strong>. 
          Setiap fitur utama ditempatkan di dalam folder <code class="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-mono">@/features</code> dengan modul internal yang mandiri, dan hanya diekspos melalui file <code class="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-mono">index.ts</code> di setiap fitur.
        </p>
      </section>

      <!-- Feature Demo Section -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Slice 1: Auth Feature Demo -->
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <h2 class="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              Slice 1: Auth Module
            </h2>
            <span class="text-xs text-zinc-400 font-mono">@/features/auth</span>
          </div>
          <LoginForm />
        </div>

        <!-- Slice 2: Users Feature Demo -->
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <h2 class="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              Slice 2: Users Module
            </h2>
            <span class="text-xs text-zinc-400 font-mono">@/features/users</span>
          </div>
          <UserProfile />
        </div>
      </section>

      <!-- Architectural Explainer -->
      <section class="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col gap-4">
        <h3 class="text-lg font-bold">Struktur Direktori Aktif</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div class="flex flex-col gap-1">
            <span class="font-semibold text-zinc-800 dark:text-zinc-200">1. Routing Layer (`src/router/` & `src/views/`)</span>
            <p class="text-xs text-zinc-500 dark:text-zinc-400">Menangani konfigurasi rute halaman utama dan rendering component view.</p>
          </div>
          <div class="flex flex-col gap-1">
            <span class="font-semibold text-zinc-800 dark:text-zinc-200">2. Vertical Slices (`src/features/`)</span>
            <p class="text-xs text-zinc-500 dark:text-zinc-400">Potongan fitur mandiri (components, store, types) yang saling terisolasi.</p>
          </div>
          <div class="flex flex-col gap-1">
            <span class="font-semibold text-zinc-800 dark:text-zinc-200">3. Shared Core (`src/components/ui`)</span>
            <p class="text-xs text-zinc-500 dark:text-zinc-400">Komponen visual primitif yang dipakai bersama di seluruh aplikasi.</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-6 text-center text-xs text-zinc-400">
      <p>&copy; 2026 Vue 3 Vertical Slicing Starter-FE.</p>
    </footer>
  </div>
</template>
