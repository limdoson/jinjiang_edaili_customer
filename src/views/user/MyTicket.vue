<template>
	<div class="ticket page">
		<page-nav-header></page-nav-header>
		<ul class="list" v-if='list'>
			<li class="s-b" @click='getTicket(item)' v-for='item in list' :key='item.id'>
				<div>
					<h2>{{item.title}}</h2>
					<p>有效期：{{item.end_time}}</p>
				</div>
				<div>
					<h1>
						
						<p v-if='item.type == 1'>
							<span class="red">{{item.money}}</span>元
						</p>
						<p v-if='item.type == 2'>
							满<span class="red">{{item.order_money}}</span>减<span class="red">{{item.reduce_money}}</span>
						</p>
					</h1>
					<p>
						<span v-if='item.model == 1'>全场通用</span>
						<span v-if='item.model == 2'>指定单品</span>
					</p>
				</div>
				
			</li>
		</ul>
		<none v-else></none>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				list : null
			}
		},
		created () {
			this.initData();
		},
		
		methods : {
			initData () {
				this.http.post('/v1/c_coupon/getMyCoupon',{
					
				}).then(res =>{
					if (res.data.length) {
						this.list = res.data;
					}
				})
			},
		},
	}
</script>
