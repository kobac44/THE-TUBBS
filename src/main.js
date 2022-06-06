import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(fas)

// Vue.component('font-awesome-icon', FontAwesomeIcon);

// Vue.config.productionTip = false,

// new Vue({
//     el: '#app',
//     components: { App },
//     template: '<App/>'
//   });

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
