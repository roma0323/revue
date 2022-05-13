import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewArticleView from '../views/NewArticle.vue'
import EditArticleView from '../views/EditArticle.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/NewArticle',
    name: 'NewArticle',
    component: NewArticleView
  },
  {
    path: '/EditArticle/:id',
    name: 'EditArticle',
    component: EditArticleView
  },
  {
    path: '/about',
    name: 'about',
    // 有點進去才加載
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
