<template>
	<div>
		<div class="product-ad" v-if="type == 1 && list">
			<h1 class="title" v-if='title'>{{title}}-单图</h1>
			<ul class="single-pic">
				<router-link tag='li' :to='`/product-detail/${item.id}`' v-for='(item,index ) in list' :key='item.id' >
					<img :src="item.cover" alt="">
				</router-link>
			</ul>
		</div>
		<div class="product-ad" v-if="type == 2 && list">
			<h1 class="title" v-if='title'>{{title}}</h1>
			<ul class="rows-pics f-s" :class='class_flag'>
				<router-link 
					tag='li' 
					:to='`/product-detail/${item.id}`' 
					v-for='(item,index ) in list' 
					:key='item.id' :style="{width : li_width}">
					<p class="s-b">
						<span class="red">￥{{item.price}}</span>
						<span>销量：{{item.fake_sale}}</span>
					</p>
				</router-link>
			</ul>
		</div>
		<div class="product-ad" v-if="type == 3 && list">
			<h1 class="title" v-if='title'>{{title}}</h1>
			<dl class="s-b three-pics" >
				<dt style="width: 60%;">
					<router-link tag='span' :to='`/product-detail/${list[0].id}`'>
						<img :src="list[0].cover" alt="">
					</router-link>
					
				</dt>
				<dd style='flex: 1;'>
					<router-link tag='span' :to='`/product-detail/${list[1].id}`'>
						<img :src="list[1].cover" alt="">
					</router-link>
					<router-link tag='span' :to='`/product-detail/${list[2].id}`'>
						<img :src="list[2].cover" alt="">
					</router-link>
				</dd>
			</dl>
		</div>
		<div class="product-ad" v-if="type == 4 && list">
			<h1 class="title" v-if='title'>{{title}}</h1>
			<scroll-x-swiper :data='list' :options='options'></scroll-x-swiper>
		</div> 
	</div>
</template>

<script>
	import ScrollXSwiper from '@c/ScrollXSwiper'
	export default {
		props: ['title','list','type'],
		components: {
			ScrollXSwiper
		},
		data () {
			return {
				li_width : '46%',//用来处理多行多图广告的li宽度
				class_flag : null,
				options : {
					width : 80
				}
			}
		},
		created  () {
			if (this.type == 3) {
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
