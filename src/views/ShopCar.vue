<template>
	<div class="shop-car">
		<ul class="list">
			<li v-for="item in list" :key='item.id' class="f-s">
				<van-checkbox v-model='item.check' checked-color='orangered' @change='sleectItem'></van-checkbox>
				<img src="../assets/img/2.jpg" alt="" width="60px">
				<div class="product-info">
					<h1>商品名称</h1>
					<p class="attr">已选：红色/170</p>
					<p><span class="red"></span></p>
					<div class="s-b">
						<p>
							￥<span class="price">{{item.price}}</span>
						</p>
						<van-stepper v-model="item.num" integer @change='changeNum'/>
					</div>
				</div>
			</li>
		</ul>
		<footer class="s-b">
			<div class="f-s">
				<van-checkbox v-model='selected_all' checked-color='orangered' @click='selectedAll'></van-checkbox>
				<span class="total-price">
					合计：<span class="red">{{total_price}}</span>
				</span>
			</div>
			<div class="f-s">
				<van-button type="warning" @click='deleteItem' :disabled='disabled'>删除</van-button>
				<van-button type="danger" :disabled='disabled'>提交订单</van-button>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
	
		data () {
			return {
				list : [
					{
						name : '商品1',
						num : 1,
						check : false,
						price : 10,
						attr : [
							{
								id :2,
								name : '规格1',
							},{
								id :3,
								name : '规格2',
							}
						]
					},{
						name : '商品1',
						num : 1,
						check : false,
						price : 20,
						attr : [
							{
								id :2,
								name : '规格1',
							},{
								id :3,
								name : '规格2',
							}
						]
					}
				],
				selected_all : false,//是否全选
				total_price : 0,//合计总价
				
			}
		},
		created  () {
			
		},
		//mounted () {},
		methods : {
			//单选某个商品
			sleectItem () {
				
				this.selected_all = this.list.every(item =>{
					return item.check;
				})
				this.getTotalPrice()
			},
			//全选商品
			selectedAll () {
				
				this.list.map(item => {
					item.check = !this.selected_all;
				})
			},
			//计步器变化
			changeNum () {
				this.getTotalPrice()
			},
			//获取勾选商品的合计价格
			getTotalPrice () {
				let total = 0;
				this.list.map(item => {
					if (item.check) {
						total += item.price * item.num;
					}
				})
				this.total_price = total;
			},
			//删除购物车项
			deleteItem () {
				
			}
		},
		computed: {
			disabled () {
				return !this.list.some(item => {
					return item.check;
				})
			}
		}
	}
</script>

<style>
</style>
