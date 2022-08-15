import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Inicio from "@/pages/Inicio.vue";
import Reportes from "@/pages/Reportes.vue";
import Nosotros from "@/pages/Nosotros.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/inicio",
    children: [
      {
        path: "inicio",
        name: "INICIO",
        component: Inicio
      },
      {
        path: "reportes",
        name: "REPORTES",
        component: Reportes
      },
      {
        path: "nosotros",
        name: "SOBRE NOSOTROS",
        component: Nosotros
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
