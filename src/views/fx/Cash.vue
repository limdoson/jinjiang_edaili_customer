<template>
	<div class="cash page">
		<page-nav-header></page-nav-header>
		<p class="tips">
			提现说明：最小提现金额<span class="red">{{min_cash}}</span>元，最大提现金额<span class="red">{{max_cash}}</span>元，手续费<span class="red">{{cash_fee}}</span>元，账期<span class="red">{{cash_day}}</span>天。
		</p>
		<van-field label='提现金额' type='number' v-model="money" placeholder="输入提现金额" />
		<van-field label='银行卡号' type='number' v-model="account" placeholder="银行卡号" />
		<van-field label='开户行银行' type='text' v-model="bank" placeholder="开户行银行" />
		<van-field label='开户行支行' type='text' v-model="bank_branch" placeholder="开户行支行" />
		<van-field label='账号姓名' type='text' v-model="realname" placeholder="账号姓名" />
		<div class="btn" @click='confirm'>确认提现</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				money : null,
				account :null,
				bank :null,
				bank_branch :null,
				realname : null,
				min_cash : null,
				max_cash : null,
				cash_fee : null,
				cash_day : null,
			}
		},
		created () {
			this.http.post('/v1/getConfig',{
				
			}).then(res => {
				this.min_cash = res.data.min_cash;
				this.max_cash = res.data.max_cash;
				this.cash_day = res.data.cash_day;
				this.cash_fee = res.data.cash_fee;
			})
		},
		
		methods : {
			confirm () {
				if (!this.money || !this.account || !this.bank || !this.bank_branch || !this.realname) {
					this.utils.toast('请填写完整的提现申请信息')
					return;
				}
				if (Number(this.money) < Number(this.min_cash)) {
					this.utils.toast('提现金额小于最小提现金额')
					return;
				}
				if (Number(this.money) > Number(this.max_cash)) {
					this.utils.toast('提现金额大于最大提现金额')
					return;
				}
				this.http.post('/v1/c_dis/applyCash',{
					money : this.money,
					account : this.account,
					bank : this.bank,
					bank_branch : this.bank_branch,
					realname : this.realname
				}).then(res => {
					this.utils.msg(res.msg,()=>{
						this.money = null;
					})
				})
			}
		},
	}
</script>
