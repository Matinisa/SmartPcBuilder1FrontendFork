<template>
  <div class="flex min-h-[calc(100vh-96px)] items-center justify-center py-12">
    <div class="w-full max-w-md space-y-8 rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl shadow-slate-950/40">
      <div class="space-y-2 text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-primary">PCSmartBuilder</p>
        <h1 class="text-3xl font-semibold text-white">Welcome Back</h1>
        <p class="text-slate-400">Sign in to manage your builds, orders, and profile.</p>
      </div>
      <form class="space-y-5">
        <div class="space-y-2">
          <label class="text-sm font-medium text-slate-200">Email address</label>
          <input type="email" placeholder="you@example.com" class="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-primary" />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium text-slate-200">Password</label>
          <input type="password" placeholder="Enter your password" class="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-primary" />
        </div>
        <div class="flex items-center justify-between text-sm text-slate-400">
          <label class="inline-flex items-center gap-2">
            <input type="checkbox" class="h-4 w-4 rounded border-slate-700 bg-slate-900 text-primary focus:ring-primary" />
            Remember me
          </label>
          <a href="#" class="text-primary hover:text-blue-400">Forgot password?</a>
        </div>
        <button class="w-full rounded-3xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">Login</button>
      </form>
      <p class="text-center text-sm text-slate-400">Don’t have an account? <router-link to="/register" class="text-white hover:text-blue-300">Register</router-link></p>
    </div>
  </div>
</template>

<script setup>
</script>
