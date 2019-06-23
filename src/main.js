import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import utils from '@u/index'
Vue.prototype.utils = utils;

//引入全局注册组件方法
import vComponent from '@u/reg-components'
Vue.use(vComponent);

Vue.config.productionTip = false

import '@ast/css/app.less';

new Vue({
    router,
    store,
    render : h => h(App)
}).$mount('#app')
