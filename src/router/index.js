import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductList from '../views/ProductListView.vue'
import Product from '../components/Product.vue'
import Cart from '../components/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:type',
      name: 'products',
      component: ProductList
    },
    {
      path: '/product/:type/:id',
      name: 'productsItem',
      component: Product
    },
    {
      path: '/cart',
      name: 'cartItem',
      component: Cart
    }
  ]
})

export default router
