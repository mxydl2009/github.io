
// window.onoload加载事件,即给属性onload增加新的值；
function addEventLoad(func) {
  var oldEvent = window.onload;
  if(typeof oldEvent != 'function') {//没有事件挂载；
    window.onload = func;
  }else {
    window.onload = function() {
      oldEvent();
      func();
    }
  }
}

// 创建AJAX请求函数
function createRequest() {
  try {
    request = new XMLHttpRequest();
  } catch (tryMS) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (otherMS) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = null;
      }
    }
  }	
  return request;
}

// 创建事件监听函数
function addEventHandler(obj, eventName, handler) {
  // body...
  if(document.addEventListener) {
    obj.addEventListener(eventName, handler);
  }else if(document.attachEvent) {
    obj.attachEvent('on' + eventName, handler);
  }
}

// 得到事件发生的目标元素
function getActivedObject(e) {
  var obj;
  if(!e) {//e不存在，则是较早版本的IE；
    obj = window.srcElement;
  }else if(e.srcElement) {//IE7及以上版本；
    obj = e.srcElement;
  }else {//其他浏览器；
    obj = e.target;
  }
  return obj;
}