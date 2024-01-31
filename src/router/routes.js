const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/index",
    component: () => import("layouts/Tampilan/IndexLayout.vue"),
    children: [
      {
        path: "/masterbarang",
        component: () => import("pages/Master/MasterBarang.vue"),
      },
      {
        path: "/masteruser",
        component: () => import("pages/Master/MasterUser.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
