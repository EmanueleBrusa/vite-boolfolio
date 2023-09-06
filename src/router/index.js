import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import PostView from '../pages/PostView.vue'
import PostShowView from '../pages/PostShowView.vue'
import NotFoundView from '../pages/NotFound.vue'

const routes = [
  {
        path: '/',
        name: 'home',
        component: HomeView
  },
  {
        path: '/posts',
        name: 'posts',
        component: PostView
  },
  {
        path: '/post/:id',
        name: 'postShow',
        component: PostShowView,
        props: true,
  },
  {
        path: '/pagina-non-trovata',
        name: 'not-found',
        component: NotFoundView,
  },
  { 
        path: '/:pathMatch(.*)*', 
        redirect: '/pagina-non-trovata' 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
