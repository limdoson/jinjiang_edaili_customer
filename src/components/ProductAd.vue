<template>
	<div>
		<div class="product-ad" v-if="type == 'single-pic'">
			<h1 class="title" v-if='title'>{{title}}-单图</h1>
			<ul class="single-pic">
				<li >
					<img :src="list[0]" alt="">
				</li>
			</ul>
		</div>
		<div class="product-ad" v-if="type == 'single-row-pics'">
			<h1 class="title" v-if='title'>{{title}}-多图单列</h1>
			<ul class="single-row-pics s-b">
				<li v-for='(item,index ) in list' :key='index'>
					<img :src="item" alt="">
				</li>
			</ul>
		</div>
		<div class="product-ad" v-if="type == 'rows-pics'">
			<h1 class="title" v-if='title'>{{title}}-多图多列</h1>
			<ul class="rows-pics f-s" :class='class_flag'>
				<li v-for='(item,index ) in list' :key='index' :style="{width : li_width}">
					<img :src="item" alt="">
				</li>
			</ul>
		</div>
		<div class="product-ad" v-if="type == 'three-pics'">
			<h1 class="title" v-if='title'>{{title}}-三图</h1>
			<dl class="s-b three-pics" >
				<dt style="width: 60%;">
					<img :src="list[0]" alt="">
				</dt>
				<dd style='flex: 1;'>
					<img :src="list[1]" alt="">
					<img :src="list[2]" alt="">
				</dd>
			</dl>
		</div>
		<div class="product-ad" v-if="type == 'scroll-swiper'">
			<h1 class="title" v-if='title'>{{title}}</h1>
			<scroll-x-swiper :data='list'></scroll-x-swiper>
		</div>
	</div>
</template>

<script>
	import ScrollXSwiper from '@c/ScrollXSwiper'
	export default {
		props:{
			title : {
				type : String,
				default : null
			},
			list : {
				type : Array
			},
			/*
			* 类型
			* single-pic : 单图广告, single-row-pics :多图单列,
			* rows-pics : 多图多列，可额外接受一个row-num props，用来表示一列显示多少张图片
			* three-pics : 三图广告
			* scroll-swiper : 多图可横向滚动
			* */ 
			type : {
				type : String,
				default : 'single-pic'
			},
			num_of_pic : {
				type : Number,
				default : 2
			}
		},
		components: {
			ScrollXSwiper
		},
		data () {
			return {
				li_width : '46%',//用来处理多行多图广告的li宽度
				class_flag : null
			}
		},
		created  () {
			if (this.type == 'rows-pics') {
				this.li_width = ( 100 - 4 * this.num_of_pic) / this.num_of_pic + '%';
			}
			
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>

<style>
</style>
