<template>
  <div class="auth-container">
    <div class="auth-card glass-card">
      <h2>Create Account</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>Full Name</label>
          <input v-model="userData.name" type="text" class="form-input" required />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="userData.email" type="email" class="form-input" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="userData.password" type="password" class="form-input" required />
        </div>
        <button type="submit" class="btn-primary" :disabled="loading">
          {{ loading ? 'Creating Account...' : 'Register' }}
        </button>
      </form>
      <p class="auth-switch">
        Already have an account? <router-link to="/login">Login here</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userData = ref({
  name: '',
  email: '',
  password: '',
})
const loading = ref(false)
const router = useRouter()

const handleRegister = async () => {
  loading.value = true
  // Simulate registration
  await new Promise((resolve) => setTimeout(resolve, 1000))
  alert('Registration successful!')
  router.push('/login')
  loading.value = false
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
}

.auth-card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
}

.auth-switch {
  margin-top: 1rem;
  text-align: center;
}

.auth-switch a {
  color: var(--primary);
  text-decoration: none;
}

.auth-switch a:hover {
  text-decoration: underline;
}
</style>
