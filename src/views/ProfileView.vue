<template>
  <div class="profile-page">
    <h1>My Profile</h1>

    <div class="profile-info">
      <h2>Account Details</h2>
      <p><strong>Name:</strong> {{ authStore.user?.name }}</p>
      <p><strong>Email:</strong> {{ authStore.user?.email }}</p>
    </div>

    <div class="order-history">
      <h2>Order History</h2>

      <div v-if="loading" class="loading">Loading orders...</div>
      <div v-else-if="orders.length === 0" class="empty-orders">
        <p>No orders found</p>
        <router-link to="/products" class="btn-primary">Start Shopping</router-link>
      </div>

      <div v-else class="orders-list">
        <div v-for="order in orders" :key="order.id" class="order-card">
          <div class="order-header">
            <span>Order #{{ order.id }}</span>
            <span>R{{ order.totalAmount.toFixed(2) }}</span>
          </div>
          <div class="order-details">
            <p>Date: {{ formatDate(order.createdAt) }}</p>
            <p>
              Status:
              <span :class="'status-' + order.status.toLowerCase()">{{ order.status }}</span>
            </p>
          </div>
          <button @click="viewOrderDetails(order)" class="view-details-btn">View Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const orders = ref([])
const loading = ref(false)

onMounted(async () => {
  if (!authStore.isAuthenticated) {
    return
  }

  loading.value = true
  try {
    // Simulate API response for now
    await new Promise((resolve) => setTimeout(resolve, 1000))
    orders.value = [
      {
        id: 1001,
        totalAmount: 1250.0,
        createdAt: '2024-01-15T10:30:00Z',
        status: 'Delivered',
      },
      {
        id: 1002,
        totalAmount: 850.5,
        createdAt: '2024-01-10T14:45:00Z',
        status: 'Processing',
      },
    ]
  } catch (error) {
    console.error('Failed to fetch orders:', error)
    alert('Failed to load order history')
  } finally {
    loading.value = false
  }
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const viewOrderDetails = (order) => {
  // You can implement order details view later
  console.log('Viewing order details:', order)
  alert(`Order #${order.id} details would be shown here`)
}
</script>

<style scoped>
.profile-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-info {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.order-history {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.order-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
}

.order-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: var(--secondary);
}

.view-details-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.view-details-btn:hover {
  background: var(--primary-dark);
}

.status-delivered {
  color: var(--success);
  font-weight: bold;
}

.status-processing {
  color: var(--accent);
  font-weight: bold;
}

.status-pending {
  color: var(--secondary);
  font-weight: bold;
}

.loading {
  text-align: center;
  padding: 2rem;
  color: var(--secondary);
}

.empty-orders {
  text-align: center;
  padding: 2rem;
}

.empty-orders p {
  margin-bottom: 1rem;
  color: var(--secondary);
}
</style>
