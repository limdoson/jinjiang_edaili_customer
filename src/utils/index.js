import Vue from 'vue';

class Utils extends Vue {
    constructor () {
        super();
		
    }
    
	confirmAlert (message, confirmHandle, cancleHandle) {
		this.$dialog.confirm({
			title : '提示',
			message : message,
			confirmButtonColor : 'orangered',
		}).then(()=>{
			confirmHandle && confirmHandle()
		}).catch(()=>{
			cancleHandle && cancleHandle()
		})
	}
	
	
}

export default new Utils;