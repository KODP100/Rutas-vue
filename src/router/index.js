import { createRouter, createWebHistory } from 'vue-router';

import Principalpagina from "@/modules/pages/Principalpagina.vue";
import Contactopagina from "@/modules/pages/Contactopagina.vue";
import Featurepagina from "@/modules/pages/Featurepagina.vue";
import Preciocontacto from "@/modules/pages/Preciocontacto.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Principalpagina',
      component: Principalpagina,
    },
    {
      path: '/Contactopagina',
      name: 'Contactopagina',
      component: () => import ('@/modules/pages/Contactopagina.vue'),
    },
    {
      path: '/Featurepagina',
      name: 'Featurepagina',
      component: () => import ('@/modules/pages/Featurepagina.vue'),
    },
    {
      path: '/Preciocontacto',
      name: 'Preciocontacto',
      component: () => import ('@/modules/pages/Preciocontacto.vue'),
    },
  ]
});

export default router;

