<template>
  <div class="space-y-8">
    <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h1 class="text-3xl font-semibold text-white">Profile</h1>
      <p class="mt-2 text-slate-400">Manage your account, saved addresses, and security preferences.</p>
    </div>
    <div class="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <div class="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <div class="rounded-3xl bg-slate-950 p-6 text-slate-300">
          <h2 class="text-xl font-semibold text-white">Account</h2>
          <div class="mt-4 grid gap-4">
            <div class="rounded-3xl bg-slate-900 p-4">
              <p class="text-sm text-slate-400">Name</p>
              <p class="mt-1 text-white">Jordan Lee</p>
            </div>
            <div class="rounded-3xl bg-slate-900 p-4">
              <p class="text-sm text-slate-400">Email</p>
              <p class="mt-1 text-white">jordan@example.com</p>
            </div>
            <div class="rounded-3xl bg-slate-900 p-4">
              <p class="text-sm text-slate-400">Phone</p>
              <p class="mt-1 text-white">+27 82 555 0123</p>
            </div>
          </div>
        </div>
        <div class="rounded-3xl bg-slate-950 p-6 text-slate-300">
          <h2 class="text-xl font-semibold text-white">Saved Addresses</h2>
          <div class="mt-4 space-y-4">
            <div class="rounded-3xl bg-slate-900 p-4">
              <p class="text-sm text-slate-400">Home</p>
              <p class="mt-1 text-white">123 Tech Lane, Cape Town, South Africa</p>
            </div>
          </div>
        </div>
      </div>
      <aside class="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <div class="rounded-3xl bg-slate-950 p-6 text-slate-300">
          <h2 class="text-xl font-semibold text-white">Security</h2>
          <p class="mt-3 text-slate-400">Manage your password and login preferences.</p>
        </div>
        <button class="w-full rounded-3xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500">Logout</button>
      </aside>
    </div>
  </div>
</template>

<script setup>
</script>
