import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);


// Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.config.productionTip = false

// 把echarts引入并加载到原型上
/* import echarts from 'echarts'
Vue.prototype.$echarts = echarts */

import echarts from './plugins/echarts'
Vue.use(echarts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
