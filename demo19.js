/*
window.onload = function () {
	alert(document.implementation);
	alert(document.implementation.hasFeature('CSS','2.0'));
	alert(document.implementation.hasFeature('HTML','1.0'));
    
    // 行内、内联、链接
    // 行内：就是在标签里的<style>属性添加的样式
	// 内联：就是在标签里的<style>标签书写的样式
	// 链接：就是通过<link href>标签链接到的样式
}*/
/*
window.onload = function () {
	var box = document.getElementById('box');
	//通过行内获取属性
	// alert(box.style.color);
	// alert(box.style.fontSize);//把-号去掉，后面的字符大写
	// alert(box.style.backgroundColor);
	// alert(box.style.cssFloat);//非IE
	// alert(box.style.float);//非IE
	// alert(box.style.styleFloat);//IE



    // box.style.color = 'yellow';
    // box.style.fontSize = '10px';
    // box.style.background = '#ccc';
    // box.style.cssFloat = right;

   // typeof box.style.cssFloat != 'undefined' ? box.style.cssFloat = 'right':box.style.styleFloat = 'right';

    // alert(box.style.cssText);//查看css文本
    // alert(box.style.length);//style属性只能获取设置行内 不能获取内联跟链接
    // box.style.removeProperty('color');
    // box.style.setProperty('font-size','10px');/IE不支持/
    
    // var style = window.getComputedStyle(box,null);
    // alert(style.fontSize);//计算后的样式  没有的话为默认样式
    // alert(style.color);
    // var style = box.currenStyle;
    var style = window.getComputedStyle ? window.getComputedStyle(box,null):null || box.currenStyle;
    // alert(style.fontSize);
    alert(style.border);
     //计算样式的获取 不仅仅可以获取行内，内联 和链接 因为不管在哪里设置css 都会驻留在在浏览器的计算样式
}
*/

// window.onload = function () {
// 	var box = document.getElementById('box');
// 	// box.id = 'pox';//交换id之后 附加id的css
// 	// box.style.fontFamily = 'Arial';
//     //class调用 其实是可以叠加的如果样式相同，那么后面一个会覆盖前面一个，如果不同就进行叠加效果
// 	// box.className = 'bbb';
// 	// addClass('ccc');//保留
// 	// addClass('ddd');//保留原来的

//      // hasClass(box,'aa');
//      addClass(box,'ccc');
//      addClass(box,'ddd');
//      removeClass(box,'aaa');
// }


//判断一个class是否存在
//如果有，返回true，没有返回false
//box.className的字符串为’aaa bbb'
// element.className 表示aaa bbb
//match 是正则表达式的一个方法
//如果element.className 有aaa 就把这个字符返回 没有就返回null
//aa 不是 aaa  这个正则不准确

// function hasClass(element,cName) 
// { 
// 	return (!!element.className.match(new RegExp('(\\s|^)'+cName+'(\\s|$)')));
// }

// function addClass(element,cName) {
// 	if (!hasClass(element,cName)) {    
// 	   element.className += ' '+cName;
// 	}
// }

// //移除一个class 
// function removeClass(element,cName) {
// 	if (hasClass(element,cName)) {
// 		element.className = element.className.replace(new RegExp('(\\s|^)'+cName+'(\\s|$)'),'');
// 	}
// }onload


// window.onload = function () {
	//检测是否支持sheet样式表 链接式
	// alert(document.implementation.hasFeature('styleSheets','2.0'));

	// var link = document.getElementsByTagName('link')[0];
	// var sheet = link.sheet;//CSSStyleSheet表示css样式表对象
	//兼容IE
	// var sheet = link.sheet || link.styleSheet;
    // var sheet = document.styleSheets[0];//这个属性所有浏览器都兼容
	// alert(sheet.disabled = true);//禁用
	// alert(sheet.href);
	//alert(sheet.cssRules);//样式规则集合
	//样式的规则就是一群样式的集合表示一个规则
	// alert(sheet.cssRules[0].cssText);//得到第一个规则的css文本
    // alert(sheet.cssRules[0].selectorText);
    // sheet.deleteRule(0);

    // sheet.insertRule('body{background-color:red}',0);
    
    //非IE获取Rules
    // sheet.cssRules
    //IE 获取Rules
    // sheet.rules

    //非IE删除Rules
    // sheet.deleteRule(0)
    //IE 删除Rules
    // sheet.removeRule(0)

    //非IE添加Rules
    //sheet.insert
    //IE添加Rules
    // sheet.addRule

    //跨浏览器兼容rules
    // var rules = sheet.cssRules || sheet.rules;
  

// }

// //跨浏览器兼容删除rules
// function deleteRule(sheet,position) {
// 	if (sheet.deleteRule) {
// 		sheet.deleteRule(position)
// 	}else if(sheet.removeRule)
// 	{
// 		sheet.removeRule(position)
// 	}
// }

// function insertRule(sheet,selectorText,cssText) {
// 	if (sheet.insertRule) {
// 		sheet.deleteRule(selectorText+cssText,0);
// 	}else if(sheet.addRule)
// 	{
// 		sheet.removeRule(selectorText,cssText,0);
// 	}
// }
window.onload = function () {

	var sheet = document.styleSheets[0];//这个属性所有浏览器都兼容
    var rules = sheet.cssRules || sheet.rules;
    var rule1 = rules[0];
    // alert(rule1.selectorText);
    var box = document.getElementById('box');
    alert(rule1.style.color);
    rule1.style.color = 'green';
}























