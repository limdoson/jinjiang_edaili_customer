<template>
	<div class="user">
		<header>
			<div class="bg"></div>
			<div class="container">
				<!-- <div class="user-info f-s">
					<img src="../assets/img/3.png" alt="">
					<div>
						<h1>用户名称</h1>
						<p>普通会员</p>
					</div>
				</div> -->
				<ul class="account-info s-b">
					<li>
						<h1>100.00</h1>
						<p>累计收益</p>
					</li>
					<router-link tag='li' to='/collection'>
						<h1>300.00</h1>
						<p>冻结收益</p>
					</router-link>
					<router-link tag='li' to='/share-qrcode'>
						<h1>300.00</h1>
						<p>可提现收益</p>
					</router-link>
				</ul>
			</div>
		</header>
		<!-- 订单Tab -->
		<!-- <div class="order-tab">
			<h1 class="s-b">
				<p>我的订单</p>
				<router-link to='/order' tag='span'>
					更多<i class="iconfont">&#xe641;</i>
				</router-link>
			</h1>
			<ul class=" s-b">
				<router-link tag='li' to='/order/1'>
					<i class="iconfont">&#xe634;</i>
					<p>待付款</p>
				</router-link>
				<router-link tag='li' to='/order/2'>
					<i class="iconfont">&#xe649;</i>
					<p>待发货</p>
				</router-link>
				<router-link tag='li' to='/order/3'>
					<i class="iconfont">&#xe633;</i>
					<p>待收货</p>
				</router-link>
				<router-link tag='li' to='/order/4'>
					<i class="iconfont">&#xe6cb;</i>
					<p>已完成</p>
				</router-link>
			</ul>
		</div> -->
		<!-- 菜单 -->
		<ul class="menu">
			<router-link tag='li' to='/cash' class='s-b'>
				<div >
					<i class="iconfont" style="color: #ef5f46;">&#xe624;</i>
					提现
				</div>
				<i class="iconfont right-arrow">&#xe641;</i>
			</router-link>
			<router-link tag='li' to='/team' class='s-b'>
				<div >
					<i class="iconfont" style="color: #b49cfb;">&#xe6d9;</i>
					我的团队
				</div>
				<i class="iconfont right-arrow">&#xe641;</i>
			</router-link>
			<router-link tag='li' to='/share-qrcode' class='s-b'>
				<div>
					<i class="iconfont" style="color: #d69051;">&#xe637;</i>
					推广二维码
				</div>
				<i class="iconfont right-arrow">&#xe641;</i>
			</router-link>
			<!-- <router-link tag='li' to='/msg' class='s-b'>
				<div>
					<i class="iconfont" style="color: #9c9494;">&#xe626;</i>
					系统消息
				</div>
				<i class="iconfont right-arrow">&#xe641;</i>
			</router-link>
			<router-link tag='li' to='/collection' class='s-b'>
				<div>
					<i class="iconfont" style="color: #8adcd1;">&#xe630;</i>
					我的收藏
				</div>
				<i class="iconfont right-arrow">&#xe641;</i>
			</router-link>
			<router-link tag='li' to='/view-history' class='s-b'>
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
				
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>

<style>
</style>
