<template>
	<div class="adr-add">
		<page-nav-header rightText='保存' @clickRight='save'></page-nav-header>
		<van-cell-group>
			<van-field
				v-model="name"
				label="姓名"
				type='text'
				placeholder="请填写收货人姓名"/>
			<van-field
				v-model="tel"
				label="手机"
				type='text'
				placeholder="请填写收货人手机"/>
			<van-field
				v-model="area"
				label="所在地区"
				type='text'
				readonly
				@click='show = true'
				placeholder="点击选择所在地区"/>
			<van-field
				v-model="adress"
				label="详细地址"
				type='text'
				placeholder="详细地址"/>
			<van-switch-cell v-model="is_default" title="是否设为默认地址" active-color='orangered'/>
		</van-cell-group>
		<div class="btn-item">
			<div class="btn delete">删除地址</div>
		</div>
		<van-popup
			v-model="show"
			position="bottom"
			:style="{ height: '40%' }">
			<van-area :area-list="areaList" @cancel='show = false' @confirm='consirmChose'/>
		</van-popup>
	</div>
</template>

<script>
	import areaList from '@u/area'
	export default {
		data () {
			return {
				areaList,
				show : false,
				name : null,
				tel : null,
				area : null,
				adress : null,
				is_default :false
			}
		},
		methods : {
			
			save () {
				
			},
			consirmChose (result) {
				this.area = result[0].name + '/' + result[1].name + '/' + result[2].name;
				this.show = false;
				console.log(result)
			}
		}
	}
</script>
