<!-- LoginView.vue -->
<template>
  <div class="auth-container">
    <div class="auth-card glass-card">
      <h2>Login to Your Account</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input v-model="credentials.email" type="email" class="form-input" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="credentials.password" type="password" class="form-input" required />
        </div>
        <button type="submit" class="btn-primary" :disabled="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>
      <p class="auth-switch">
        Don't have an account? <router-link to="/register">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const credentials = ref({ email: '', password: '' })
const loading = ref(false)
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  loading.value = true
  const result = await authStore.login(credentials.value)

  if (result.success) {
    router.push('/')
  } else {
    alert(result.error)
  }
  loading.value = false
}
</script>
