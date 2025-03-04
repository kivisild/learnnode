import './style.scss';
import { createApp } from "vue";
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router';

import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';
import Chuck from './pages/Chuck.vue';
import RickAndMorty from './pages/RickAndMorty.vue';

import App from "./App.vue";

const routes = [
    {path: '/', component: ToDo, name: 'ToDo'},
    {path: '/modals', component: Modals, name: 'Modals'},
    {path: '/chuck', component: Chuck, name: 'Chuck'},
    {path: '/rickandmorty', component: RickAndMorty, name: "Rick and Morty"}

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount("#app");