<template>
	<ul class="index-product-list s-b">
		<router-link tag='li' to=''>
			<img src="https://laravel.linxmwx.cn/uploads/img/20190705133031-5d1ee077b97b3.jpg" alt="">
			<p class="name">商品名称商品名称商品名称商品名称商品名称</p>
			<p class="price s-b">
				<span>
					<span class="flag">￥</span><span class="red">10.2</span>
				</span>
				<span>
					已售100件
				</span>
			</p>
		</router-link>
		<router-link tag='li' to=''>
			<img src="https://laravel.linxmwx.cn/uploads/img/20190705133031-5d1ee077b97b3.jpg" alt="">
			<p class="name">商品名称商品名称商品名称商品名称商品名称</p>
			<p class="price s-b">
				<span>
					<span class="flag">￥</span><span class="red">10.2</span>
				</span>
				<span>
					已售100件
				</span>
			</p>
		</router-link>
		<router-link tag='li' to=''>
			<img src="https://laravel.linxmwx.cn/uploads/img/20190705133031-5d1ee077b97b3.jpg" alt="">
			<p class="name">商品名称商品名称商品名称商品名称商品名称</p>
			<p class="price s-b">
				<span>
					<span class="flag">￥</span><span class="red">10.2</span>
				</span>
				<span>
					已售100件
				</span>
			</p>
		</router-link>
		<router-link tag='li' to=''>
			<img src="https://laravel.linxmwx.cn/uploads/img/20190705133031-5d1ee077b97b3.jpg" alt="">
			<p class="name">商品名称商品名称商品名称商品名称商品名称</p>
			<p class="price s-b">
				<span>
					<span class="flag">￥</span><span class="red">10.2</span>
				</span>
				<span>
					已售100件
				</span>
			</p>
		</router-link>
	</ul>
</template>

<script>
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
