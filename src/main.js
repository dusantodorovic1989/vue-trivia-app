import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp.vue'
import Vuex from 'vuex'
import { chuckStore } from './store/chuckStore.js'
import {triviaStore} from './store/triviaStore.js'
import Chuck from './components/Chuck.vue'

Vue.use(VueRouter)

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  modules:{
    chuckStore,
    triviaStore,
  }
})

const routes = [
  {path:'/', redirect:'/trivia'},
  {path:'/trivia', component: TriviaApp, name:'trivia'},
  {path:'/chuck', component: Chuck, name:'chuck'},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
