import {createApp} from 'vue';
import {createWebHistory, createRouter} from 'vue-router';

import App from './views/App';
import DesignEdit from './views/DesignEdit.vue';
import DesignList from './views/DesignList.vue';
import Example from './views/Example.vue';


const routes = [
  { path: '/', component: Example },
  { path: '/dashboard', component: DesignList },
  { path: '/dashboard/new', component: DesignEdit },
  { path: '/dashboard/edit/:designId', component: DesignEdit },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
