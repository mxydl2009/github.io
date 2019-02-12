function sizeChoose(ev) {
	var sizeNum = getActivedObject(ev);
	var size = document.getElementById('size');
	var text =  sizeNum.textContent;
	size.innerHTML = text;
}