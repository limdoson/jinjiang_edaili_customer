<template>
	<div class="recharge page">
		<page-nav-header rightText='充值记录' @clickRight='toRechargeRecord'></page-nav-header>
		<van-field label='充值金额' type='number' v-model="money" placeholder="输入充值金额" />
		<div class="btn">确认充值</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				money : null
			}
		},
		created () {
			
		},
		
		methods : {
			toRechargeRecord () {
				this.$router.push('/recharge-record')
			}
		},
	}
</script>
