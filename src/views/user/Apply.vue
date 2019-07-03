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
			<div class="btn" @click='confirm'>提交申请</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				realname : null,
				tel :null,
				password :null,
				once_password :null
			}
		},
		created () {
			if (this.$store.state.user.type == 2) {
				this.utils.toast('您已是分销会员，无需再次申请');
				this.$router.back();
			}
		},
		
		methods : {
			confirm () {
				if (!this.realname || !this.tel || !this.password || !this.once_password) {
					this.utils.msg('请填写所有可填写项后提交申请');
					return;
				}
				this.http.post('/v1/c_user/applyDistributor',{
					realname :this.realname,
					tel :this.tel,
					password : this.password,
					once_password : this.once_password
				}).then(res => {
					this.utils.msg(res.msg,()=>{
						this.$router.back();
					})
				})
			}
		},
	}
</script>
