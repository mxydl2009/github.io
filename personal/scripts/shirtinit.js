function shirtInit() {
	skininit();
	var skins = document.getElementById('skin').getElementsByTagName('li');
	for(let i = 0; i < skins.length; i ++) {
		addEventHandler(skins[i], 'click', function() {
			skinChange(i);
		});
	}
	var scores = document.getElementById('goods_grade').getElementsByTagName('li');
	
	for(let i = 0; i < scores.length; i ++) {
		addEventHandler(scores[i], 'mouseover', function() {
			backgroundHighlight(i + 1);
		});
	}
	for(let i = 0; i < scores.length; i ++) {
		addEventHandler(scores[i], 'mouseout', function() {
			rating();
		});
	}
	for(let i = 0; i < scores.length; i ++) {
		addEventHandler(scores[i], 'click', rated);
	}
	var smallimgs = document.getElementById('goods_smallimg').getElementsByTagName('img');
	for(let i = 0; i < smallimgs.length; i ++) {
		addEventHandler(smallimgs[i], 'mouseover', function(ev) {
			zoomIn(ev);
		});
	}
	var colors = document.getElementsByClassName('color');
	for(let i = 0; i < colors.length; i ++) {
		addEventHandler(colors[i], 'click', function(ev) {
			colorChoose(ev);
		});
		addEventHandler(colors[i], 'mouseover', function() {
			highLight(colors, i, '#DEB887', '#E8E8E8');
		});
	}
	var sizes = document.getElementsByClassName('size');
	for(let i = 0; i < sizes.length; i ++) {
		addEventHandler(sizes[i], 'click', function(ev) {
			sizeChoose(ev);
		});
		addEventHandler(sizes[i], 'mouseover', function() {
			highLight(sizes, i, '#DEB887', '#E8E8E8');
		});
	}
	totalPrice();
	var selectNum = document.getElementById('number');
	addEventHandler(selectNum, 'change', totalPrice);
	var submitbtn = document.getElementById('shoppingsubmit');
	addEventHandler(submitbtn, 'click', submitHandler);
	// console.log(scores[2].style.backgroundColor);
}