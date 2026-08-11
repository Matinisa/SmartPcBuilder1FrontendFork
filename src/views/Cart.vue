<template>
  <div class="space-y-8">
    <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h1 class="text-3xl font-semibold text-white">Shopping Cart</h1>
      <p class="mt-2 text-slate-400">Review the items you plan to purchase and continue to checkout.</p>
    </div>

    <div class="grid gap-6 xl:grid-cols-[1.5fr_0.7fr]">
      <div class="space-y-4 rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <div class="grid gap-4">
          <div class="grid gap-3 rounded-3xl border border-slate-800 bg-slate-950 p-5 sm:grid-cols-[120px_1fr_120px]">
            <img src="https://images.unsplash.com/photo-1510557880182-3a935d5f41f4?auto=format&fit=crop&w=400&q=80" alt="Cart item" class="h-28 w-full rounded-3xl object-cover sm:h-24 sm:w-28" />
            <div class="space-y-2">
              <h2 class="text-lg font-semibold text-white">AMD Ryzen 7 7800X3D</h2>
              <p class="text-sm text-slate-400">Performance CPU for gaming and streaming.</p>
              <p class="text-sm text-slate-400">Qty: 1</p>
            </div>
            <div class="flex flex-col items-end justify-between text-right text-white">
              <span class="text-lg font-semibold">R6,999</span>
              <button class="text-sm font-semibold text-primary hover:text-blue-400">Remove</button>
            </div>
          </div>
          <div class="grid gap-3 rounded-3xl border border-slate-800 bg-slate-950 p-5 sm:grid-cols-[120px_1fr_120px]">
            <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=400&q=80" alt="Cart item" class="h-28 w-full rounded-3xl object-cover sm:h-24 sm:w-28" />
            <div class="space-y-2">
              <h2 class="text-lg font-semibold text-white">Corsair Vengeance 32GB</h2>
              <p class="text-sm text-slate-400">High-speed DDR5 memory kit.</p>
              <p class="text-sm text-slate-400">Qty: 1</p>
            </div>
            <div class="flex flex-col items-end justify-between text-right text-white">
              <span class="text-lg font-semibold">R1,899</span>
              <button class="text-sm font-semibold text-primary hover:text-blue-400">Remove</button>
            </div>
          </div>
        </div>
      </div>

      <aside class="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h2 class="text-xl font-semibold text-white">Order Summary</h2>
        <div class="space-y-3 rounded-3xl bg-slate-950 p-5 text-slate-300">
          <div class="flex justify-between"><span>Subtotal</span><span>R8,898</span></div>
          <div class="flex justify-between"><span>Shipping</span><span>R150</span></div>
          <div class="flex justify-between"><span>VAT</span><span>R1,335</span></div>
          <div class="border-t border-slate-800 pt-4 text-white">
            <div class="flex justify-between text-lg font-semibold"><span>Total</span><span>R10,383</span></div>
          </div>
        </div>
        <button class="w-full rounded-3xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500">Proceed to Checkout</button>
      </aside>
    </div>
  </div>
</template>

<script setup>
</script>
