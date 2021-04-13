import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ordern from '../views/Ordern.vue'
import Ordery from '../views/Ordery.vue'
import Income from '../views/Income.vue'
import Account from '../views/Account.vue'
import Background from '../views/Background.vue'
import Nocie from '../views/Nocie.vue'
import Nociebyps from '../views/Nociebyps.vue'
import Program from '../views/Program.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      { path:'/success/Ordern',
        name:'Ordern',
        component:Ordern
      },
      { path:'/success/Ordery',
        name:'Ordern',
        component:Ordery
      },
      {
        path:'/income',
        name:'Ordern',
        component:Income
      },{
        path:'/background',
        name:'Background',
        component:Background
      },{
        path:'/account',
        name:'Account',
        component:Account
      },{
        path:'/nocie',
        name:'Nocie',
        component:Nocie
      },{
        path:'/nociebyps',
        name:'Nociebyps',
        component:Nociebyps
      },{
        path:'/program',
        name:'Program',
        component:Program
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
