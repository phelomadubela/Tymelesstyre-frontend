<template>
  <div class="home-page">
    <!-- Hero Section with Background Image -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content fade-in">
          <h1 class="hero-title">Experience Premium Performance</h1>
          <p class="hero-subtitle">Discover the perfect tyres for your vehicle with unmatched quality and expert service</p>
          <div class="hero-actions">
            <router-link to="/products" class="btn btn-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 9H13V15H11V9M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20M11 7H13V9H11V7Z"/>
              </svg>
              Shop Now
            </router-link>
            <router-link to="/products" class="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
              </svg>
              Learn More
            </router-link>
          </div>
        </div>

        <!-- Hero Stats -->
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">10,000+</div>
            <div class="stat-label">Happy Customers</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Tyre Brands</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Support</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Brands Section -->
    <section class="brands-section">
      <div class="container">
        <h2 class="section-title">Trusted by Leading Brands</h2>
        <div class="brands-grid">
          <div class="brand-logo">
            <img src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=200&h=80&fit=crop&crop=center" alt="Michelin" class="brand-image">
          </div>
          <div class="brand-logo">
            <img src="https://images.unsplash.com/photo-1616469829476-8953c5655574?w=200&h=80&fit=crop&crop=center" alt="Bridgestone" class="brand-image">
          </div>
          <div class="brand-logo">
            <img src="https://images.unsplash.com/photo-1611892440504-42c64a0d70d2?w=200&h=80&fit=crop&crop=center" alt="Goodyear" class="brand-image">
          </div>
          <div class="brand-logo">
            <img src="https://images.unsplash.com/photo-1616469829476-8953c5655574?w=200&h=80&fit=crop&crop=center" alt="Pirelli" class="brand-image">
          </div>
          <div class="brand-logo">
            <img src="https://images.unsplash.com/photo-1611892440504-42c64a0d70d2?w=200&h=80&fit=crop&crop=center" alt="Continental" class="brand-image">
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">Why Choose TymeLess Tyre?</h2>
        <p class="section-subtitle">Experience the difference with our premium services and exceptional quality</p>

        <div class="grid grid-3">
          <div class="feature-card card fade-in">
            <div class="feature-icon">
              <img src="https://images.unsplash.com/photo-1563720223880-4d93eef1f1c1?w=100&h=100&fit=crop&crop=center" alt="Quality Icon">
            </div>
            <h3>Premium Quality</h3>
            <p>All our tyres undergo rigorous quality checks to ensure maximum safety and performance on the road.</p>
          </div>

          <div class="feature-card card fade-in">
            <div class="feature-icon">
              <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=100&h=100&fit=crop&crop=center" alt="Expert Icon">
            </div>
            <h3>Expert Installation</h3>
            <p>Our certified technicians ensure perfect installation and balancing for optimal driving experience.</p>
          </div>

          <div class="feature-card card fade-in">
            <div class="feature-icon">
              <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=100&h=100&fit=crop&crop=center" alt="Support Icon">
            </div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer support to assist you with any queries or emergency roadside assistance.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="featured-products-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Tyres</h2>
          <p class="section-subtitle">Discover our most popular and high-performance tyre models</p>
          <router-link to="/products" class="view-all-link">
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" class="link-arrow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
            </svg>
          </router-link>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="loading-section">
          <div class="loading-spinner"></div>
          <p>Loading featured products...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="error-section">
          <div class="error-icon">⚠️</div>
          <h3>Unable to load featured products</h3>
          <p>{{ error }}</p>
          <button @click="fetchFeaturedProducts" class="btn btn-primary">Try Again</button>
        </div>

        <!-- Products Grid -->
        <div v-else class="products-grid">
          <div v-for="product in featuredProducts.slice(0, 3)" :key="product.id" class="product-card card fade-in">
            <div class="product-image">
              <img
                v-if="product.imageUrl"
                :src="getImageUrl(product.imageUrl)"
                :alt="`${product.brand} ${product.model}`"
                class="tyre-image"
              >
              <div v-else class="tyre-placeholder">
                <div class="tyre-preview">
                  <div class="tyre-small">
                    <div class="tyre-tread"></div>
                    <div class="tyre-rim"></div>
                  </div>
                </div>
              </div>
              <div class="product-badge" v-if="product.featured">Featured</div>
            </div>

            <div class="product-info">
              <h3>{{ product.brand }} {{ product.model }}</h3>
              <p class="product-specs">{{ product.width }}/{{ product.aspectRatio }}R{{ product.rimDiameter }}</p>

              <div class="product-features">
                <span class="feature-tag">{{ product.tyreType }}</span>
                <span class="feature-tag">{{ product.season }}</span>
              </div>

              <div class="product-price">R{{ product.price }}</div>

              <div class="product-actions">
                <button @click="addToCart(product)" class="btn btn-primary">
                  Add to Cart
                </button>
                <router-link :to="`/product/${product.id}`" class="btn btn-outline">
                  Details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">Complete tyre solutions for all your needs</p>

        <div class="services-grid">
          <div class="service-card">
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop&crop=center" alt="Tyre Fitting">
            </div>
            <div class="service-content">
              <h3>Tyre Fitting</h3>
              <p>Professional tyre fitting services with state-of-the-art equipment</p>
              <a href="#" class="service-link">Learn More</a>
            </div>
          </div>

          <div class="service-card">
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1563720223880-4d93eef1f1c1?w=400&h=300&fit=crop&crop=center" alt="Wheel Alignment">
            </div>
            <div class="service-content">
              <h3>Wheel Alignment</h3>
              <p>Precision wheel alignment for optimal vehicle performance</p>
              <a href="#" class="service-link">Learn More</a>
            </div>
          </div>

          <div class="service-card">
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop&crop=center" alt="Tyre Repair">
            </div>
            <div class="service-content">
              <h3>Tyre Repair</h3>
              <p>Expert tyre repair services to get you back on the road safely</p>
              <a href="#" class="service-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">What Our Customers Say</h2>
        <p class="section-subtitle">Don't just take our word for it - hear from our satisfied customers</p>

        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="stars">★★★★★</div>
              <p>"The service was exceptional! They helped me find the perfect tyres for my SUV and the installation was quick and professional."</p>
            </div>
            <div class="testimonial-author">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="John Doe" class="author-avatar">
              <div class="author-info">
                <h4>John Doe</h4>
                <p>SUV Owner</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="stars">★★★★★</div>
              <p>"I've been using TymeLess Tyre for years. Their prices are competitive and their staff is always knowledgeable and helpful."</p>
            </div>
            <div class="testimonial-author">
              <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=60&h=60&fit=crop&crop=face" alt="Sarah Johnson" class="author-avatar">
              <div class="author-info">
                <h4>Sarah Johnson</h4>
                <p>Regular Customer</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-content">
              <div class="stars">★★★★★</div>
              <p>"Quick service and great prices! I got my winter tyres installed in no time and the quality is outstanding."</p>
            </div>
            <div class="testimonial-author">
              <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?w=60&h=60&fit=crop&crop=face" alt="Mike Wilson" class="author-avatar">
              <div class="author-info">
                <h4>Mike Wilson</h4>
                <p>Winter Tyre Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Upgrade Your Ride?</h2>
          <p>Get the perfect tyres for your vehicle with expert advice and competitive pricing</p>
          <div class="cta-actions">
            <router-link to="/products" class="btn btn-accent btn-large">
              Browse Collection
            </router-link>
            <a href="tel:+27111234567" class="btn btn-outline btn-large">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
import api from '@/services/api'

const cartStore = useCartStore()
const featuredProducts = ref([])
const loading = ref(true)
const error = ref(null)

const fetchFeaturedProducts = async () => {
  try {
    loading.value = true
    error.value = null
    // Get all products and filter for featured ones
    const data = await api.getAllTyres()
    featuredProducts.value = data.filter(product => product.featured === true).slice(0, 6)
  } catch (err) {
    console.error('Error fetching featured products:', err)
    error.value = err.response?.data?.message || 'Failed to load featured products.'
  } finally {
    loading.value = false
  }
}

const getImageUrl = (imageUrl) => {
  if (!imageUrl) return null
  if (imageUrl.startsWith('http')) {
    return imageUrl
  }
  return `http://localhost:8080${imageUrl}`
}

const addToCart = (product) => {
  cartStore.addItem(product)
}

onMounted(() => {
  fetchFeaturedProducts()
})
</script>

<style scoped>
.home-page {
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=800&fit=crop&crop=center');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 6rem 0 4rem;
  position: relative;
  text-align: center;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

/* Brands Section */
.brands-section {
  padding: 4rem 0;
  background: var(--gray-100);
}

.brands-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.brand-logo {
  padding: 1.5rem;
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.brand-image {
  height: 40px;
  width: auto;
  object-fit: contain;
}

/* Features Section */
.features-section {
  padding: 6rem 0;
}

.feature-card {
  padding: 2.5rem;
  text-align: center;
  border: none;
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
}

.feature-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--gray-900);
}

.feature-card p {
  color: var(--gray-600);
  line-height: 1.6;
}

/* Featured Products Section */
.featured-products-section {
  padding: 6rem 0;
  background: var(--gray-100);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.view-all-link {
  display: inline-flex;
  align-items: center;
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
}

.link-arrow {
  width: 20px;
  height: 20px;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.view-all-link:hover .link-arrow {
  transform: translateX(4px);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: var(--radius);
  overflow: hidden;
  transition: var(--transition);
  border: none;
}

.product-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.tyre-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .tyre-image {
  transform: scale(1.05);
}

.tyre-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: var(--gray-200);
}

.product-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--accent);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--gray-900);
}

.product-specs {
  color: var(--gray-600);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.product-features {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.feature-tag {
  background: var(--primary-light);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.product-actions {
  display: flex;
  gap: 0.5rem;
}

.product-actions .btn {
  flex: 1;
}

/* Services Section */
.services-section {
  padding: 6rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.service-image {
  height: 200px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-content {
  padding: 1.5rem;
}

.service-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--gray-900);
}

.service-content p {
  color: var(--gray-600);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.service-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.service-link:hover {
  text-decoration: underline;
}

/* Testimonials Section */
.testimonials-section {
  padding: 6rem 0;
  background: var(--gray-100);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.stars {
  color: var(--accent);
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.testimonial-content p {
  color: var(--gray-700);
  line-height: 1.6;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info h4 {
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--gray-900);
}

.author-info p {
  color: var(--gray-600);
  font-size: 0.875rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .brands-grid {
    gap: 1.5rem;
  }

  .brand-logo {
    padding: 1rem;
  }

  .brand-image {
    height: 30px;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .services-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
