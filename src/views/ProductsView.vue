<template>
  <div class="products-page">
    <h1>All Products</h1>
    <p class="page-description">Browse our full range of tyres and accessories</p>

    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <h3>{{ product.brand }} {{ product.model }}</h3>
        <p>Size: {{ product.size }}</p>
        <p class="price">R{{ product.price }}</p>
        <button @click="addToCart(product)" class="btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const products = ref([])

onMounted(() => {
  // Simulate product data
  products.value = [
    { id: 1, brand: 'Michelin', model: 'Pilot Sport', size: '225/45R17', price: 1250 },
    { id: 2, brand: 'Bridgestone', model: 'Turanza', size: '205/55R16', price: 950 },
    { id: 3, brand: 'Goodyear', model: 'Eagle F1', size: '235/40R18', price: 1450 },
    { id: 4, brand: 'Continental', model: 'PremiumContact', size: '215/50R17', price: 1100 },
  ]
})

const addToCart = (product) => {
  cartStore.addItem(product)
  alert('Added to cart! 🛒')
}
</script>

<style scoped>
.products-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-description {
  color: var(--secondary);
  margin-bottom: 2rem;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
  margin: 1rem 0;
}
</style>
