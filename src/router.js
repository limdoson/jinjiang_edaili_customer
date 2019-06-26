import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    base : process.env.NODE_ENV == 'development' ? './' : '/wap/',
    mode : 'hash',
    routes : [
        {
			path : '/',
			component : () => import('./views/Layout'),
			children : [
				{
					path : '',
					meta :{
						title : '首页'
					},
					component : () => import('./views/Index'),
				},{
					path : 'cls',
					meta :{
						title : '商品分类'
					},
					component : () => import('./views/Cls'),
				},{
					path : 'shop-car',
					meta :{
						title : '购物车'
					},
					component : () => import('./views/ShopCar'),
				},{
					path : 'user',
					meta :{
						title : '会员中心'
					},
					component : () => import('./views/User'),
				}
			]
		},{
			path : '/order/:flag?',
			meta : {
				title : '我的订单'
			},
			name : 'order',
			component : () => import('./views/user/Order')
		}
    ]
})

router.afterEach((to, from, next) => {
	
	document.title = to.meta.title;
})

export default router;