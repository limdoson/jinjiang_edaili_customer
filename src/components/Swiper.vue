<template>
	<van-swipe :autoplay="3000" indicator-color="white">
		<van-swipe-item>
			<img src="../assets/img/1.jpg" alt="">
		</van-swipe-item>
		<van-swipe-item>
			<img src="../assets/img/1.jpg" alt="">
		</van-swipe-item>
		
	</van-swipe>
</template>

<script>
	export default {
		data () {
			return {
				active : 0
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>
<style lang="less">
	
</style>
