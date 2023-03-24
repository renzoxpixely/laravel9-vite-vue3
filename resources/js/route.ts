import TopPage from './pages/TopPage.vue';
import NextPage from './pages/NextPage.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'TopPage',
        component: TopPage,
    },
    {
        path: "/next",
        name: 'NextPage',
        component: NextPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
