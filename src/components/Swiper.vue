<template>
	<van-swipe :autoplay="3000" indicator-color="white" >
		<van-swipe-item v-for='item in list' :key='item.id'>
			<router-link tag='a' :to='item.url'>
				<img :src="item.img" alt="">
			</router-link>
		</van-swipe-item>
	</van-swipe>
</template>

<script>
	export default {
		props : ['list'],
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
