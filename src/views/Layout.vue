<template>
	<div class="layout">
		<router-view></router-view>
		
	</div>
</template>

<script>
	import Footer from '@c/Footer'
	export default {
		components: {Footer},
		data () {
			return {
				active : 0
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>
<style scoped lang="less">
	.page-footer {
		position: fixed;
		bottom: 0;
		z-index: 1987;
		width: 100%;
	}
</style>
