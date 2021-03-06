import Vue from 'vue'
import VueRouter from 'vue-router'
import Skills from '@/components/Skills.vue'
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/about',
        name: 'About',
        component: About,

    },
    {
        path: '/',
        name: 'Main',
        component: Main,

    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills,

    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,

    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router