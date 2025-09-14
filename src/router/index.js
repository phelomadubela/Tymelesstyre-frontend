import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import AdminUsers from '../views/AdminUserManagement.vue';
import auth from '../stores/auth.js';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  {
    path: '/adminusers', name: 'admin-users',
    component: AdminUsers, meta: { requiresAdmin: true }, 
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const currentUser = auth.getCurrentUser();

  if (to.meta.requiresAdmin) {
    if (!currentUser) {
      
      next('/login');
    } else if (currentUser.role !== 'ADMIN') {
     
      next('/'); 
    } else {
      
      next();
    }
  } else {
    next(); 
  }
});

export default router;
