import { defineStore } from 'pinia'
import api from '@/services/api'
import { useCartStore } from './cart'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('authToken') || null,
    isAuthenticated: !!localStorage.getItem('authToken'),
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await api.login(credentials)
        this.token = response.token
        this.user = response.user
        this.isAuthenticated = true
        localStorage.setItem('authToken', this.token)

        // Load user's cart from backend if needed
        const cartStore = useCartStore()
        await cartStore.loadUserCart(this.user.id)

        return { success: true }
      } catch (error) {
        return { success: false, error: error.response?.data?.message || 'Login failed' }
      }
    },

    async register(userData) {
      try {
        const response = await api.registerUser(userData)
        return { success: true, data: response }
      } catch (error) {
        return { success: false, error: error.response?.data?.message || 'Registration failed' }
      }
    },

    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('authToken')

      const cartStore = useCartStore()
      cartStore.clearCart()
    },
  },
})
