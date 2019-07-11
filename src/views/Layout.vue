<template>
	<div class="layout">
		<router-view></router-view>
		<ul class="page-footer s-a">
			<router-link tag='li' to='/' >
				<i class="iconfont">&#xe61f;</i>
				<p>首页</p>
			</router-link>
			<router-link tag='li' to='/cls' >
				<i class="iconfont">&#xe7f9;</i>
				<p>分类</p>
			</router-link>
			<router-link tag='li' to='/shop-car' >
				<i class="iconfont">&#xe7a6;</i>
				<p>购物车</p>
			</router-link>
			<router-link tag='li' to='/user' >
				<i class="iconfont">&#xe600;</i>
				<p>我的</p>
			</router-link>
			<router-link tag='li' to='/fx'  v-if='$store.state.user && $store.state.user.type == 2'>
				<i class="iconfont">&#xe627;</i>
				<p>分销中心</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import Footer from '@c/Footer'
	export default {
		components: {Footer},
		data () {
			return {
				active : 0
			}
		},
		created  () {
			// if (!this.$store.state.user) {
			// 	this.http.post('/v1/c_user/getInfo',{
			// 		
			// 	}).then(res => {
			// 		this.$store.commit('initUser',res.data)
			// 	})
			// }
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
		background: #fff;
		box-shadow: 0px -1px 3px #948f8f;
		li {
			padding: 10px 0;
			text-align: center;
			p {
				font-size: 12px;
			}
		}
		.router-link-exact-active {
			color: orangered;
		}
	}
</style>
