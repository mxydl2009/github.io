//皮肤组件初始化
function skininit() {
	skin = ['PapayaWhip', 'Lavender', 'PaleGreen', 'PaleTurquoise', 'LightBlue', 'Bisque'];
	var skins = document.getElementById('skin').getElementsByTagName('li');
	for(var i = 0; i < skins.length; i ++) {
		skins[i].style.backgroundColor = skin[i];
	}
}
//换皮肤,同时加一个透明度；
function skinChange(num) {
	var body = document.getElementsByTagName('body');
	var color = skin[num];
	body[0].style.backgroundColor = color;
	body[0].style.opacity = 1;
}