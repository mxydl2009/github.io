//首页初始化函数；
function indexInit() {
	// alert(typeof document.getElementById('imageads'));
	// var imgads = document.getElementById('imageads');
	var imgList = document.getElementById('imageads').getElementsByTagName('li');
	var ads = document.getElementById('ads');
	imgList[0].style.backgroundColor = '#8B4726';
	for( let i = 0 ; i < imgList.length; i ++ ) {
		addEventHandler(imgList[i], 'mouseover', function() {
			// var j = i;
			highLight(imgList, i, '#8B4726', '#3b3b3b');
			// imgList[i].style.backgroundColor = '#8B4726';
			imageScroll(i, ads);
		});
	}
	var cards = document.getElementById('shoecard').getElementsByTagName('li');
	cards[0].style.backgroundColor = '#DEB887';
	for(let i = 0; i < cards.length; i ++) {
		addEventHandler(cards[i], 'mouseover', function() {
			cardShow(i);
			highLight(cards, i, '#DEB887', '#E8E8E8');
		});
	}
	skininit();
	var skins = document.getElementById('skin').getElementsByTagName('li');
	for(let i = 0; i < skins.length; i ++) {
		addEventHandler(skins[i], 'click', function() {
			skinChange(i);
		});
	}	
}