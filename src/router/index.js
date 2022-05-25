import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from '@/componentes/Formulario/IndexFormulario'
import ApiRest from '@/componentes/ApiRest.vue'


Vue.use(VueRouter)


export const router = new VueRouter({
  mode: 'history',
  routes :[
    { path: '/formulario', component: Formulario },
    { path: '/apiRest', component: ApiRest },

  ]

})

export default router
