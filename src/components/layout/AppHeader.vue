<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">
        <h1>🚗 Tymeless Tyre</h1>
      </div>

      <nav class="navigation">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/products" class="nav-link">Products</router-link>      
        <router-link to="/login" class="nav-link">Login</router-link>        

        <router-link to="/cart" class="nav-link"> 🛒 Cart ({{ cartItemCount }}) </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { itemCount } = storeToRefs(cartStore)

const cartItemCount = itemCount
</script>

<style scoped>
.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo h1 {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.8rem;
  font-weight: 700;
}

.navigation {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--dark);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary);
}

.nav-link.router-link-active {
  background: var(--primary);
  color: white;
}
</style>
