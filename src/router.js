import { createWebHistory, createRouter } from "vue-router";

import Home from './components/pages/Home.vue'
// import About from './components/pages/About.vue'
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/hello', component: HelloWorld}
]

