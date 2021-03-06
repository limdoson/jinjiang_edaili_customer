import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'
import http from './utils/http.js'
Vue.use(Router)

let router = new Router({
    base : process.env.NODE_ENV == 'development' ? './' : '/customer/',
    mode : process.env.NODE_ENV == 'development' ? 'hash' : 'history',
	activeClass : 'active',
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
				},{
					path : 'fx',
					meta :{
						title : '分销中心'
					},
					component : () => import('./views/Fx'),
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
		},{//优惠券领取中心
			path : '/ticket',
			meta : {
				title : '优惠券领取中心'
			},
			name : 'ticket',
			component : () => import('./views/user/Ticket')
		},{//我的优惠券
			path : '/my-ticket',
			meta : {
				title : '我的优惠券'
			},
			name : 'my-ticket',
			component : () => import('./views/user/MyTicket')
		},{//消息
			path : '/msg',
			meta : {
				title : '系统消息'
			},
			name : 'msg',
			component : () => import('./views/user/Msg')
		},{//消息详情
			path : '/msg-detail/:id?',
			meta : {
				title : '详情'
			},
			name : 'msg-detail',
			component : () => import('./views/user/MsgDetail')
		},{//我的收藏
			path : '/collection',
			meta : {
				title : '我的收藏'
			},
			name : 'collection',
			component : () => import('./views/user/Collection')
		},{//浏览记录
			path : '/view-history',
			meta : {
				title : '浏览记录'
			},
			name : 'view-history',
			component : () => import('./views/user/ViewHistory')
		},{//充值
			path : '/recharge',
			meta : {
				title : '充值'
			},
			name : 'recharge',
			component : () => import('./views/user/Recharge')
		},{//充值记录
			path : '/recharge-record',
			meta : {
				title : '充值记录'
			},
			name : '/recharge-record',
			component : () => import('./views/user/RechargeRecord')
		},{//申请成为分销
			path : '/apply',
			meta : {
				title : '分销申请'
			},
			name : 'apply',
			component : () => import('./views/user/Apply')
		},{//推广二维码
			path : '/share-qrcode',
			meta : {
				title : '推广二维码'
			},
			name : 'share-qrcode',
			component : () => import('./views/fx/ShareQrcode')
		},{//分销团队
			path : '/team',
			meta : {
				title : '我的团队'
			},
			name : 'team',
			component : () => import('./views/fx/Team')
		},{//下级团队
			path : '/sub-team/:id?',
			meta : {
				title : '次级团队'
			},
			name : 'sub-team',
			component : () => import('./views/fx/SubTeam')
		},{//提现
			path : '/cash',
			meta : {
				title : '提现'
			},
			name : 'cash',
			component : () => import('./views/fx/Cash')
		},{//商品列表
			path : '/product-list/:id',
			meta :{
				title : '商品列表'
			},
			component : () => import('./views/product/ProductList')
		},{//商品详情
			path : '/product-detail/:id',
			meta :{
				title : '商品详情'
			},
			component : () => import('./views/product/ProductDetail')
		},{//订单确认
			path : '/curfirm-order',
			meta :{
				title : '确认订单'
			},
			component : () => import('./views/order/CurfirmOrder')
		},{//支付成功
			path : '/pay-success',
			meta :{
				title : '支付成功'
			},
			component : () => import('./components/PaySuccess')
		},{//分销商提现记录
			path : '/cash-record',
			meta :{
				title : '提现记录'
			},
			component : () => import('./views/fx/CashRecord')
		},{//绑定用户信息
			path : '/binding',
			meta :{
				title : '完善账号信息'
			},
			component : () => import('./views/user/Binding')
		}
    ]
})
let wx_api_list =['openLocation','getLocation','updateAppMessageShareData','updateTimelineShareData','onMenuShareAppMessage','onMenuShareTimeline','chooseWXPay'];

router.beforeEach((to,form,next) => {
	if (to.path == '/order') {
		http.post('/v1/wechat/sdk',{
			url : location.href
		}).then(res => {
			wx.config({
				debug : false,
				appId : res.data.appId,
				timestamp : res.data.timestamp,
				nonceStr : res.data.nonceStr,
				signature : res.data.signature,
				jsApiList : ['chooseWXPay'],
			})
			next();
		})
	} else {
		next()
	}
})

router.afterEach((to, from) => {
	if (to.path == '/curfirm-order') {
		http.post('/v1/wechat/sdk',{
			url : location.origin + '/customer/curfirm-order'
		}).then(res => {
			wx.config({
				debug : false,
				appId : res.data.appId,
				timestamp : res.data.timestamp,
				nonceStr : res.data.nonceStr,
				signature : res.data.signature,
				jsApiList : ['chooseWXPay'],
			})
		})
	}
	document.title = to.meta.title;
	if (to.path != '/') {
		if (!Store.state.user) {
			http.post('/v1/c_user/getInfo',{
				
			}).then(res => {
				Store.commit('initUser',res.data.user);
			})
		}
	}
})

// router.onError((error) => {
//     const pattern = /Loading chunk (\d)+ failed/g;
//     const isChunkLoadFailed = error.message.match(pattern);
//     const targetPath = router.history.pending.fullPath;
//     if(isChunkLoadFailed){
//         router.replace(targetPath);
//     }
// })

export default router;