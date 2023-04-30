export default  [
    {
        path: "/empty-page",
        component: () => import("@/layouts/MainLayout.vue"),
        children: [
            {
                path: "",
                component: () => import("@/pages/examples/EmptyPage.vue"),
            }
        ]
    }
]