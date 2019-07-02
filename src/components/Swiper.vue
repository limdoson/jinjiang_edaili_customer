<template>
	<van-swipe :autoplay="3000" indicator-color="white">
		<van-swipe-item v-for='item in list' :key='item'>
			<img src="../assets/img/1.jpg" alt="">
		</van-swipe-item>
		<van-swipe-item>
			<img src="../assets/img/1.jpg" alt="">
		</van-swipe-item>
		
	</van-swipe>
</template>

<script>
	export default {
		prop : ['list'],
		data () {
			return {
				active : 0
			}
		},
		created  () {
			console.log(this.list)
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>
<style lang="less">
	
</style>
