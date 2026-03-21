import { createRouter, createWebHashHistory } from "vue-router";

import About from './components/pages/About.vue'
import AddIdea from './components/pages/AddIdea.vue'
import AddIdeaConfirmation from './components/pages/AddIdeaConfirmation.vue'
import AddIssue from './components/pages/AddIssue.vue'
import AddIssueConfirmation from './components/pages/AddIssueConfirmation.vue'
import AddPriority from './components/pages/AddPriority.vue'
import AddPriorityConfirmation from './components/pages/AddPriorityConfirmation.vue'
import Ideas from './components/pages/Ideas.vue'
import Issues from './components/pages/Issues.vue'
import LogoutConfirmation from './components/pages/LogoutConfirmation.vue'
import LoginPage from './components/pages/LoginPage.vue'
import LoginConfirmation from './components/pages/LoginConfirmation.vue'
import Priorities from './components/pages/Priorities.vue'

const routes = [
    { path: '/about', component: About },
    { path: '/add-idea', component: AddIdea },
    { path: '/add-idea-confirmation', component: AddIdeaConfirmation },
    { path: '/add-issue', component: AddIssue },
    { path: '/add-issue-confirmation', component: AddIssueConfirmation },
    { path: '/add-priority', component: AddPriority },
    { path: '/ideas', component: Ideas },
    { path: '/issues', component: Issues },
    { path: '/logout-confirmation', component: LogoutConfirmation },
    { path: '/priorities', component: Priorities },
    { path: '/add-priority-confirmation', component: AddPriorityConfirmation },
    { path: '/login-page', component: LoginPage },
    { path: '/login-confirmation', component: LoginConfirmation },

]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
