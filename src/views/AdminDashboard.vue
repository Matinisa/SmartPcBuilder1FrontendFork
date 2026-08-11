<template>
  <div class="space-y-8">
    <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h1 class="text-3xl font-semibold text-white">Admin Dashboard</h1>
      <p class="mt-2 text-slate-400">A frontend-only admin workspace for products, orders, and users.</p>
    </div>
    <div class="grid gap-6 xl:grid-cols-4">
      <div class="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-300">
        <p class="text-sm uppercase tracking-[0.24em] text-primary">Total Orders</p>
        <p class="mt-4 text-3xl font-semibold text-white">128</p>
      </div>
      <div class="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-300">
        <p class="text-sm uppercase tracking-[0.24em] text-primary">Revenue</p>
        <p class="mt-4 text-3xl font-semibold text-white">R452K</p>
      </div>
      <div class="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-300">
        <p class="text-sm uppercase tracking-[0.24em] text-primary">Products</p>
        <p class="mt-4 text-3xl font-semibold text-white">36</p>
      </div>
      <div class="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-300">
        <p class="text-sm uppercase tracking-[0.24em] text-primary">Users</p>
        <p class="mt-4 text-3xl font-semibold text-white">1.2K</p>
      </div>
    </div>
    <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-slate-300">
      <h2 class="text-xl font-semibold text-white">Recent Orders</h2>
      <div class="mt-4 grid gap-4">
        <div class="flex items-center justify-between rounded-3xl bg-slate-950 p-5 text-sm text-slate-300">
          <span>#11234</span><span>Jordan Lee</span><span>R12,492</span><span class="rounded-full bg-green-500/10 px-3 py-1 text-green-300">Delivered</span>
        </div>
        <div class="flex items-center justify-between rounded-3xl bg-slate-950 p-5 text-sm text-slate-300">
          <span>#11233</span><span>Emily Wu</span><span>R8,150</span><span class="rounded-full bg-yellow-500/10 px-3 py-1 text-yellow-300">Processing</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
