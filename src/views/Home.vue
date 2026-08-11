<template>
  <section class="space-y-12">
    <div class="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
      <div class="space-y-6">
        <span class="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Build your dream PC</span>
        <h1 class="max-w-2xl text-5xl font-bold leading-tight text-white sm:text-6xl">BUILD YOUR DREAM PC</h1>
        <p class="max-w-xl text-slate-300">Choose premium components, compare compatibility, and build a high-performance machine with confidence.</p>
        <div class="flex flex-wrap gap-4">
          <router-link to="/builder" class="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">START BUILDING</router-link>
          <router-link to="/products" class="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-primary hover:text-white">SHOP COMPONENTS</router-link>
        </div>
      </div>
      <div class="rounded-[32px] border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-slate-950/50">
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80" alt="Gaming PC" class="h-full w-full rounded-3xl object-cover" />
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h2 class="text-lg font-semibold text-white">Compatibility Check</h2>
        <p class="mt-3 text-slate-400">Smart compatibility guidance for CPU, motherboard, and RAM selections.</p>
      </div>
      <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h2 class="text-lg font-semibold text-white">Premium Components</h2>
        <p class="mt-3 text-slate-400">A curated catalog of performance hardware from top brands.</p>
      </div>
      <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h2 class="text-lg font-semibold text-white">Secure Order Flow</h2>
        <p class="mt-3 text-slate-400">Safe checkout designs that feel polished and trustworthy.</p>
      </div>
      <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h2 class="text-lg font-semibold text-white">Fast Delivery</h2>
        <p class="mt-3 text-slate-400">Streamlined checkout with order summaries and clear shipping details.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
