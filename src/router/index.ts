import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewView from '../views/NewView.vue'
import CockTailView from '../views/CockTailView.vue'
import CockTail from '../components/CockTail.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/new',
            name: 'new',
            component: NewView
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
