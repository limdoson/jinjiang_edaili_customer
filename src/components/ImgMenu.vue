<template>
	<ul class="img-menu f-s" v-if='list'>
		<router-link  tag='li' :to='item.url' v-for='item in list' :key='item.id' v-if='item.url'>
			<img :src="item.img" alt="" v-if='item.img'>
			<p>{{item.title}}</p>
		</router-link>
		<li v-else>
			<img :src="item.img" alt="" v-if='item.img'>
			<p>{{item.title}}</p>
		</li>
	</ul>
</template>

<script>
	export default {
		props : ['list'],
		data () {
			return {
				
			}
		},
		created () {
			
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
				width: 50px;
				height: 50px;
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
