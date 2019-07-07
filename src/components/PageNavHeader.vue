<template>
	<van-nav-bar
		class='page-header'
		:title="$route.meta.title"
		left-text="返回"
		left-arrow
		:right-text="rightText"
		@click-left="onClickLeft"
		@click-right="onClickRight">
		<slot></slot>
	</van-nav-bar>
</template>

<script>
	export default {
		props : {
			rightText :{
				type : String,
				default : null
			}
		},
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
				this.$emit('clickRight')
			}
		}
	}
</script>

<style scoped lang="less">
	.van-nav-bar__text,
	.van-nav-bar .van-icon{
		color: #666;
	}
	.page-header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1989;
	}
</style>
