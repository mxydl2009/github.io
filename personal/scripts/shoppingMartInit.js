function shoppingMartInit() {
	skininit();
	var skins = document.getElementById('skin').getElementsByTagName('li');
	for(let i = 0; i < skins.length; i ++) {
		addEventHandler(skins[i], 'click', function() {
			skinChange(i);
		});
	}
}
addEventLoad(shoppingMartInit);