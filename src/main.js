import Vue from 'vue'
import App from './App.vue'
import Message from '@/plugins/message/message.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.use(Message);
export default Message
