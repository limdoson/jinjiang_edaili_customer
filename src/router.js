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
		},{//我的订单
			path : '/order/:flag?',
			meta : {
				title : '我的订单'
			},
			name : 'order',
			component : () => import('./views/user/Order')
		},{//收货地址管理
			path : '/adr-manage',
			meta : {
				title : '收货地址管理'
			},
			name : 'adr-manage',
			component : () => import('./views/user/AdrManage')
		},{//地址添加/编辑
			path : '/adr-add/:id?',
			meta : {
				title : '添加/编辑地址'
			},
			name : 'adr-add',
			component : () => import('./views/user/AdrAdd')
		}
    ]
})

router.afterEach((to, from, next) => {
	
	document.title = to.meta.title;
})

export default router;