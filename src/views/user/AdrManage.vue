<template>
	<div class="adr-manage page">
		<page-nav-header rightText='删除' @clickRight='add'></page-nav-header>
		<!-- 地址列表 -->
		<ul class="adr-list">
			<van-checkbox-group v-model="result">
				<li class="s-b" v-for="item in list" :key='item.id'>
					<div class="f-s">
						<van-checkbox :name='item.id' checked-color='orangered'></van-checkbox>
						<div class="user-info">
							<h1>{{item.name}}-{{item.tel}}</h1>
							<p>{{item.adr}}</p>
						</div>
					</div>
					<router-link tag='i' class='iconfont' :to="'/adr-add/'+item.id">
						&#xe66c;
					</router-link>
					
				</li>
			</van-checkbox-group>
		</ul>
		<router-link tag='footer' to='/adr-add'>
			新增地址
		</router-link>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				result : [],
				list :[
					{
						id :1,
						name : '林顿',
						tel : 15960209969,
						adr : '福建省厦门市思明区前埔东路'
					},{
						id :2,
						name : '林顿2',
						tel : 15960209962,
						adr : '福建省厦门市思明区前埔东路2'
					},{
						id :3,
						name : '林顿32',
						tel : 15960209962,
						adr : '福建省厦门市思明区前埔东路32'
					}
				]
			}
		},
		methods : {
			add () {
				if (!this.result.length) {
					this.utils.toast('您未选择任何地址');
					return;
				}
				
			}
		}
	}
</script>

<style>
</style>
