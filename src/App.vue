<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <Navbar />
    <main class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
