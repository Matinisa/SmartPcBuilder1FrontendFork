<template>
  <div class="space-y-8">
    <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h1 class="text-3xl font-semibold text-white">Checkout</h1>
      <p class="mt-2 text-slate-400">Review your order and complete the purchase securely.</p>
    </div>
    <div class="grid gap-6 xl:grid-cols-[1.5fr_0.7fr]">
      <div class="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <div class="rounded-3xl border border-slate-800 bg-slate-950 p-6">
          <h2 class="text-xl font-semibold text-white">Shipping Address</h2>
          <p class="mt-2 text-slate-400">Enter your delivery details for this order.</p>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <input type="text" placeholder="Full name" class="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-primary" />
            <input type="text" placeholder="Street address" class="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-primary" />
            <input type="text" placeholder="City" class="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-primary" />
            <input type="text" placeholder="Postal code" class="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-primary" />
          </div>
        </div>
        <div class="rounded-3xl border border-slate-800 bg-slate-950 p-6">
          <h2 class="text-xl font-semibold text-white">Payment</h2>
          <p class="mt-2 text-slate-400">Select your payment method and confirm details.</p>
          <div class="mt-6 grid gap-4">
            <input type="text" placeholder="Cardholder name" class="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-primary" />
            <input type="text" placeholder="Card number" class="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-primary" />
            <div class="grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Expiry date" class="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-primary" />
              <input type="text" placeholder="CVV" class="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-primary" />
            </div>
          </div>
        </div>
        <button class="rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">Confirm Order</button>
      </div>
      <aside class="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h2 class="text-xl font-semibold text-white">Order Summary</h2>
        <div class="rounded-3xl bg-slate-950 p-5 text-slate-300">
          <div class="space-y-4">
            <div class="flex justify-between"><span>Ryzen 7 7800X3D</span><span>R6,999</span></div>
            <div class="flex justify-between"><span>Corsair Vengeance 32GB</span><span>R1,899</span></div>
            <div class="border-t border-slate-800 pt-4 text-white"><div class="flex justify-between font-semibold"><span>Total</span><span>R8,898</span></div></div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
</script>
