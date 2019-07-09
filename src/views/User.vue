<template>
	<div class="user" v-if='$store.state.user'>
		<header>
			<div class="bg"></div>
			<div class="container">
				<router-link tag='h1' class='apply' to='/apply' v-if='$store.state.user.type == 1'>
					申请成为分销
				</router-link>
				<div class="user-info f-s">
					<img :src="$store.state.user.img" alt="">
					<div>
						<h1>{{$store.state.user.nickname}}</h1>
					</div>
				</div>
				<ul class="account-info s-b">
					<li>
						<h1>{{$store.state.user.balance}}</h1>
						<p>余额</p>
					</li>
					<router-link tag='li' to='/collection'>
						<h1>{{$store.state.user.collectNum}}</h1>
						<p>收藏</p>
					</router-link>
					<router-link tag='li' to='/my-ticket'>
						<h1>{{$store.state.user.couponNum}}</h1>
						<p>优惠券</p>
					</router-link>
				</ul>
			</div>
		</header>
		<!-- 订单Tab -->
		<div class="order-tab">
			<h1 class="s-b">
				<p>我的订单</p>
				<router-link to='/order' tag='span'>
					更多<i class="iconfont">&#xe641;</i>
				</router-link>
			</h1>
			<ul class=" s-b">
				<router-link tag='li' to='/order'>
					<i class="iconfont">&#xe634;</i>
					<p>待付款</p>
				</router-link>
				<router-link tag='li' to='/order/1'>
					<i class="iconfont">&#xe649;</i>
					<p>待发货</p>
				</router-link>
				<router-link tag='li' to='/order/2'>
					<i class="iconfont">&#xe633;</i>
					<p>待收货</p>
				</router-link>
				<router-link tag='li' to='/order/3'>
					<i class="iconfont">&#xe6cb;</i>
					<p>已完成</p>
				</router-link>
			</ul>
		</div>
		<!-- 菜单 -->
		<ul class="menu">
			<router-link tag='li' to='/recharge' class='s-b'>
				<div >
					<i class="iconfont" style="color: #ef5f46;">&#xe624;</i>
					充值
				</div>
				<i class="iconfont right-arrow">&#xe641;</i>
			</router-link>
			<router-link tag='li' to='/adr-manage' class='s-b'>
				<div >
					<i class="iconfont" style="color: #b49cfb;">&#xe6d9;</i>
					收货地址管理
				</div>
				<i class="iconfont right-arrow">&#xe641;</i>
			</router-link>
			<router-link tag='li' to='/ticket' class='s-b'>
				<div>
					<i class="iconfont" style="color: #d69051;">&#xe637;</i>
					优惠券领取中心
				</div>
				<i class="iconfont right-arrow">&#xe641;</i>
			</router-link>
			<!-- <router-link tag='li' to='/msg' class='s-b'>
				<div>
					<i class="iconfont" style="color: #9c9494;">&#xe626;</i>
					系统消息
				</div>
				<i class="iconfont right-arrow">&#xe641;</i>
			</router-link> -->
			<router-link tag='li' to='/collection' class='s-b'>
				<div>
					<i class="iconfont" style="color: #8adcd1;">&#xe630;</i>
					我的收藏
				</div>
				<i class="iconfont right-arrow">&#xe641;</i>
			</router-link>
			<!-- <router-link tag='li' to='/view-history' class='s-b'>
				<div>
					<i class="iconfont" style="color: #ef3dc7;">&#xe621;</i>
					浏览记录
				</div>
				<i class="iconfont right-arrow">&#xe641;</i>
			</router-link> -->
		</ul>
	</div>
</template>

<script>
	export default {
	
		data () {
			return {
				nickname  : null,
				balance : null,
				type : null,
				img : null,
				collectNum :null,
				couponNum : null
			}
		},
		created  () {
			// this.initData()
			if (this.$store.state.user.realname == '') {
				this.utils.msg('请完善账号信息',() => {
					this.$router.push('/binding')
				})
				
			}
		},
		//mounted () {},
		methods : {
			initData () {
				this.http.post('/v1/c_user/getInfo',{
					
				}).then(res => {
					this.type = res.data.type;
					this.nickname = res.data.nickname;
					this.balance = res.data.balance;
					this.img = res.data.img;
					this.collectNum = res.data.collectNum;
					this.couponNum = res.data.couponNum;
					this.$store.commit('initUser',res.data)
				})
			}
		}
	}
</script>

<style>
</style>
