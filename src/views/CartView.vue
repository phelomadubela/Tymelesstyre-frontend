<template>
  <div class="cart-page">
    <h1>Shopping Cart</h1>

    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>Your cart is empty</p>
      <router-link to="/products" class="btn-primary">Continue Shopping</router-link>
    </div>

    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <div class="item-info">
          <h3>{{ item.brand }} {{ item.model }}</h3>
          <p>Size: {{ item.sectionWidth }}/{{ item.aspectRatio }}R{{ item.rimDiameter }}</p>
        </div>

        <div class="item-controls">
          <div class="quantity-controls">
            <button @click="updateQuantity(item.id, item.quantity - 1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
          </div>

          <p class="item-price">R{{ (item.price * item.quantity).toFixed(2) }}</p>
          <button @click="removeItem(item.id)" class="remove-btn">Remove</button>
        </div>
      </div>

      <div class="cart-summary">
        <h3>Total: R{{ cartTotal }}</h3>
        <router-link to="/checkout" class="btn-primary">Proceed to Checkout</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { cartItems, cartTotal } = storeToRefs(cartStore)

const updateQuantity = (productId, newQuantity) => {
  if (newQuantity < 1) {
    cartStore.removeItem(productId)
  } else {
    cartStore.updateQuantity(productId, newQuantity)
  }
}

const removeItem = (productId) => {
  cartStore.removeItem(productId)
}
</script>
