import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import PostView from '../pages/PostView.vue'
import PostShowView from '../pages/PostShowView.vue'
import NotFoundView from '../pages/NotFound.vue'
import LeadCreateView from '../pages/LeadCreateView.vue'

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
        path: '/lead/create',
        name: 'lead-create',
        component: LeadCreateView
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
