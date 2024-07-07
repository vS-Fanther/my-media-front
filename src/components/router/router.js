import {createRouter, createWebHistory} from "vue-router";
import AnimeView from "@/components/anime/AnimeView.vue";

const routes = [
    {
        path: '/',
        component: AnimeView
    },
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;