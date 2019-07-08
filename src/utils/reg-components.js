import PageNavHeader from '@c/PageNavHeader'
import None from '@c/None'
import Swiper from '@c/Swiper'
import ImgMenu from '@c/ImgMenu'
import IndexProductList from '@c/IndexProductList'
function vComponent(Vue) {
	// 判断组件组件是否已安装
	if(vComponent.installed){
		return;
	}
	Vue.component('PageNavHeader',PageNavHeader);
	Vue.component('none',None);
	Vue.component('swiper',Swiper);
	Vue.component('imgMenu',ImgMenu);
	Vue.component('IndexProductList',IndexProductList)
}
// 导出组件
export default vComponent