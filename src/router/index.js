import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/front/Home.vue'
import HiddenPage1 from "../views/front/HiddenPage1";
import HiddenPage2 from "../views/front/HiddenPage2";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hidden-page-1',
    name: 'hidden-page-1',
    component: HiddenPage1
  },
  {
    path: '/hidden-page-2',
    name: 'hidden-page-2',
    component: HiddenPage2
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: HiddenPage2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
