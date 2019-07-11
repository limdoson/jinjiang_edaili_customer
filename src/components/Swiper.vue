<template>
	<van-swipe :autoplay=' play ? play : 0 '  indicator-color="white" >
		<van-swipe-item v-for='item in list' :key='item.id'>
			<router-link tag='a' :to='item.url' v-if='item.url'>
				<img :src="item.img" alt="">
			</router-link>
			<img :src="item.img" alt="" v-else>
		</van-swipe-item>
	</van-swipe>
</template>

<script>
	export default {
		props : ['list','autoplay'],
		data () {
			return {
				active : 0,
				play : null
			}
		},
		created  () {
			if (this.autoplay) {
				this.play = 3000
			} 
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>
<style lang="less">
	
</style>
