//由于拖拽功能要求元素定位是绝对定位，所有要将目前的浮动定位改为绝对定位；
// 拖动元素时要保证元素的层次是最高的；
//找到被拖动的元素在拖动过程中与其碰撞上的元素中离得最近的元素并为之添加边框，而且两者互换位置（位置是指最初的九宫格位置）；
//添加9张图片随机切换位置的按钮；
	
window.onload = function() {
	var aLi = document.getElementsByTagName('li');
	var aInput = document.getElementById('random');
	var apo = [];
	for(var i = 0; i < aLi.length; i ++) {
		apo.push([aLi[i].offsetLeft, aLi[i].offsetTop]);
	}
	for(var i = 0; i < aLi.length; i ++) {
		aLi[i].style.position = 'absolute';
		aLi[i].style.left = apo[i][0] + 'px';
		aLi[i].style.top = apo[i][1] + 'px';
		aLi[i].style.margin = 0;
	}
	var list = [];
	for(var i = 0; i < aLi.length; i ++) {
		list[i] = new Drag();
		list[i].init({
			id: aLi[i].id
		});
	}
	aInput.addEventListener('click', function() {
		randomAssign(aLi);
	});
}
function Drag() {
	this.dragEle = null;
	this.listEles = document.getElementsByTagName('li');
	this.disX = 0;
	this.disY = 0;
	this.settings = {
		id: ''
	}
}
Drag.prototype.init = function(options) {
	var that = this;
	extend(this.settings, options);
	this.dragEle = document.getElementById(this.settings.id);
	this.dragEle.style.zIndex = 1;
	this.dragEle['posX'] = this.dragEle.offsetLeft;
	this.dragEle['posY'] = this.dragEle.offsetTop;
	this.dragEle.onmousedown = function(e) {
		var e = e || window.event;
		e.preventDefault();
		that.disX =  e.clientX - that.dragEle.offsetLeft;
		that.disY = e.clientY - that.dragEle.offsetTop;
		var colArr = [];//存储碰撞到的其他元素；
		var eleCol = null;//存储碰撞到的离的最近的元素；
		document.onmousemove = function(ev) {
			var ev = ev || window.event;
			that.dragEle.style.zIndex = 6;
			that.dragEle.style.left = (ev.clientX - that.disX) + 'px';
			that.dragEle.style.top = (ev.clientY - that.disY) + 'px';	
			for(var i = 0; i < that.listEles.length; i ++) {
				that.listEles[i].style.border = '';//先给所有图片去掉边框；
				var col = that.collisionDetect(that.dragEle, that.listEles[i]);
				if(col && that.dragEle != that.listEles[i]) {
					colArr.push(that.listEles[i]);
				}
			}
			eleCol = that.dealCollision(colArr);//从碰撞的元素中选出离的最近的；
			if(eleCol) {
				eleCol.style.border = '2px red solid'; 
				eleCol.style.zIndex = 1;	
			}
		};
		document.onmouseup = function(e) {
			var e = e || window.event;
			e.preventDefault();
			document.onmousemove = null;
			document.onmouseup = null;
			for(var i = 0; i < that.listEles.length; i ++) {
				that.listEles[i].style.zIndex = 1;
			}
			that.dragEle.style.zIndex = 1;
			
			if(eleCol) {
				eleCol.style.border = '';
				that.exchange(eleCol);
				
			}
		};
	};
	return false;
}
Drag.prototype.collisionDetect = function(obj1, obj2) {//传入的必须是DOM元素；
	if((obj1.offsetLeft + obj1.offsetWidth) < obj2.offsetLeft 
		|| obj1.offsetLeft > (obj2.offsetLeft + obj2.offsetWidth)
		|| (obj1.offsetTop + obj1.offsetHeight) < obj2.offsetTop
		|| obj1.offsetTop > (obj2.offsetTop + obj2.offsetHeight)) {
		return false;//没有碰撞；
	}else {
		return true;
	}
}
//计算与碰撞到的元素之间的距离；返回距离最小的碰撞到的元素；
Drag.prototype.dealCollision = function(objArr) {//obj为碰撞到的元素对象
	var distance = 99999;
	var eleCol = null;
	for(var i = 0; i < objArr.length; i ++) {
		var c = calDis(this.dragEle, objArr[i]);
		if(c < distance) {
			distance = c;
			eleCol = objArr[i];
		}
	}
	return eleCol;
}
// 与某个元素互换原始的位置
Drag.prototype.exchange = function(obj) {
	var tmpX = this.dragEle['posX'];
	var tmpY = this.dragEle['posY'];

	this.dragEle['posX'] = obj['posX'];
	this.dragEle['posY'] = obj['posY'];
	move(this.dragEle);
	
	obj['posX'] = tmpX;
	obj['posY'] = tmpY;
	move(obj);
}
//移动元素到目的地，目的地位置信息在元素的posX和posY中；
function move(obj) {
	var desX = obj['posX'];
	var desY = obj['posY'];
	var posX = obj.offsetLeft;
	var posY = obj.offsetTop;
	var disX = Math.abs(desX - posX);
	var disY = Math.abs(desY - posY);
	var stepX = Math.ceil(disX / 10);
	var stepY = Math.ceil(disY / 10);
	if(posX < desX) {
		posX = posX + stepX;
	}
	if(posX > desX) {
		posX = posX - stepX;
	}
	if(posX == desX) {
		posX = desX;
	}
	if(posY < desY) {
		posY = posY + stepY;
	}
	if(posY > desY) {
		posY = posY - stepY;
	}
	if(posY == desY) {
		posY = desY;
	}
	obj.style.left = posX + 'px';
	obj.style.top = posY + 'px';
	if(posX == desX && posY == desY) {
		return true;
		// clearTimeout(obj.timer);
	}
	obj.timer = setTimeout(function() {
		if(posX == desX && posY == desY) {
			clearTimeout(obj.timer);
		}else {
			move(obj);
		}
	}, 10);
}
//测量两个元素之间的距离；
function calDis(obj1, obj2) {
	var a = obj1.offsetLeft - obj2.offsetLeft;
	var b = obj1.offsetTop - obj2.offsetTop;
	var c = Math.sqrt(a * a + b * b);
	return c;
}
//将obj2对象的属性和方法拓展给Obj1；
function extend(obj1, obj2) {
	for(var attr in obj2) {
		obj1[attr] = obj2[attr];
	}
}
function bindEvent(obj, eventname, fn) {//自定义事件绑定函数；
	obj.events = obj.events || {};
	obj.events[eventname] = obj.events[eventname] || [];
	obj.events[eventname].push(fn);
}
function fireEvent(obj, eventname) {//主动触发函数；
	if(obj.events[eventname]) {
		for(var i = 0; i < obj.events[eventname].length; i ++) {
			obj.events[eventname][i]();
		}
	}
}
// 生成随机排列的9个0~8不重复数字的数组；
function arrRandom() {
	var arr = [];
	arr.push(Math.floor(Math.random() * 9));
	while(arr.length < 9) {
		var num = Math.floor((Math.random() * 9));
		var sign = true;//判断生成的数字是否与数组中已有数字重复的标志位；
		for(var i = 0; i < arr.length; i ++) {
			if(num == arr[i]) {
				sign = false;
				break;
			}
		}
		if(sign) {
			arr.push(num);
		}
	}
	return arr;
}
// 对elements参数里的元素随机更改其位置信息，然后重新排列；
// 声明一个空数组，用来存放各元素的位置信息；声明一个空数组，用来存放9个数字，每个数字随机生成，0~8，不重复；
// 将elements中的位置信息存放在pidPos数组里；
// 随机从picPos中抽取位置信息，按序号赋予elements中的元素；
//移动各个元素位置；
function randomAssign(elements) {
	var picPos = [];//存储位置信息的数组；
	var randomArr = arrRandom();
	// console.log(randomArr);调试用；
	for(var i = 0; i < elements.length; i ++) {
		picPos.push({'posX': elements[i]['posX'], 'posY': elements[i]['posY']}); 
	}
	// console.log(randomArr);
	for(var i = 0; i < elements.length; i ++) {
		elements[i]['posX'] = picPos[randomArr[i]]['posX'];
		elements[i]['posY'] = picPos[randomArr[i]]['posY'];
		// move(elements[i]);
	}
	for(var i = 0; i < elements.length; i ++) {
		// elements[i]['posX'] = picPos[randomArr[i]]['posX'];
		// elements[i]['posY'] = picPos[randomArr[i]]['posY'];
		move(elements[i]);
	}
}