<template>
  <div class="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center p-6">
    <div class="flex flex-col items-center gap-4">
      <!-- Loading Spinner -->
      <div class="relative w-12 h-12">
        <div class="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-800"></div>
        <div class="absolute inset-0 rounded-full border-4 border-zinc-950 dark:border-zinc-50 border-t-transparent animate-spin"></div>
      </div>
      
      <!-- Skeleton text -->
      <div class="space-y-2 text-center">
        <p class="text-sm font-medium text-zinc-800 dark:text-zinc-200">Loading your workspace...</p>
        <p class="text-xs text-zinc-400 dark:text-zinc-500">Mohon tunggu sebentar</p>
      </div>
    </div>
  </div>
</template>
