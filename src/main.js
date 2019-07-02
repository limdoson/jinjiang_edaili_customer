import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import http from '@u/http'
Vue.prototype.http = http;

import utils from '@u/index'
Vue.prototype.utils = utils;

//引入全局注册组件方法
import vComponent from '@u/reg-components'
Vue.use(vComponent);

Vue.config.productionTip = false

import '@ast/css/app.less';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

new Vue({
    router,
    store,
    render : h => h(App)
}).$mount('#app')
