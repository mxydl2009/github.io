function zoomIn(ev) {
	var imgZoom = document.getElementById('goods_img').getElementsByTagName('img');
	var img = getActivedObject(ev);//得到发生mouseover的元素；
	// img.
	var path = img.src.split('.');//元素的src属性值分割成字符串数组；
	var imgPath = path[0] + '_small.jpg';
	imgZoom[0].src = imgPath;
}