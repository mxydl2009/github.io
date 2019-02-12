//获取颜色选择的文本，并记录在相应的表单控件中；
function colorChoose(ev) {
	var colorNum = getActivedObject(ev);
	var color = document.getElementById('color');
	var text =  colorNum.textContent;
	color.innerHTML = text;
}