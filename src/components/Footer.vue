<template>
	<div>
		底部按钮
		<van-tabbar 
			class='page-footer'
			v-model="active"
			route
			active-color="orangered">
			<van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
			<van-tabbar-item icon="apps-o" to='/cls'>分类</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart-o" to='/shop-car'>购物车</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to='/user'>我的</van-tabbar-item>
			<van-tabbar-item icon="gem-o" to='/fx' v-if='$store.state.user.type == 2'>分销中心</van-tabbar-item>
		</van-tabbar>
	</div>
	
</template>
<script>
	export default {
		data () {
			return {
				active : 0
			}
		},
		created  () {
			console.log('import footer')
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>
<style scoped lang="less">
	.page-footer {
		position: fixed;
		bottom: 0;
		z-index: 1987;
		width: 100%;
	}
</style>