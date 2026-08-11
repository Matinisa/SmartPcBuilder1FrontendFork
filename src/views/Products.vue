<template>
  <div class="space-y-8">
    <div class="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm uppercase tracking-[0.24em] text-primary">All Products</p>
        <h1 class="mt-2 text-3xl font-semibold text-white">Browse components</h1>
      </div>
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input v-model="filters.search" type="search" placeholder="Search products..." class="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 sm:w-80" />
        <select v-model="filters.sort" class="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white sm:w-52">
          <option value="featured">Sort by: Featured</option>
          <option value="low">Price Low to High</option>
          <option value="high">Price High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-[240px_1fr]">
      <aside class="space-y-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h2 class="text-lg font-semibold text-white">Filters</h2>
        <div class="space-y-4 text-sm text-slate-300">
          <div>
            <p class="mb-2 font-medium text-slate-100">Category</p>
            <div class="grid gap-2">
              <button v-for="category in categories" :key="category" @click="filters.category = category" :class="['w-full text-left rounded-2xl px-3 py-2 transition', filters.category === category ? 'bg-primary text-slate-950' : 'bg-slate-950 text-slate-300 hover:bg-slate-900']">
                {{ category }}
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <article v-for="product in filteredProducts" :key="product.id" class="rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <img :src="product.image" :alt="product.name" class="h-52 w-full rounded-3xl object-cover" />
          <div class="mt-5 space-y-3">
            <p class="text-sm uppercase tracking-[0.24em] text-primary">{{ product.category }}</p>
            <router-link :to="`/products/${product.id}`" class="text-xl font-semibold text-white hover:text-primary">{{ product.name }}</router-link>
            <p class="text-slate-400">{{ product.specifications.socket || product.specifications.memory || product.specifications.power || 'Premium component' }}</p>
            <div class="flex items-center justify-between pt-3 text-white">
              <span class="text-lg font-semibold">R{{ product.price.toLocaleString() }}</span>
              <button @click="addToCart(product)" class="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Add</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useCartStore } from '../stores/cart'
import productService from '../services/productService'

const cartStore = useCartStore()
const products = ref([])
const filters = reactive({ search: '', category: 'All', sort: 'featured' })

const loadProducts = async () => {
  products.value = await productService.getAll()
}

const categories = computed(() => ['All', ...new Set(products.value.map((item) => item.category))])

const filteredProducts = computed(() => {
  let items = [...products.value]
  if (filters.search) {
    const query = filters.search.toLowerCase()
    items = items.filter((item) => item.name.toLowerCase().includes(query) || item.brand.toLowerCase().includes(query) || item.category.toLowerCase().includes(query))
  }
  if (filters.category !== 'All') {
    items = items.filter((item) => item.category === filters.category)
  }
  if (filters.sort === 'low') {
    items.sort((a, b) => a.price - b.price)
  } else if (filters.sort === 'high') {
    items.sort((a, b) => b.price - a.price)
  } else if (filters.sort === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name))
  }
  return items
})

const addToCart = (product) => {
  cartStore.addItem(product)
}

onMounted(loadProducts)
</script>
