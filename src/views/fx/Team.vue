<template>
	<div class="team page">
		<page-nav-header></page-nav-header>
		<header class="s-b">
			<span>当前团队人数：100</span>
			<span>累计获得收益：1000.00</span>
		</header>
		<ul class="list">
			<li class="s-b">
				<div class="">
					<p>会员编号：<span class="red">1</span>，</p>
					<p>姓名：<span class="red">林</span>，</p>
					<p>电话：<span class="re">15960209969</span>，</p>
				</div>
				<router-link tag='h1' to='/sub-team'>他的团队</router-link>
			</li>
		</ul>
		<none></none>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				
			}
		},
		created () {
			
		},
		
		methods : {
			
		},
	}
</script>
