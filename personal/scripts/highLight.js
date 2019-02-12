//高亮某个元素数组的某元素，用指定的颜色color1，其他元素背景颜色不变color2，为了突出被高亮的元素；
function highLight(elements, num, color1, color2) {
	for(var i = 0; i < elements.length; i ++) {
		if(i == num) {
			elements[i].style.backgroundColor = color1;
		}else {
			elements[i].style.backgroundColor = color2;
		}
	}
}