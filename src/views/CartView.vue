<template>
  <div class="cart-page">
    <h1>Shopping Cart</h1>

    <div v-if="cartItems.length === 0" class="empty-cart">
      <div class="empty-cart-icon">
        🛒
      </div>
      <p>Your cart is empty</p>
      <router-link to="/products" class="btn-primary">Continue Shopping</router-link>
    </div>

    <div v-else class="cart-content">
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <div class="item-info">
            <h3>{{ item.brand }} {{ item.model }}</h3>
            <p class="tire-size">
              Size: {{ item.sectionWidth }}/{{ item.aspectRatio }}R{{ item.rimDiameter }}
            </p>
            <p class="unit-price">R{{ item.price.toFixed(2) }} each</p>
          </div>

          <div class="item-controls">
            <div class="quantity-controls">
              <button
                @click="updateQuantity(item.id, item.quantity - 1)"
                :disabled="isUpdating"
                aria-label="Decrease quantity"
                class="quantity-btn"
              >
                -
              </button>
              <span class="quantity-display" aria-label="Current quantity">
                {{ item.quantity }}
              </span>
              <button
                @click="updateQuantity(item.id, item.quantity + 1)"
                :disabled="isUpdating || item.quantity >= maxQuantity"
                aria-label="Increase quantity"
                class="quantity-btn"
              >
                +
              </button>
            </div>

            <div class="item-total">
              <p class="item-price">R{{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>

            <button
              @click="removeItem(item.id)"
              class="remove-btn"
              :disabled="isUpdating"
              aria-label="Remove item from cart"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <div class="summary-content">
          <div class="summary-line">
            <span>Subtotal:</span>
            <span>R{{ cartSubtotal.toFixed(2) }}</span>
          </div>

          <div v-if="cartDiscount > 0" class="summary-line discount">
            <span>Discount:</span>
            <span>-R{{ cartDiscount.toFixed(2) }}</span>
          </div>

          <div class="summary-line total">
            <span>Total:</span>
            <span>R{{ cartTotal.toFixed(2) }}</span>
          </div>

          <router-link
            to="/checkout"
            class="btn-primary checkout-btn"
            :class="{ 'btn-disabled': cartItems.length === 0 }"
          >
            Proceed to Checkout
          </router-link>
        </div>
      </div>
    </div>

    <!-- Loading overlay -->
    <div v-if="isUpdating" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>

    <!-- Error message -->
    <div v-if="errorMessage" class="error-message" role="alert">
      {{ errorMessage }}
      <button @click="clearError" class="error-close">×</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { cartItems, cartTotal, cartDiscount, cartSubtotal } = storeToRefs(cartStore)

// Loading and error states
const isUpdating = ref(false)
const errorMessage = ref('')
const maxQuantity = 99

const updateQuantity = async (productId, newQuantity) => {
  if (isUpdating.value) return

  // Input validation
  if (newQuantity < 0) return
  if (newQuantity > maxQuantity) {
    showError(`Maximum quantity is ${maxQuantity}`)
    return
  }

  isUpdating.value = true
  errorMessage.value = ''

  try {
    if (newQuantity < 1) {
      await cartStore.removeItem(productId)
    } else {
      await cartStore.updateQuantity(productId, newQuantity)
    }
  } catch (error) {
    console.error('Failed to update quantity:', error)
    showError('Failed to update quantity. Please try again.')
  } finally {
    isUpdating.value = false
  }
}

const removeItem = async (productId) => {
  if (isUpdating.value) return

  isUpdating.value = true
  errorMessage.value = ''

  try {
    await cartStore.removeItem(productId)
  } catch (error) {
    console.error('Failed to remove item:', error)
    showError('Failed to remove item. Please try again.')
  } finally {
    isUpdating.value = false
  }
}

const showError = (message) => {
  errorMessage.value = message
  setTimeout(() => {
    errorMessage.value = ''
  }, 5000)
}

const clearError = () => {
  errorMessage.value = ''
}

// Helper function for adding items (can be used from other components)
const addItem = async (product, quantity = 1) => {
  if (isUpdating.value) return

  isUpdating.value = true
  errorMessage.value = ''

  try {
    await cartStore.addItem(product, quantity)
  } catch (error) {
    console.error('Failed to add item:', error)
    showError('Failed to add item. Please try again.')
  } finally {
    isUpdating.value = false
  }
}

// Computed properties for better reactivity

// Expose functions that might be needed by parent components
defineExpose({
  addItem,
  updateQuantity,
  removeItem
})
</script>

<style scoped>
.cart-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  min-height: 60vh;
}

.cart-page h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #1a202c;
  font-size: 2.5rem;
}

/* Empty cart styles */
.empty-cart {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.empty-cart-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-cart p {
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

/* Cart content layout */
.cart-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: start;
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
}

/* Cart items */
.cart-items {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e2e8f0;
  align-items: center;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.tire-size {
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.unit-price {
  color: #059669;
  font-weight: 500;
  font-size: 0.9rem;
}

/* Item controls */
.item-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f7fafc;
  border-radius: 8px;
  padding: 0.25rem;
}

.quantity-btn {
  width: 2rem;
  height: 2rem;
  border: none;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.quantity-btn:hover:not(:disabled) {
  background: #3b82f6;
  color: white;
  transform: scale(1.05);
}

.quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.quantity-display {
  min-width: 2rem;
  text-align: center;
  font-weight: 600;
  color: #1a202c;
}

.item-total {
  text-align: right;
}

.item-price {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a202c;
}

.remove-btn {
  background: #fee2e2;
  color: #dc2626;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
}

.remove-btn:hover:not(:disabled) {
  background: #dc2626;
  color: white;
}

.remove-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Cart summary */
.cart-summary {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 2rem;
}

.summary-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.summary-line.discount {
  color: #059669;
  font-weight: 500;
}

.summary-line.total {
  border-top: 2px solid #e2e8f0;
  padding-top: 1rem;
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a202c;
}

/* Buttons */
.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-weight: 600;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.5);
}

.checkout-btn {
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1.1rem;
}

.btn-disabled {
  background: #9ca3af;
  cursor: not-allowed;
  box-shadow: none;
}

.btn-disabled:hover {
  transform: none;
  box-shadow: none;
}

/* Loading overlay */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  z-index: 10;
}

.loading-spinner {
  width: 3rem;
  height: 3rem;
  border: 3px solid #e2e8f0;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Error message */
.error-message {
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: #fee2e2;
  color: #dc2626;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #fecaca;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15);
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
}

.error-close {
  background: none;
  border: none;
  color: #dc2626;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .cart-page {
    padding: 1rem;
  }

  .cart-page h1 {
    font-size: 2rem;
  }

  .cart-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .item-controls {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .cart-summary {
    position: static;
  }

  .error-message {
    position: fixed;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    max-width: none;
  }
}

@media (max-width: 480px) {
  .quantity-controls {
    gap: 0.25rem;
  }

  .quantity-btn {
    width: 1.75rem;
    height: 1.75rem;
  }

  .item-controls {
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
  }
}
</style>
