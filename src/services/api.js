import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/tymelesstyre/api'

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request interceptor for auth tokens if needed
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// API methods
export default {
  // User endpoints
  async registerUser(userData) {
    const response = await api.post('/users', userData)
    return response.data
  },

  async login(credentials) {
    const response = await api.post('/auth/login', credentials)
    return response.data
  },

  // Tyre endpoints
  async getTyresByVehicle(make, model, year) {
    const response = await api.get(`/tyres?make=${make}&model=${model}&year=${year}`)
    return response.data
  },

  async getAllTyres() {
    const response = await api.get('/tyres')
    return response.data
  },

  async getTyreById(id) {
    const response = await api.get(`/tyres/${id}`)
    return response.data
  },

  // Order endpoints
  async createOrder(orderData) {
    const response = await api.post('/orders', orderData)
    return response.data
  },

  async getUserOrders(userId) {
    const response = await api.get(`/orders/user/${userId}`)
    return response.data
  },

  // Health check
  async healthCheck() {
    try {
      const response = await api.get('/tyres')
      return response.status === 200
    } catch {
      return false
    }
  },
}
