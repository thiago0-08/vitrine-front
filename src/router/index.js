import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Produto/:id',
      name: 'Produto',
      component: () => import('../views/Produto.vue')
    },
    {
      path: '/Carrinho',
      name: 'Carrinho',
      component: () => import('../views/Carrinho.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/Categoria/:idCategoria',
      name: 'Categoria',
      component: () => import('../views/Categoria.vue')
    }

  
  ]
})

export default router
