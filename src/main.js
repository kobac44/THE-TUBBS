import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import '@fortawesome/fontawesome-free/css/all.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(fas)

// Vue.component('font-awesome-icon', FontAwesomeIcon);

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App) 
// }).$mount('#app');

createApp(App).use(router).mount('#app');
