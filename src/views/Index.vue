<template>
	<div class="index">
		<!-- 搜索 -->
		<!-- <div @click='test' class='search-input'>
			<van-search 
				placeholder="请输入搜索关键词" 
				disabled 
				background='#e8e8e8' />
		</div> -->
		<!-- 轮播图 -->
		<Swiper></Swiper>
		
		<!-- 商品推荐 -->
		<product-ad
			title='栏目标题'
			:list='column_list'
			type='single-pic'
			:num_of_pic='3'></product-ad>
		<product-ad
			title='栏目标题'
			:list='column_list'
			type='rows-pics'
			:num_of_pic='3'></product-ad>
		<product-ad
			title='栏目标题'
			:list='column_list'
			type='scroll-swiper'
			:num_of_pic='3'></product-ad>
		<product-ad
			title='栏目标题'
			:list='column_list'
			type='three-pics'
			:num_of_pic='3'></product-ad>
	</div>
</template>

<script>
	
	import Swiper from '@c/Swiper'
	import ProductAd from '@c/ProductAd'
	export default {
		components: {
			Swiper,
			ProductAd
		},
		data () {
			return {
				column_list : [
					'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
					'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
					'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
					'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
					'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
					'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
				]
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			test () {
				console.log(1)
			}
		}
	}
</script>

<style>
</style>
