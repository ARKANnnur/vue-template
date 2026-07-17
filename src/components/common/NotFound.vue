<template>
  <div class="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
    <div class="max-w-md w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-sm flex flex-col items-center gap-6">
      
      <!-- 404 Status badge -->
      <span class="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-mono font-bold">
        404 - Not Found
      </span>

      <div class="space-y-2">
        <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-50">Halaman Tidak Ditemukan</h2>
        <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan ke alamat lain.
        </p>
      </div>

      <RouterLink
        to="/"
        class="w-full px-4 py-2.5 text-sm font-semibold bg-zinc-950 hover:bg-zinc-900 text-white dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:text-zinc-950 rounded-lg transition text-center"
      >
        Kembali ke Beranda
      </RouterLink>
    </div>
  </div>
</template>
