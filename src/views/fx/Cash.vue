<template>
	<div class="cash page">
		<page-nav-header></page-nav-header>
		<van-field label='提现金额' type='number' v-model="money" placeholder="输入提现金额" />
		<div class="btn">确认提现</div>
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
			
		},
	}
</script>
