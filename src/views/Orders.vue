<template>
  <div class="space-y-8">
    <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h1 class="text-3xl font-semibold text-white">My Orders</h1>
      <p class="mt-2 text-slate-400">Track your recent purchases and order statuses.</p>
    </div>
    <div class="space-y-4">
      <div class="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-300">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.24em] text-primary">Order #11234</p>
            <h2 class="text-lg font-semibold text-white">Delivered</h2>
            <p class="text-sm text-slate-400">Aug 5, 2026 · 3 items</p>
          </div>
          <div class="text-right text-white">
            <p class="text-lg font-semibold">R12,492</p>
          </div>
        </div>
      </div>
      <div class="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-300">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.24em] text-primary">Order #11233</p>
            <h2 class="text-lg font-semibold text-white">Processing</h2>
            <p class="text-sm text-slate-400">Aug 1, 2026 · 2 items</p>
          </div>
          <div class="text-right text-white">
            <p class="text-lg font-semibold">R8,150</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
