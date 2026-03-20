import { createRouter, createWebHashHistory } from "vue-router";

import About from './components/pages/About.vue'
import AddIdea from './components/pages/AddIdea.vue'
import AddIssue from './components/pages/AddIssue.vue'
import AddPriority from './components/pages/AddPriority.vue'
import Ideas from './components/pages/Ideas.vue'
import Issues from './components/pages/Issues.vue'
import Priorities from './components/pages/Priorities.vue'

const routes = [
    { path: '/about', component: About },
    { path: '/add-idea', component: AddIdea },
    { path: '/add-issue', component: AddIssue },
    { path: '/add-priority', component: AddPriority },
    { path: '/ideas', component: Ideas },
    { path: '/issues', component: Issues },
    { path: '/priorities', component: Priorities }

]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
