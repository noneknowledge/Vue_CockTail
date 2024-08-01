import { createRouter, createWebHistory } from 'vue-router'

import CockTailView from '../views/CockTailView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: CockTailView
        },

        {
            path: '/cocktail',
            name: 'cocktail',
            component: CockTailView
            // children: [
            //     {
            //         path: ':slug',
            //         component: CockTail
            //     }
            // ]
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // }
    ]
})

export default router
