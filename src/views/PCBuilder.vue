<template>
  <div class="space-y-8">
    <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h1 class="text-3xl font-semibold text-white">PC Builder</h1>
      <p class="mt-2 text-slate-400">Select your components and see compatibility feedback in real time.</p>
    </div>

    <div class="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
      <div class="space-y-6">
        <section class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-semibold text-white">Step 1: Choose CPU</h2>
              <p class="mt-1 text-slate-400">Start with a compatible processor for your build.</p>
            </div>
            <span class="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Compatible</span>
          </div>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl bg-slate-950 p-5">
              <p class="text-sm uppercase tracking-[0.24em] text-primary">AMD</p>
              <h3 class="mt-3 text-lg font-semibold text-white">Ryzen 7 7800X3D</h3>
              <p class="mt-2 text-slate-400">8 cores · 16 threads · AM5 socket</p>
              <div class="mt-4 flex items-center justify-between text-white">
                <span class="text-lg font-semibold">R6,999</span>
                <button class="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Select</button>
              </div>
            </div>
            <div class="rounded-3xl bg-slate-950 p-5">
              <p class="text-sm uppercase tracking-[0.24em] text-primary">Intel</p>
              <h3 class="mt-3 text-lg font-semibold text-white">Core i7-14700K</h3>
              <p class="mt-2 text-slate-400">20 cores · 28 threads · LGA1700 socket</p>
              <div class="mt-4 flex items-center justify-between text-white">
                <span class="text-lg font-semibold">R7,299</span>
                <button class="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-700">Select</button>
              </div>
            </div>
          </div>
        </section>

        <section class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-semibold text-white">Step 2: Choose Motherboard</h2>
              <p class="mt-1 text-slate-400">Pick a board that matches your CPU and memory.</p>
            </div>
            <span class="rounded-full bg-yellow-500/10 px-3 py-1 text-sm font-semibold text-yellow-300">Pending</span>
          </div>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl bg-slate-950 p-5">
              <p class="text-sm uppercase tracking-[0.24em] text-primary">ASUS</p>
              <h3 class="mt-3 text-lg font-semibold text-white">TUF Gaming B650</h3>
              <p class="mt-2 text-slate-400">AM5 · DDR5 · ATX</p>
              <div class="mt-4 flex items-center justify-between text-white">
                <span class="text-lg font-semibold">R3,499</span>
                <button class="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Select</button>
              </div>
            </div>
            <div class="rounded-3xl bg-slate-950 p-5">
              <p class="text-sm uppercase tracking-[0.24em] text-primary">Gigabyte</p>
              <h3 class="mt-3 text-lg font-semibold text-white">Aorus B760</h3>
              <p class="mt-2 text-slate-400">LGA1700 · DDR5 · ATX</p>
              <div class="mt-4 flex items-center justify-between text-white">
                <span class="text-lg font-semibold">R3,699</span>
                <button class="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-700">Select</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <aside class="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <div class="space-y-5">
          <div>
            <h2 class="text-lg font-semibold text-white">Build Summary</h2>
            <p class="mt-2 text-slate-400">Selected components and totals appear here.</p>
          </div>
          <div class="rounded-3xl bg-slate-950 p-5 text-sm text-slate-300">
            <div class="space-y-4">
              <div class="flex items-center justify-between"><span>CPU</span><span>Ryzen 7 7800X3D</span></div>
              <div class="flex items-center justify-between"><span>Motherboard</span><span>TUF Gaming B650</span></div>
              <div class="flex items-center justify-between"><span>RAM</span><span>Choose RAM</span></div>
              <div class="flex items-center justify-between"><span>GPU</span><span>Choose GPU</span></div>
            </div>
          </div>
          <div class="rounded-3xl bg-slate-950 p-5">
            <div class="flex items-center justify-between text-slate-300"><span>Subtotal</span><strong class="text-white">R10,498</strong></div>
            <p class="mt-2 text-sm text-slate-500">Compatibility warnings will show as soon as selections are complete.</p>
          </div>
          <button class="w-full rounded-3xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500">Add Build to Cart</button>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
</script>
