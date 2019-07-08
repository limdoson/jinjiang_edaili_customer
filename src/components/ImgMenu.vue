<template>
	<ul class="img-menu f-s">
		<router-link  tag='li' to=''>
			<img src="https://laravel.linxmwx.cn/uploads/img/20190705133031-5d1ee077b97b3.jpg" alt="">
			<p>导航名称</p>
		</router-link>
		<router-link  tag='li' to=''>
			<img src="https://laravel.linxmwx.cn/uploads/img/20190705133031-5d1ee077b97b3.jpg" alt="">
			<p>导航名称</p>
		</router-link>
		<router-link  tag='li' to=''>
			<img src="https://laravel.linxmwx.cn/uploads/img/20190705133031-5d1ee077b97b3.jpg" alt="">
			<p>导航名称</p>
		</router-link>
		<router-link  tag='li' to=''>
			<img src="https://laravel.linxmwx.cn/uploads/img/20190705133031-5d1ee077b97b3.jpg" alt="">
			<p>导航名称</p>
		</router-link>
		<router-link  tag='li' to=''>
			<img src="https://laravel.linxmwx.cn/uploads/img/20190705133031-5d1ee077b97b3.jpg" alt="">
			<p>导航名称</p>
		</router-link>
		<router-link  tag='li' to=''>
			<img src="https://laravel.linxmwx.cn/uploads/img/20190705133031-5d1ee077b97b3.jpg" alt="">
			<p>导航名称</p>
		</router-link>
		<router-link  tag='li' to=''>
			<img src="https://laravel.linxmwx.cn/uploads/img/20190705133031-5d1ee077b97b3.jpg" alt="">
			<p>导航名称</p>
		</router-link>
	</ul>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		}
	}
</script>

<style scoped lang="less">
	.img-menu {
		padding: 10px 10px 0 10px;
		background: #fff;
		margin-bottom: 8px;
		-webkit-flex-wrap : wrap;
		li {
			width: 20%;
			text-align: center;
			margin-bottom: 10px;
			img {
				width: 40px;
				border-radius: 50%;
			}
			p {
				margin-top: 8px;
				font-size: 13px;
				color: #555;
			}
		}
	}
</style>
