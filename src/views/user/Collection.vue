<template>
	<div class="colletion page">
		<page-nav-header></page-nav-header>
		<van-list
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load="onLoad">
			<ul class="collect-list f-s">
				<router-link tag='li' :to="'/product-detail/'+item.id" v-for='item in list' :key='item.id'>
					<img :src="item.goods_img" alt="">
					<h1>{{item.goods_name}}</h1>
					
				</router-link>
			</ul>
			<ul class="list f-s" v-if='list'>
				
			</ul>
			<none v-else></none>
		</van-list>
		
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				loading :false,
				finished :false,
				list : null,
				page :1,
				limit :20
			}
		},
		created () {
			
		},
		
		methods : {
			onLoad () {
				this.http.post('/v1/c_goods/getCollect',{
					page :this.page,
					limit :this.limit
				}).then(res => {
					if (res.data.data.length) {//有数据
						if (this.page == 1) {
							this.list = res.data.data;

						} else {
							this.list = this.list.concat(res.data.data);
							
						}
						this.page ++;
						this.loading = false;
					} else {//没有数据
						this.finished = true;
						this.loading = false;
					}
				})
			}
		},
	}
</script>
