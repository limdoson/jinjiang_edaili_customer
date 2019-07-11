<template>
	<van-list
		v-model="loading"
		:finished="finished"
		finished-text="没有更多了"
		@load="onLoad">
		<ul class="index-product-list s-b" v-if='list'>
			<router-link tag='li' :to="'/product-detail/'+item.id" v-for='item in list' :key='item.id'>
				<img :src="item.cover" alt="">
				<p class="name">{{item.name}}</p>
				<p class="price s-b">
					<span>
						<span class="flag">￥</span><span class="red">{{item.price}}</span>
					</span>
					<span>
						已售{{item.fake_sale}}件
					</span>
				</p>
			</router-link>
		</ul>
	</van-list>
	
</template>

<script>
	export default {
		// props : ['list'],
		data () {
			return {
				list : null,
				loading: false,
				finished: false,
				page : 1,
				limit : 10
			}
		},
		created () {
			
		},
		methods: {
			onLoad() {
				this.http.post('/v1/c_index/getIndex',{
					page : this.page,
					limit : this.limit
				}).then(res => {
					let data = res.data.data.goods.data;
					if (data.length) {
						if (this.page == 1) {
							this.list = data;
						} else {
							this.list = this.list.concat(data);
						}
						this.page ++
						this.loading = false;
						this.finished = false;
					} else {
						this.loading = false;
						this.finished = true;
					}
				})
			}
		},
	}
</script>

<style scoped lang="less">
	.index-product-list {
		margin-top: 8px;
		-webkit-flex-wrap :wrap;
		li {
			width: ~"calc(50% - 3px)";
			background: #fff;
			margin-bottom: 2px;
			padding-bottom: 8px;
			img {
				display: block;
			}
			p {
				padding: 0 8px;
			}
			.name {
				overflow: hidden;
				text-overflow: ellipsis;
				width: ~"calc(100% - 16px)";
				white-space: nowrap;
				font-size: .6rem;
				margin-bottom: 4px;
				margin-top: 4px;
			}
			.price {
				color: #666;
				font-size: .5rem;
				.flag {
					font-size: .3rem;
				}
				.red {
					margin-right: 4px;
					font-size: 15px;
				}
			}
		}
	}
</style>
