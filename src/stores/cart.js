import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    subtotal: (state) => state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  },
  actions: {
    addItem(product) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeItem(productId) {
      this.items = this.items.filter((item) => item.id !== productId)
    },
    updateQuantity(productId, quantity) {
      const item = this.items.find((item) => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    clearCart() {
      this.items = []
    }
  }
})
