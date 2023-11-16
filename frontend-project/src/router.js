// router.js
import { createRouter, createWebHistory } from 'vue-router';
import UserProfile from './components/UserProfile.vue';
import SearchViewer from './components/SearchViewer.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: SearchViewer,
  },
  {
    path: "/users",
    name: "users",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
