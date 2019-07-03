<template>
	<div class="page cash-record">
		<page-nav-header></page-nav-header>
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad">
			<ul class="list" v-if='list'>
				<li class="s-b" v-for="item in list" :key='item.id'>
					<div>
						<span>{{item.add_time}}申请提现<span class="red">{{item.money}}</span>元</span>，手续费<span class="red">{{item.fee}}</span>元
					</div>
					<div>
						<span v-if='item.status == 0'>待审核</span>
						<span v-if='item.status == 1'>已通过</span>
						<span v-if='item.status == 2'>被驳回</span>
						<span v-if='item.status == 3'>已取消</span>
					</div>
				</li>
			</ul>
			<none v-else></none>
		</van-list>
		
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				loading : false,
				finished : false,
				page :1,
				limit :50,
				list : null
			}
		},
		created () {
			
		},
		
		methods : {
			onLoad(){
				this.http.post('/v1/c_dis/getCashLog',{
					tId : this.$route.params.id,
					limit :this.limit,
					page : this.page
				}).then(res => {
					if (res.data.log.data.length) {//有数据
						if (this.page == 1) {
							this.list = res.data.log.data;
							
						} else {
							this.list = this.list.concat(res.data.log.data);
							
						}
						this.page ++;
						this.loading = false;
					} else {//没有数据
						this.finished = true;
						this.loading = false;
					}
				})
			}
		},
	}
</script>
<style scoped lang="less">
	.list {
		li {
			padding: 10px;
			background: #fff;
			border-bottom: 1px solid #f1f1f1;
			div:nth-of-type(2) {
				width: 80px;
				margin-left: 20px;
				text-align: right;
			}
		}
	}
</style>
