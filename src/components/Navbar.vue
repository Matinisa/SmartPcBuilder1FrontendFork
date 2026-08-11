<template>
  <header class="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
      <router-link to="/" class="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
        <span>PCSmart</span><span class="text-primary">Builder</span>
      </router-link>

      <nav class="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/products" class="nav-link">Products</router-link>
        <router-link to="/builder" class="nav-link">Build a PC</router-link>
        <router-link to="/orders" class="nav-link">Orders</router-link>
        <router-link to="/profile" class="nav-link">Profile</router-link>
      </nav>

      <div class="flex items-center gap-3">
        <router-link to="/cart" class="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-100 transition hover:border-primary hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4"><path fill="currentColor" d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1.293-3.707l1.414 1.414-1.55 1.55a2 2 0 0 1-2.828 0l-10-10 1.414-1.414 10 10 1.55-1.55Z"/></svg>
          Cart
          <span v-if="cartStore.itemCount" class="ml-1 rounded-full bg-primary px-2 text-xs font-semibold text-slate-950">{{ cartStore.itemCount }}</span>
        </router-link>
        <router-link to="/login" class="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500">
          Sign in
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<style scoped>
.nav-link {
  color: rgba(203, 213, 225, 1);
}
.nav-link.router-link-active {
  color: #fff;
}
</style>
