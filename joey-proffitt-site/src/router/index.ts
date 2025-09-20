// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Main from '../Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      redirect: { path: '/', hash: '#home' }
    },
    {
      path: '/contact',
      redirect: { path: '/', hash: '#contact' }
    },
    {
      path: '/skills',
      redirect: { path: '/', hash: '#skills' }
    },
    {
      path: '/about',
      redirect: { path: '/', hash: '#about' }
    },
    // Example of a *real* page (not part of scrolling layout)
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: () => import('../views/Admin.vue')
    // }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
