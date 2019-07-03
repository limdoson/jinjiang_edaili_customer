<template>
	<div class="team page">
		<page-nav-header></page-nav-header>
		<header class="s-b">
			<span>当前团队人数：{{$store.state.user.team_num}}</span>
			<span>累计获得收益：{{$store.state.user.commission}}</span>
		</header>
		<ul class="list" v-if='list'>
			<li class="s-b" v-for='item in list' :key='item.id'>
				<div class="">
					<p>会员编号：<span class="red">{{item.id}}</span>，</p>
					<p>
						姓名：<span class="red">{{item.realname}}</span>，
						会员类型：<span class="red" v-if='item.type == 1'>普通用户</span>
						<span class="red" v-if='item.type == 2'>分销商</span>
					</p>
					<p>电话：<span class="re">{{item.tel}}</span>，</p>
				</div>
				<router-link tag='h1' :to="'/sub-team/'+item.id">他的团队</router-link>
			</li>
		</ul>
		<none v-else></none>
		
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				loading : false,
				finished : false,
				page :1,
				limit :50,
				list : null
			}
		},
		created () {
			this.initData();
		},
		
		methods : {
			initData () {
				this.http.post('/v1/c_dis/getTeam',{
					
				}).then(res =>{
					this.list = res.data.list
				})
			}
			
		},
	}
</script>
