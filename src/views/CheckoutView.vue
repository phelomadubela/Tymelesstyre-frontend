<template>
  <div class="checkout-page">
    <h1>Checkout</h1>

    <div class="checkout-grid">
      <div class="checkout-form">
        <h2>Shipping Information</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>Full Name</label>
            <input v-model="shippingInfo.fullName" class="form-input" required />
          </div>

          <div class="form-group">
            <label>Address</label>
            <input v-model="shippingInfo.address" class="form-input" required />
          </div>

          <div class="form-group">
            <label>City</label>
            <input v-model="shippingInfo.city" class="form-input" required />
          </div>

          <div class="form-group">
            <label>Postal Code</label>
            <input v-model="shippingInfo.postalCode" class="form-input" required />
          </div>

          <h2>Payment Method</h2>
          <div class="payment-methods">
            <label v-for="method in paymentMethods" :key="method" class="payment-method">
              <input type="radio" v-model="paymentMethod" :value="method" class="payment-radio" />
              {{ method }}
            </label>
          </div>

          <button type="submit" class="btn-primary" :disabled="processing">
            {{ processing ? 'Processing...' : 'Place Order' }}
          </button>
        </form>
      </div>

      <div class="order-summary">
        <h2>Order Summary</h2>
        <div v-for="item in cartItems" :key="item.id" class="summary-item">
          <span>{{ item.brand }} {{ item.model }} (x{{ item.quantity }})</span>
          <span>R{{ (item.price * item.quantity).toFixed(2) }}</span>
        </div>
        <div class="summary-total">
          <strong>Total: R{{ cartTotal }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const authStore = useAuthStore()
const router = useRouter()

const shippingInfo = ref({
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
  country: 'South Africa',
})

const paymentMethod = ref('Credit Card')
const paymentMethods = ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery']
const processing = ref(false)

const cartItems = cartStore.cartItems
const cartTotal = cartStore.cartTotal

const handleSubmit = async () => {
  if (!authStore.isAuthenticated) {
    alert('Please login to complete your order')
    router.push('/login')
    return
  }

  processing.value = true

  try {
    const orderData = {
      userId: authStore.user.id,
      items: cartItems,
      shippingAddress: shippingInfo.value,
      paymentMethod: paymentMethod.value,
      totalAmount: parseFloat(cartTotal),
    }

    // Simulate API call for now
    console.log('Order data would be sent to backend:', orderData)
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API delay

    // Clear cart after successful order
    cartStore.clearCart()

    // Redirect to confirmation page
    router.push('/order-confirmation/success')
  } catch (error) {
    alert('Failed to place order. Please try again.')
    console.error('Order error:', error)
  } finally {
    processing.value = false
  }
}
</script>

<style scoped>
.checkout-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.checkout-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.checkout-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.order-summary {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
}

.payment-method:hover {
  border-color: var(--primary);
}

.payment-radio {
  margin: 0;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-top: 2px solid #e2e8f0;
  margin-top: 1rem;
  font-size: 1.2rem;
}
</style>
