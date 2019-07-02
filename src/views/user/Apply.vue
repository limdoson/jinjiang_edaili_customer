<template>
	<div class="apply page">
		<page-nav-header></page-nav-header>
		<van-cell-group>
			<van-field
				v-model="realname"
				label="姓名"
				type='text'
				placeholder="请填写您的真实姓名"/>
			<van-field
				v-model="tel"
				label="手机"
				type='text'
				placeholder="请填写收货人手机"/>
			<van-field
				v-model="password"
				label="密码"
				type='text'
				placeholder="请填写登录密码"/>
			<van-field
				v-model="once_password"
				label="确认密码"
				type='text'
				placeholder="请确认登录密码"/>
		</van-cell-group>
		<div class="btn-item">
			<div class="btn" >提交申请</div>
		</div>
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
