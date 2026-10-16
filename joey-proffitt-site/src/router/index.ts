// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Main from '../Main.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/work', redirect: { path: '/', hash: '#projects' } },
        {
            path: '/work/ammiti',
            component: () => import('../views/AmmitiPage.vue'),
            meta: { title: 'Ammiti — Project' },
        },
        {
            path: '/journal',
            component: () => import('../views/JournalPage.vue'),
            meta: { title: 'Journal' },
        },
        {
            path: '/journal/:slug',
            component: () => import('../views/JournalEntry.vue'),
            meta: { title: 'Journal' },
        },
        {
            path: '/',
            name: 'Main',
            component: Main,
        },
        {
            path: '/home',
            redirect: { path: '/', hash: '#landing' },
        },
        {
            path: '/projects',
            redirect: { path: '/', hash: '#projects' },
        },
        {
            path: '/contact',
            redirect: { path: '/', hash: '#contact' },
        },
        {
            path: '/skills',
            redirect: { path: '/', hash: '#skills' },
        },
        {
            path: '/about',
            redirect: { path: '/', hash: '#about' },
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
                top: to.hash === '#projects' ? 80 : 0,
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                    ? 'auto'
                    : 'smooth',
            }
        }
        return { top: 0 }
    },
})

router.afterEach((to) => {
    document.title = to.meta.title ? String(to.meta.title) + ' | Joey Proffitt' : 'Joey Proffitt'
})
export default router
