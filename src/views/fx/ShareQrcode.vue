<template>
	<div class="share-qrcode page">
		<page-nav-header></page-nav-header>
		<div class="container">
			<img :src="img" alt="">
			<p>让用户扫描该二维码，即可成为您的团队成员。</p>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				img : null
			}
		},
		created () {
			this.http.post('/v1/c_dis/createQrCode',{
				
			}).then(res => {
				this.img = res.data.qrUrl;
			})
		},
		
		methods : {
			
		},
	}
</script>
