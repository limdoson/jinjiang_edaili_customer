<template>
	<van-nav-bar
		:title="$route.meta.title"
		left-text="返回"
		left-arrow
		@click-left="onClickLeft"
		@click-right="onClickRight"
	/>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		computed: {
			title () {
				return this.$route.meta.title
			}
		},
		methods: {
			onClickLeft () {
				this.$router.back();
			},
			onClickRight () {
				
			}
		}
	}
</script>

<style scoped lang="less">
	.van-nav-bar__text,
	.van-nav-bar .van-icon{
		color: #666;
	}
</style>
