// window.onload = function () {
// 	var box = document.getElementById('box');
	// alert(box.style.width);
	// alert(box.style.height);
	// var style = window.getComputedStyle ? window.getComputedStyle(box,null):null || box.currentStyle;
	// alert(style.width);
	// alert(style.height);//获取计算CSS大小，如果没有设置值，非IE会获取默认大小，IE会理解为0
    // 使用CSSStyleSheet 的 cssRules IE为Rules

    //var box = document.getElementById('box');
    // var sheet = document.styleSheets[0];
    // var rule = (sheet.cssRules || sheet.rules)[0];
    // alert(rule.style.width);
    // alert(rule.style.height);
    // 都不能获取实际大小


    // alert(box.clientWidth);
    // alert(box.clientHeight);
    //没有单位 但是默认是px  如果设置了其他单位 也会转换成px
    //加内边距 会增加到220
    //边框和外边距，不算在clientWidth和clientheight的实际大小中
    //内边距会增加大小，而滚动条会减少实际大小，不把滚动条的大小算进去

// }   
window.onload = function () {
	var box = document.getElementById('box');
	// alert(box.scrollWidth);
	// alert(box.scrollHeight);
	//IE会获取有效的滚动高度
	//增加内边距都会增加  增加外边距不会
	//IE浏览器在指定的高度下获取scrollHeight会理解为获取有效内容的高度
	//如果文本溢出了，没加滚动条，不同的浏览器也不太兼容
    //有溢出 加滚动条 帮助兼容
    //元素实际大小
    //alert(box.offsetWidth);
   	// alert(box.offsetHeight);
   	// alert(box.offsetTop);
   	// alert(box.offsetLeft);
   	// alert(box.offsetParent.id);//需要添加定位

    // alert(box.offsetParent.offsetTop);
    // alert(box.offsetTop);
    // box.scrollTop = 100;
    // alert(box.scrollTop);

}

function offsetTop(element) {
	var top = element.offsetTop;
	var parent = element.offsetParent;
	while(parent !== null)
	{
		top += parent.offsetParent;
		parent=parent.offsetParent,
	}
	return top;
}

















