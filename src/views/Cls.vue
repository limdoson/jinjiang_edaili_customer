<template>
	<div class="cls">
		<!-- 左侧分类 -->
		<aside>
			<swiper :options="options" ref="mySwiper">
				<swiper-slide 
					:class="index == flag ? 'cls_active' : ''" 
					v-for='(item,index) in list' 
					:key='index'
					>
					<div @click='tabFn(index)'>
						{{item}}
					</div>
				</swiper-slide>
			</swiper>
		</aside>
		<!-- 右侧内容区 -->
		<main>
			<div class="sub-cls">
				<h1>上衣</h1>
				<ul class="s-b">
					<li>
						<img src="../assets/img/3.png" alt="">
						<p>T恤</p>
					</li>
					<li>
						<img src="../assets/img/3.png" alt="">
						<p>T恤</p>
					</li>
					<li>
						<img src="../assets/img/3.png" alt="">
						<p>T恤</p>
					</li>
				</ul>
			</div>
			<div class="sub-cls">
				<h1>裤子</h1>
				<ul class="s-b">
					<li>
						<img src="../assets/img/3.png" alt="">
						<p>T恤</p>
					</li>
					<li>
						<img src="../assets/img/3.png" alt="">
						<p>T恤</p>
					</li>
					<li>
						<img src="../assets/img/3.png" alt="">
						<p>T恤</p>
					</li>
					<li>
						<img src="../assets/img/3.png" alt="">
						<p>T恤</p>
					</li>
					<li>
						<img src="../assets/img/3.png" alt="">
						<p>T恤</p>
					</li>
					<li>
						<img src="../assets/img/3.png" alt="">
						<p>T恤</p>
					</li>
				</ul>
			</div>
		</main>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from "vue-awesome-swiper";
	require("swiper/dist/css/swiper.css");
	export default {
		components: {swiper,swiperSlide},
		data () {
			return {
				list : ['男装',2,3,4,5,6,7,8,9,0,11,12,13,14],
				options : {
					direction : 'vertical',
					height : 50,
					observer:true,
					observeParents:true,
				},
				flag : 0,
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			//切换主分类
			tabFn (index) {
				this.flag = index;
			}
		}
	}
</script>

<style>
</style>
