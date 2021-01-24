import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import moment from 'moment'
import VueMoment from 'vue-moment'

require('moment/locale/fr');
moment.locale('fr');
Vue.use(VueMoment, {
  moment
})


Vue.use(Vuelidate);
Vue.use(VueSweetalert2);


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
