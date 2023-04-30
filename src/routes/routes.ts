/*Default routes*/
let routes = [
    {
        path: "/",
        component: () => import("@/layouts/MainLayout.vue"),
        children: [
            {
                name: "dashboard",
                path: "",
                component: () => import("@/pages/IndexPage.vue"),
                meta: { requiresAuth: true },
            },
        ],
    },
];

/*Dynamic generated routes*/
const modules = import.meta.glob("./modules/*.ts", { eager: true });
for (const path in modules) {
    routes = [...routes, ...modules[path].default];
}

routes.push({
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/errors/NotFoundPage.vue"),
    children: []
});

export default routes;