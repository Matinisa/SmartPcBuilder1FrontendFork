<template>
  <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
    <div class="rounded-3xl border border-slate-800 bg-slate-900 p-6" v-if="product">
      <img :src="product.image" :alt="product.name" class="h-[480px] w-full rounded-3xl object-cover" />
      <div class="mt-6 space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.24em] text-primary">{{ product.category }}</p>
            <h1 class="text-3xl font-semibold text-white">{{ product.name }}</h1>
          </div>
          <div class="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-300">In Stock</div>
        </div>
        <div class="flex items-center gap-3 text-slate-400">
          <span class="text-2xl font-semibold text-white">R{{ product.price.toLocaleString() }}</span>
          <span>★★★★★</span>
        </div>
        <p class="text-slate-300">{{ product.description }}</p>
        <div class="grid gap-3 rounded-3xl bg-slate-950 p-5 text-slate-300">
          <div v-for="(value, key) in product.specifications" :key="key" class="flex justify-between text-sm">
            <span>{{ formatKey(key) }}</span><span>{{ value }}</span>
          </div>
        </div>
      </div>
    </div>

    <aside class="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div class="space-y-3">
        <p class="text-sm uppercase tracking-[0.24em] text-primary">Product details</p>
        <p class="text-slate-300">{{ product?.description || 'Loading product details...' }}</p>
      </div>
      <button @click="handleAddToCart" class="w-full rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">Add to Cart</button>
      <button @click="handleAddToBuilder" class="w-full rounded-3xl border border-slate-700 bg-slate-950 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-primary">Add to PC Builder</button>
      <div class="rounded-3xl bg-slate-950 p-5 text-slate-300">
        <h2 class="mb-3 text-lg font-semibold text-white">Specs</h2>
        <div class="grid gap-3 text-sm">
          <div v-if="product">
            <div class="flex justify-between"><span>Stock</span><span>{{ product.stock }}</span></div>
            <div class="flex justify-between"><span>Brand</span><span>{{ product.brand }}</span></div>
          </div>
          <div v-if="!product" class="text-slate-500">Loading...</div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import productService from '../services/productService'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const product = ref(null)

const fetchProduct = async () => {
  product.value = await productService.getById(route.params.id)
}

const handleAddToCart = () => {
  if (product.value) {
    cartStore.addItem(product.value)
  }
}

const handleAddToBuilder = () => {
  router.push('/builder')
}

const formatKey = (key) => {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())
}

onMounted(fetchProduct)
</script>
