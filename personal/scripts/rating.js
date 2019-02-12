// 打分组件
//功能：1. 鼠标移入元素，元素索引以内的所有元素背景颜色都点亮；变量记录索引值；
//2.鼠标移出元素，元素在没有评分时，所有元素背景颜色都为原色；元素在有评分时，按评分值以内的索引元素背景颜色都点亮；变量记录评分值；
//3.鼠标点击元素，元素索引以内的所有元素背景颜色都点亮，且记录分数值；

//鼠标移出元素时，调用rating函数；
var score = 0;
function rating() {
	if(score) {
		backgroundHighlight(score);
	}else {
		backgroundrecover();
	}
}
// 鼠标移入元素，调用backgroundChange函数；
function backgroundHighlight(index) {
	var stars = document.getElementById('goods_grade').getElementsByTagName('li');
	var starNum = index || score;
	for(var i = 1; i <= stars.length; i ++) {
		if(i <= starNum) {
			stars[i - 1].className = 'on';
		}else {
			stars[i - 1].className = '';
		}
	}
}
function backgroundrecover() {
	var stars = document.getElementById('goods_grade').getElementsByTagName('li');
	for(var i = 1; i <= stars.length; i ++) {
		stars[i - 1].className = '';
	}
}
//点击时调用rated函数，渲染评分星星背景色，并记录评分值；
function rated() {
	score = parseInt(this.title);//获取当前事件发生元素的title属性代表的评分值，也同时与索引值相关；
	backgroundHighlight(score);
	var goods_score = document.getElementById('goods_score');
	goods_score.textContent = this.title;
}