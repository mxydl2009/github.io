//选项卡
//图片的路径选择要用对象的key-value来做；
function cardShow(num) {
	var shoespic = document.getElementById('shoespic');
	var shoesimg = shoespic.getElementsByTagName('img');
	var shoeslabel = shoespic.getElementsByTagName('p');
	var xhr = createRequest();
	if(xhr) {
		xhr.open('GET', 'shoes.json', true);//异步方式请求JSON数据；
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {//数据已经请求完毕；
				var shoes = JSON.parse(xhr.responseText);//JSON数据转化为JS对象；
				switch (num) {
					case 0://运动，路径images/shoesforsports/
					for(let i = 0; i < shoesimg.length; i ++) {
						shoesimg[i].src = 'images/' + shoes.sports[i].path;
						shoeslabel[i].innerHTML = shoes.sports[i].name;
					}
					break;
					case 1:
					for(let i = 0; i < shoesimg.length; i ++) {
						shoesimg[i].src = 'images/' + shoes.woman[i].path;
						shoeslabel[i].innerHTML = shoes.woman[i].name;
					}
					break;
					case 2:
					for(let i = 0; i < shoesimg.length; i ++) {
						shoesimg[i].src = 'images/' + shoes.man[i].path;
						shoeslabel[i].innerHTML = shoes.man[i].name;
					}
					break;
					case 3:
					for(let i = 0; i < shoesimg.length; i ++) {
						shoesimg[i].src = 'images/' + shoes.child[i].path;
						shoeslabel[i].innerHTML = shoes.child[i].name;
					}
					break;
				}
			}
		};
		xhr.send(null);
	}
}