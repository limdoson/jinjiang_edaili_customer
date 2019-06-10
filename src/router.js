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
		}
    ]
})

router.afterEach((to, from, next) => {
	console.log(to.meta.title);
	document.title = to.meta.title;
})

export default router;