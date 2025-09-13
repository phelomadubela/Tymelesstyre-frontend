import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
 import RegisterView from '../views/RegisterView.vue'
// import AdminDashboard from '../views/admin/AdminDashboard.vue'
// import CustomerDashboard from '../views/admin/CustomerDashboard.vue'
// import ProductsView from '../views/ProductsView.vue'
// import CheckoutView from '../views/CheckoutView.vue'
// import ProfileView from '../views/ProfileView.vue'
// import AdminLayout from '../views/admin/AdminLayout.vue'
// import AdminProducts from '../views/admin/AdminProducts.vue'
// import AdminOrders from '../views/admin/AdminOrders.vue'
// import AdminUsers from '../views/admin/AdminUsers.vue'
// import { useAuthStore } from '../stores/auth'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  // {path: '/admindashboard', name: 'admindashboard', component: AdminDashboard},
  // {path: '/customerdashboard', name: 'customerdashboard', component: CustomerDashboard},
  // { path: '/products', name: 'products', component: ProductsView },
  // { path: '/checkout', name: 'checkout', component: CheckoutView },
  // { path: '/profile', name: 'profile', component: ProfileView, meta: { requiresAuth: true } },
  // In router/index.js
  // {
  //   path: '/admin',
  //   component: AdminLayout,
  //   meta: { requiresAuth: true, requiresAdmin: true },
  //   children: [
  //     { path: 'dashboard', component: AdminDashboard },
  //     { path: 'products', component: AdminProducts },
  //     { path: 'orders', component: AdminOrders },
  //     { path: 'users', component: AdminUsers },
  //   ],
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Add navigation guard for protected routes
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore()
//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
