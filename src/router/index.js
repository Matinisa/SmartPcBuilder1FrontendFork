import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import PCBuilder from '../views/PCBuilder.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Checkout from '../views/Checkout.vue'
import Orders from '../views/Orders.vue'
import Profile from '../views/Profile.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/products', component: Products, name: 'Products' },
  { path: '/products/:id', component: ProductDetails, name: 'ProductDetails' },
  { path: '/builder', component: PCBuilder, name: 'PCBuilder' },
  { path: '/cart', component: Cart, name: 'Cart' },
  { path: '/checkout', component: Checkout, name: 'Checkout' },
  { path: '/orders', component: Orders, name: 'Orders' },
  { path: '/profile', component: Profile, name: 'Profile' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/register', component: Register, name: 'Register' },
  { path: '/admin', component: AdminDashboard, name: 'AdminDashboard' },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

export default router
