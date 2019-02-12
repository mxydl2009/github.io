function submitInfo() {
	//价格控件信息搜集；
	var salesPrice = document.getElementById('salesPrice');
	var promoPrice = parseInt(salesPrice.textContent);
	var lastPrice = document.getElementById('lastPrice');
	var price = document.getElementById('price');
	var normalPrice = parseInt(price.textContent);
	if(promoPrice) {//促销价存在，则按促销价，否则按正常价；
		lastPrice.value = promoPrice;//数值型数据；
	}else {
		lastPrice.value = normalPrice;
	}
	infoCollect('color', 'lastColor');//颜色控件信息搜集；
	infoCollect('size', 'lastSize');//尺码控件信息搜集；
	infoCollect('sumPrice', 'lastSumPrice');//总价控件信息搜集；
	infoCollect('goods_score', 'grade');
}
//把ele1ID元素的文本内容赋予ele2ID元素的value值；
function infoCollect(ele1ID, ele2ID) {
	var ele1 = document.getElementById(ele1ID);
	var ele2 = document.getElementById(ele2ID);
	var ele1Text = ele1.textContent;
	if(ele1Text) {
		ele2.value = ele1Text;
	}else {
		ele2.value = '';
	}
}