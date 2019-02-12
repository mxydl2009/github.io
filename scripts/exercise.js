addLoadEvent(exercise);
function exercise() {
	var btn1 = document.getElementById('btn1');
	var bt2 = document.getElementById('btn2');
	var label = document.getElementById('label').getElementsByTagName('h1')[0];
	if(btn1) {
		btn1.addEventListener('click', function() {
			moveEle('picwall', {'desX': -773, 'desY': 0});
			moveEle('shoppingMall', {'desX': 0, 'desY': 0});
			label.textContent = '购物网';
			btn1.style.display = 'none';
			btn2.style.display = 'inline-block';
		})
	}
	if(btn2 && btn2.style.display != 'none') {
		btn2.addEventListener('click', function() {
			moveEle('picwall', {'desX': 0, 'desY': 0});
			moveEle('shoppingMall', {'desX': 773, 'desY': 0});
			label.textContent = '照片墙';
			btn2.style.display = 'none';
			btn1.style.display = 'inline-block';
		});
	}
}
function addLoadEvent(func) {
	var old_load = window.onload;//window.onload属性用一个old_onload指向；
	if(typeof old_load !== "function") {//判断old_load是否指向一个函数；
		window.onload = func;//不指向任何函数，则将新函数（即参数）绑定到加载事件上；
	}
	else {                                  //指向某函数，则添加新函数到加载事件中；
		window.onload = function() {
			old_load();
			func();
		}
	}
}