<template>
	<swiper :options="options" v-if='data'>
		<swiper-slide v-for='(item,index) in data' :key='index'>
			<img :src="item" alt="">
		</swiper-slide>
	</swiper>
</template>
<script>
	import { swiper, swiperSlide } from "vue-awesome-swiper";
	require("swiper/dist/css/swiper.css");
	export default {
		props:{
			data : {
				type : Array,
				default : null
			},
			options : {
				type : Object
			}
		},
		components: {
		  swiper,
		  swiperSlide
		},
		data () {
			return {
				
			}
		},
		created  () {
			console.log(this.options)
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>