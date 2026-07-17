# vue-template

Vue 3 Starter Template yang distrukturkan menggunakan arsitektur **Feature-Driven / Vertical Slicing**. Project ini siap digunakan untuk pengembangan frontend skala menengah hingga besar dengan Pinia state management + persistence, router, linter modern, dan form validation berbasis Zod.

---

## 🚀 Tech Stack

Template ini dibekali dengan modul-modul modern berikut:

### Core Framework
*   **Vue 3 (Composition API)** - Framework progresif untuk membuat UI web modern.
*   **Vue Router 5** - Router resmi Vue untuk SPA (Single Page Application).
*   **TypeScript** - Pengetikan statis yang aman untuk keandalan kode.
*   **Vite 8** - Build tool ultra-cepat untuk web development modern.

### Styling & UI
*   **Tailwind CSS v4** - Framework utility-first CSS tercepat menggunakan directive `@theme` bawaan CSS.
*   **@tailwindcss/vite** - Plugin resmi Tailwind v4 untuk build terintegrasi di Vite.

### State Management & Persistence
*   **Pinia 3** - State management store resmi Vue yang ringan dan terintegrasi dengan TypeScript.
*   **Pinia Plugin Persistedstate** - Menyimpan state Pinia ke LocalStorage secara otomatis dan aman (SSR-ready).

### Validation & Schema
*   **Zod** - Skema validasi data deklaratif yang terintegrasi dengan TypeScript untuk form validation.

### Code Quality (Linting)
*   **ESLint 10 & Prettier** - Standar kualitas kode dan format file otomatis.
*   **Oxlint** - Linter berkinerja tinggi berbasis Rust yang super cepat.

---

## 📂 Struktur Folder (Vertical Slicing)

Arsitektur project ini memisahkan fitur-fitur utama ke dalam potongan mandiri (*Vertical Slices*) di dalam folder `src/features/`, menjaganya tetap terisolasi dan mudah dikelola:

```text
├── src/
│   ├── app.vue               # Komponen root aplikasi
│   ├── main.ts               # Entry point inisialisasi aplikasi (CSS, Router, Pinia)
│   ├── assets/               # File asset statis (CSS global, image, dll)
│   ├── router/               # Konfigurasi navigasi rute halaman utama
│   ├── views/                # Komponen halaman (view layer, e.g. HomeView)
│   ├── features/             # Tempat potongan fitur mandiri (Vertical Slices)
│   │   ├── auth/             # Fitur Authentication (components, store, types)
│   │   │   ├── components/   # UI khusus auth (LoginForm.vue)
│   │   │   ├── store/        # Pinia store khusus auth
│   │   │   └── index.ts      # Public API / Entrypoint fitur auth
│   │   └── users/            # Fitur User (UserProfile.vue, settings, dll)
│   ├── components/           # Komponen global / reusable (ui/ & common/)
│   ├── composables/          # Global custom composables (Vue hooks equivalent)
│   ├── lib/                  # Konfigurasi library & utilities global (e.g. cn)
│   ├── services/             # Konfigurasi global API client / fetcher
│   └── types/                # Tipe data TypeScript global
```

---

## ⚙️ Cara Penggunaan & Setup

Ikuti langkah-langkah di bawah ini untuk memulai project baru menggunakan template ini:

### 1. Clone Repository
Clone template ini ke folder komputer lokal Anda:
```bash
git clone <repository-url> nama-project-anda
cd nama-project-anda
```

### 2. Jalankan Script Setup
Template ini dilengkapi dengan script inisialisasi interaktif untuk menyesuaikan nama project secara otomatis:
```bash
npm run setup
```
*Script ini akan otomatis:*
1. Meminta Anda memasukkan nama project baru.
2. Mengganti semua teks placeholder `vue-template` di file `package.json`, `package-lock.json`, `README.md`, dan `index.html`.
3. Mengatur ulang repository Git baru (menghapus riwayat commit template).
4. Menghapus script setup itu sendiri agar bersih.

### 3. Install Dependencies (Jika belum ter-install)
```bash
npm install
```

### 4. Jalankan Development Server
```bash
npm run dev
```
Buka [http://localhost:5173](http://localhost:5173) pada browser Anda untuk melihat demo modul Auth dan User Profile yang saling tersinkronisasi.

---

## 🛠️ Perintah Terminal Lainnya

*   **Build untuk Production:**
    ```bash
    npm run build
    ```
*   **Linting Kode:**
    ```bash
    npm run lint
    ```
*   **Format Kode:**
    ```bash
    npm run format
    ```
