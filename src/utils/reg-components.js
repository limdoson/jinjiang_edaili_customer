import PageNavHeader from '@c/PageNavHeader'
function vComponent(Vue) {
	// 判断组件组件是否已安装
	if(vComponent.installed){
		return;
	}
	Vue.component('PageNavHeader',PageNavHeader);
}
// 导出组件
export default vComponent