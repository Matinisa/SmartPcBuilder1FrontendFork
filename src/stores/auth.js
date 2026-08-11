import { defineStore } from 'pinia'
import authService from '../services/authService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: Boolean(localStorage.getItem('token'))
  }),
  actions: {
    async login(email, password) {
      const response = await authService.login(email, password)
      this.user = response.user
      this.token = response.token
      this.isAuthenticated = true
      localStorage.setItem('token', response.token)
    },
    async register(payload) {
      const response = await authService.register(payload)
      this.user = response.user
      this.token = response.token
      this.isAuthenticated = true
      localStorage.setItem('token', response.token)
    },
    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
    }
  }
})
