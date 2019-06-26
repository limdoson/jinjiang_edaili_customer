<template>
	<div class="order">
		<page-nav-header></page-nav-header>
		<!-- tab -->
		<van-tabs v-model="active">
			<van-tab title="全部"></van-tab>
			<van-tab title="待付款"></van-tab>
			<van-tab title="待发货"></van-tab>
			<van-tab title="待收货"></van-tab>
			<van-tab title="已完成"></van-tab>
			<van-tab title="已取消"></van-tab>
		</van-tabs>
		<!-- 订单列表 -->
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad">
			<van-cell class='order-list'>
				<div class='order-list-item'>
					<div class="order-info f-s">
						<img src="../../assets/img/3.png" alt="">
						<div>
							<h1>商品名称</h1>
							<p class="attr">已选：红色/170</p>
							<p class="s-b">
								<span class="">￥<span class="price">10.00</span></span>
								<span>数量：5</span>
							</p>
						</div>
					</div>
					<p class="order-handles s-b">
						<span>取消订单</span>
						<span>查看物流</span>
						<span>确认收货</span>
						<span>立即支付</span>
					</p>
				</div>
			</van-cell>
		</van-list>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				active : 0,
				loading: false,
				finished: false
			}
		},
		created() {
			console.log(this.$route)
			if (this.$route.params.flag) {
				this.active = this.$route.params.flag;
			}
		},
		methods:{
			onLoad () {
				console.log('onload')
			}
		}
	}
</script>
