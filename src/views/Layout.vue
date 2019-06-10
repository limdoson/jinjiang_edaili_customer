<template>
	<div class="layout">
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from '@c/Footer'
	export default {
		components: {Footer},
		data () {
			return {
				
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			
		}
	}
</script>

<style>
</style>
