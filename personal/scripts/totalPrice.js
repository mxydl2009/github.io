function totalPrice() {
	var price = document.getElementById('price');
	var salesPrice = document.getElementById('salesPrice');
	var sumPrice = document.getElementById('sumPrice');
	var number = document.getElementById('number');
	var num = number.value;
	var promoPrice = parseInt(salesPrice.textContent);
	if(promoPrice) {
		// var priceBase = parseInt(promoPrice);
		var sum = promoPrice * num;
		sumPrice.textContent = sum + '元';
		price.className = 'delete';
	}
}