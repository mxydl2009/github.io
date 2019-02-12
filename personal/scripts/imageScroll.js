//轮播图函数；
// 每张图为550 * 321 分辨率;获取每个li元素，当鼠标悬停在li元素上时，拼接后的大图的位置移动；
//如果在imageScroll调用期间，再次引起调用，pos会重新赋值，会发生混乱；
function imageScroll(num, element) {
	// var element = document.getElementById(elementID);
	if(element.timer) {
		clearTimeout(element.timer);
	}
	var pos = element.offsetLeft;//获取图像元素当前位置；数值类型；
	var posNew = -550 * num;

	var dis = posNew - pos;
	var time = 10;
	var step = Math.ceil(Math.abs(dis / time));
	if(pos < posNew) {
		pos = pos + step;
	}
	if(pos > posNew) {
		pos = pos - step;
	}
		
	element.style.left = pos + 'px';
	if(pos == posNew) {
		return true;
	}
	element.timer = setTimeout(function() {
		imageScroll(num, element);
	}, 5);
}