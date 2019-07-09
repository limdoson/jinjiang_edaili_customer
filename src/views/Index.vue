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
		<template v-if='flash && flash[0]'>
			<Swiper :list='flash[0].children'></Swiper>
		</template>
		<!-- nav -->
		<template v-if='nav && nav[0]'>
			<img-menu :list='nav[0].children'></img-menu>
		</template>
		
		<template v-if='flash && flash[1]'>
			<Swiper :list='flash[1].children' :autoplay='3000' ></Swiper>
		</template>
		<template v-if='nav && nav[1]'>
			<img-menu :list='nav[1].children'></img-menu>
		</template>
		
		<template v-if='goods'>
			<index-product-list ></index-product-list>
		</template>
		
		<!-- 商品推荐 -->
		<!-- <template >
			<product-ad
				v-for='item in window' :key='item.id'
				:title='item.name'
				:list='item.goods'
				:type='item.type'
				:num_of_pic='3'></product-ad>
		</template> -->
		
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
		<div class="mask c-c" v-if='showLoginMask'>
			微信登录中，请稍后
		</div>
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
				nav : null,
				flash : null,
				goods : null,
				showLoginMask : true,
			}
		},
		created  () {
			if (this.$route.query && this.$route.query.code) {
				this.http.post('/v1/wechat/userAutoWx',{
					code : this.$route.query.code
				}).then(res => {
					setTimeout(() => {
						this.initData();
					},500)
				})
			} else {
				this.initData()
			}
			// let params = location.search;
			// if (params) {
			// 	let str = params.substring(1);
			// 	let code = str.split('&')[0].split('=')[1];
			// 	let state = str.split('&')[1].split('=')[1];
			// 	if (state == 'STATE') {
			// 		state = null
			// 	}
			// 	
			// } else {
			// 	
			// }
		},
		//mounted () {},
		methods : {
			initData () {
				this.http.post('/v1/c_index/getIndex',{
					
				}).then(res => {
					// console.log(res)
					this.flash = res.data.data.flash;
					this.nav = res.data.data.nav;
					this.goods = res.data.data.goods.data;
					this.showLoginMask = false;
				})
			},
			test () {
				console.log(1)
			}
		}
	}
</script>

<style scoped lang="less">
	.mask {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		color: orangered;
		font-size: 13px;
		text-align: center;
	}
</style>
