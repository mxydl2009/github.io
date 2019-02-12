window.onload = function() {
	var btn = document.getElementById('go');
	var ele = document.getElementById('begin');
	if(btn) {
		btn.addEventListener('click', function() {
			 fadeOut('prewords');
			 fadeIn('begin');
			 setTimeout(function() {
				moveEle('begin', {'desX':2000, 'desY': ele.offsetTop});
				fadeOut('mask');
			 }, 1000)
		});
	}
	
	var navLists = document.getElementById('navbar').getElementsByTagName('li');
	for(var i = 0; i < navLists.length; i ++) {
		navLists[i].addEventListener('mouseover', function() {
			addClass(this, 'active');
		});
		navLists[i].addEventListener('mouseout', function() {
			removeClass(this, 'active');
		});
	}
	highlightPage();
}

function addClass(element, value) {
	if(!element.className) {
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

function removeClass(element, value) {
	if(!element.className) {
		return true;
	}
	var classes = element.className;
	if(classes.indexOf(value) == -1) {
		return true;
	}else {
		classes = classes.replace((value), '');
		element.className = classes;
	}
}

function highlightPage() {
	var nav = document.getElementById('navbar');
	var links = nav.getElementsByTagName("li");
	var aLinks = nav.getElementsByTagName('a');
	var linkurl;
	var currenturl = window.location.href;
	for(var i = 0; i < aLinks.length; i ++) {
		linkurl = aLinks[i].getAttribute("href");
		var urlin = currenturl.indexOf(linkurl);
		if(urlin != -1) {
			addClass(links[i], 'highlight');
			// var linktext = links[i].lastChild.nodeValue.toLowerCase();
			// document.body.setAttribute("id",linktext);
		}
	}
}

function fadeOut(id) {
	var ele = document.getElementById(id);
	var opa = getComputedStyle(ele, null)['opacity'];
	opa = opa - 0.1;
	ele.style.opacity = opa;
	var timer = setTimeout(function() {
		if(opa <= 0) {
			clearTimeout(timer);
			// return true;
			// fadeIn('begin');
		}else {
			fadeOut(id);
		}
	}, 50);
}

function fadeIn(id) {
	var ele = document.getElementById(id);
	var opa = parseFloat(getComputedStyle(ele, null)['opacity']);
	opa = opa + 0.1;
	ele.style.opacity = opa;
	var timer = setTimeout(function() {
		if(opa >= 0.7) {
			clearTimeout(timer);
		}else {
			fadeIn(id);
		}
	}, 100);
}
// 获取元素的opacity属性；
function getOpacity(obj) {
	if(getComputedStyle(obj,null)['opacity']) {
        return getComputedStyle(obj,null)['opacity'];
    }else{
        return obj.currentStyle['fileter'];//IE浏览器；
    }
}

function moveEle(id, json) {
	var obj = document.getElementById(id);
	var desX = json.desX;
	var desY = json.desY;
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
	timer = setTimeout(function() {
		if(posX == desX && posY == desY) {
			clearTimeout(timer);
		}else {
			moveEle(id, json);
		}
	}, 3);
}
    
