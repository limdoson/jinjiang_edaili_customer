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
		<Swiper :list='flash'></Swiper>
		
		<!-- 商品推荐 -->
		<template >
			<product-ad
				v-for='item in window' :key='item.id'
				:title='item.name'
				:list='item.goods'
				:type='item.type'
				:num_of_pic='3'></product-ad>
		</template>
		
		<!-- <product-ad
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
			:num_of_pic='3'></product-ad> -->
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
				// column_list : [
				// 	'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
				// 	'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
				// 	'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
				// 	'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
				// 	'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
				// 	'https://gma.alicdn.com/bao/uploaded/i3/97497546/O1CN01VQii9425c7E9pYs5Z_!!0-saturn_solar.jpg_400x400.jpg_.webp',
				// ],
				// 横向swiper配置
				options : {
					width : 80
				},
				window : null,
				flash : null
			}
		},
		created  () {
			let params = location.search;
			if (params) {
				let str = params.substring(1);
				let code = str.split('&')[0].split('=')[1];
				let state = str.split('&')[1].split('=')[1];
				if (state == 'STATE') {
					state = null
				}
				this.http.post('/v1/wechat/userAutoWx',{
					code : code,
					recommend_id : state
				}).then(res => {
					this.initData();
					console.log(res)
					// this.initData();
				})
			} else {
				this.initData()
			}
			
		},
		//mounted () {},
		methods : {
			initData () {
				this.http.post('/v1/c_index/getIndex',{
					
				}).then(res => {
						
					this.flash = res.data.flash;
					this.window = res.data.window;
				})
			},
			test () {
				console.log(1)
			}
		}
	}
</script>

<style>
</style>
