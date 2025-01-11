import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import uView from "uview-ui";
import Message from '@/plugins/message/message.js'
import 'uview-ui/theme.scss'

Vue.use(uView);
export default Message
