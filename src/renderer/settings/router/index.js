import {createRouter, createWebHashHistory} from 'vue-router';
import AccountView from '../views/AccountView.vue';
import AboutView from '../views/AboutView.vue';
import GeneralView from '../views/GeneralView.vue';
import ShortcutsView from '../views/ShortcutsView.vue';

const routes = [
  {
    path: '/',
    name: 'Account',
    component: AccountView
  },
  {
    path: '/general',
    name: 'General',
    component: GeneralView
  },
  {
    path: '/shortcuts',
    name: 'Shortcuts',
    component: ShortcutsView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
