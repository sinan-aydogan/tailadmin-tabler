import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";

export const Router = createRouter({
    routes,
    history: createWebHistory(),
})