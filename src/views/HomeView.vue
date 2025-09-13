<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Find the Perfect Tyres for Your Vehicle</h1>
        <p class="hero-subtitle">Search by your vehicle make and model to find compatible tyres</p>

        <!-- Vehicle Search Form -->
        <div class="search-card glass-card">
          <h3>Search Tyres by Vehicle</h3>
          <form @submit.prevent="searchTyres" class="search-form">
            <div class="form-group">
              <label>Make</label>
              <select v-model="vehicle.make" class="form-input" required>
                <option value="">Select Make</option>
                <option value="Toyota">Toyota</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
              </select>
            </div>

            <div class="form-group">
              <label>Model</label>
              <input
                v-model="vehicle.model"
                type="text"
                class="form-input"
                placeholder="e.g., Corolla, Golf, Focus"
                required
              />
            </div>

            <div class="form-group">
              <label>Year</label>
              <select v-model="vehicle.year" class="form-input" required>
                <option value="">Select Year</option>
                <option v-for="year in yearRange" :key="year" :value="year">
                  {{ year }}
                </option>
              </select>
            </div>

            <button type="submit" class="btn-primary search-btn">🔍 Find Tyres</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Loading State -->
    <div v-if="loading" class="loading">
      <p>Searching for tyres...</p>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <!-- Results -->
    <div v-if="tyres.length > 0" class="results-section">
      <h2>Found {{ tyres.length }} matching tyres</h2>
      <div class="tyres-grid">
        <div v-for="tyre in tyres" :key="tyre.id" class="tyre-card product-card">
          <h3>{{ tyre.brand }} {{ tyre.model }}</h3>
          <p>Size: {{ tyre.sectionWidth }}/{{ tyre.aspectRatio }}R{{ tyre.rimDiameter }}</p>
          <p class="price">R{{ tyre.price }}</p>
          <button @click="addToCart(tyre)" class="btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import api from '@/services/api'

const vehicle = ref({
  make: '',
  model: '',
  year: '',
})

const tyres = ref([])
const loading = ref(false)
const error = ref('')

const cartStore = useCartStore()

// Generate year range from 1990 to current year + 1
const currentYear = new Date().getFullYear()
const yearRange = computed(() => {
  const years = []
  for (let year = currentYear + 1; year >= 1990; year--) {
    years.push(year)
  }
  return years
})

const searchTyres = async () => {
  loading.value = true
  error.value = ''
  tyres.value = []

  try {
    const response = await api.getTyresByVehicle(
      vehicle.value.make,
      vehicle.value.model,
      vehicle.value.year,
    )

    tyres.value = response
  } catch (err) {
    error.value = 'Failed to search tyres. Please try again.'
    console.error('Search error:', err)
  } finally {
    loading.value = false
  }
}

const addToCart = (tyre) => {
  cartStore.addItem(tyre, 1)
  alert('Added to cart! 🛒')
}
</script>

<style scoped>
.homepage {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 3rem 0;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--secondary);
  margin-bottom: 2rem;
}

.search-card {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
}

.search-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark);
}

.search-btn {
  margin-top: 1rem;
  font-size: 1.1rem;
}

.tyres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.tyre-card {
  text-align: center;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
  margin: 1rem 0;
}

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
}

.error-message {
  background: var(--error);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin: 1rem 0;
}
</style>
