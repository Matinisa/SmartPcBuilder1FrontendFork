<template>
  <div class="flex min-h-[calc(100vh-96px)] items-center justify-center py-12">
    <div class="w-full max-w-2xl space-y-8 rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl shadow-slate-950/40">
      <div class="space-y-2 text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-primary">Create your account</p>
        <h1 class="text-3xl font-semibold text-white">Register</h1>
        <p class="text-slate-400">Start building your own PC with a secure account.</p>
      </div>
      <form class="grid gap-4 md:grid-cols-2">
        <div class="space-y-2">
          <label class="text-sm font-medium text-slate-200">First Name</label>
          <input type="text" placeholder="First name" class="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-primary" />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium text-slate-200">Last Name</label>
          <input type="text" placeholder="Last name" class="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-primary" />
        </div>
        <div class="space-y-2 md:col-span-2">
          <label class="text-sm font-medium text-slate-200">Email</label>
          <input type="email" placeholder="you@example.com" class="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-primary" />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium text-slate-200">Phone</label>
          <input type="tel" placeholder="Phone number" class="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-primary" />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium text-slate-200">Password</label>
          <input type="password" placeholder="Create password" class="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-primary" />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium text-slate-200">Confirm Password</label>
          <input type="password" placeholder="Confirm password" class="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-primary" />
        </div>
      </form>
      <button class="w-full rounded-3xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">Create Account</button>
      <p class="text-center text-sm text-slate-400">Already have an account? <router-link to="/login" class="text-white hover:text-blue-300">Login</router-link></p>
    </div>
  </div>
</template>

<script setup>
</script>
