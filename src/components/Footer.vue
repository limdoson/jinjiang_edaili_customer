<template>
	<van-tabbar 
		v-model="active"
		route
		active-color="orangered">
		<van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
		<van-tabbar-item icon="apps-o" to='/cls'>分类</van-tabbar-item>
		<van-tabbar-item icon="shopping-cart-o" to='/shop-car'>购物车</van-tabbar-item>
		<van-tabbar-item icon="friends-o" to='/user'>我的</van-tabbar-item>
		<van-tabbar-item icon="gem-o" to='/fx' v-if='$store.state.user.type == 2'>分销中心</van-tabbar-item>
	</van-tabbar>
</template>
<script>
	export default {
		data () {
			return {
				active : 0
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>