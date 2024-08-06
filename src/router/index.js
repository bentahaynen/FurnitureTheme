import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'


const routes = [
  { path: '/', name: 'Home', component: HomeView },
  {path: '/products/', name: 'Product', component: ProductsView},
  {path: '/about/', name: 'About', component: AboutView},
  {path: '/contact/', name: 'Contact', component: ContactView},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
