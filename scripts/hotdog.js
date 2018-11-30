$(document).ready(function() {
	var wangsicong = {
		move: function() {
			$('#wangsicong').animate({//CSS对象标记法；
				top: '+=500'	
			},2000,'linear').animate({
				top: '-=500'
			}, 2000, 'linear', function() {
				wangsicong.move();
			})
		},
	};
	var hotdog = {
		//在鼠标点击处生成热狗并发射；
		fire: function() {
			var position = getMousePos();
			var posX = (1111 - position[0]) + 'px';
			var posY = position[1] + 'px';
			var $hotdog = $('<div>');
			$hotdog.attr('id', 'hotdog').css('top', posY)
			.css('right', posX).appendTo($('#firezone'));
			$('<img>').attr('src', 'images/hotdog.png').appendTo($hotdog);
			$hotdog.fadeOut('fast').fadeIn('fast');

			$hotdog.animate({
				right: '1020px'
			},1000, 'linear', function() {
				var hotdogPosX = $hotdog.offset().left + 40;
				var hotdogPosY = $hotdog.offset().top + 30;
				var wangsicongPosX = $('#wangsicong').offset().left + 40;
				var wangsicongPosY = $('#wangsicong').offset().top + 30;
				var relativeX = hotdogPosX - wangsicongPosX;
				var relativeY = hotdogPosY - wangsicongPosY;
				if(relativeX <= 80 && relativeY < 20 && relativeY > -15) {  //热狗击中王思聪；
					//alert('王思聪吃到热狗了！');
					$('#wangsicong').find('img').remove();
					$('<img>').attr('src', 'images/wangsicongbig.png')
					.appendTo($('#wangsicong')).fadeOut('slow').fadeIn('slow');
				}
				$(this).remove();
			})
		}
	};
	//取得鼠标的位置信息；
	function getMousePos(event) {
		var e = event || window.event;
		var pos = [0, 0];
		pos[0] = e.clientX;
		pos[1] = e.clientY;
		return pos;
	}
	//鼠标在firezone区域时点击后生成热狗发射出去；
	$('#firezone').on('click', function() {
		//hotdog.produce();
		hotdog.fire();
	});
	$('#start').on('click', function() {
		wangsicong.move();
	});
	/*var hotdogPosX = $('#hotdog').offset().left;
	var hotdogPosY = $('#hotdog').offset().top;
	var wangsicongPosX = $('#wangsicong').offset().left;
	var wangsicongPosY = $('#wangsicong').offset().top;
	var relativeX = hotdogPosX - wangsicongPosX;
	var relativeY = hotdogPosY - wangsicongPosY;
	if(relativeX < 60 && relativeY < 50) {  //热狗击中王思聪；
		alert('王思聪吃到热狗了！');
	}*/
});