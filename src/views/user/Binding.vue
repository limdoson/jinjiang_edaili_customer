<template>
	<div class="bingding page">
		<page-nav-header ></page-nav-header>
		<van-cell-group>
			<van-field
				v-model="realname"
				label="姓名"
				type='text'
				placeholder="请填写您的真实姓名"/>
			<van-field
				v-model="tel"
				label="手机"
				type='number'
				placeholder="请填写您的手机号码"/>
		</van-cell-group>
		<div class="btn-item">
			<div class="btn" @click='confirm'>立即绑定</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				realname :null,
				tel : null,
			}
		},
		methods: {
			confirm() {
				
				if (!this.realname) {
					this.utils.toast('请填写真实姓名');
					return;
				}
				if (!this.tel) {
					this.utils.toast('请填写手机号码');
					return;
				}
				if ( !/^1[23456789]\d{9}$/.test(this.tel) ) {
					this.utils.toast('手机号码格式错误');
					return;
				}
				this.http.post('/v1/c_user/band',{
					realname :this.realname,
					tel : this.tel
				}).then(res => {
					this.utils.msg(res.data.msg,()=>{
						this.$store.commit('initUser',res.data.user)
						this.$router.back();
					})
				})
			}
		},
	}
</script>

<style>
</style>
