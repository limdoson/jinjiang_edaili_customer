const config = {
	base_request_host : 'https://laravel.linxmwx.cn',
	img_upload_host : 'https://laravel.linxmwx.cn/v1/uploadImg',
	upload_img_size : 0.6,//图片上传大小限制，单位M
	pay_type : [
		{
			name : '微信支付',
			pay_type :1
		},
		// {
		// 	name :'支付宝支付',
		// 	pay_type :2
		// },
		{
			name : '货款支付',
			pay_type :3
		}
	],
}

export default config;