/*
var box = new Object();
box.name = 'Lee';
alert(box.name);
*/

/*
var box = 'Lee'; //不是引用类型 无法输出
var box = new Object();
box.name ='Lee';
var box2 = box;
box2.name ='kkk';//因为他们指向的是同一个object，同一个name  不管修改谁 大家都会改变
alert(box2.name);//都指向同一个对堆内存的对象
alert(box.name);

function box(num) {
	num +=10;
	return num;
}

var num = 50;

alert(box(num));//如果按引用传递，那么函数的num会成为类似全局变量
alert(num);
*/

/*
function box(obj) { //这里将要传递一个引用类型的参数，但是不是按引用传递，是按值传递
	obj.name = 'Lee';
	var obj = new Object();
	obj.name ='kkk';
}

var obj = new Object();
box(obj);
alert(obj.name);
//所以 js没有按引用传参数的功能，切记 不能把传递引用参数当作
*/
/*
var box = [1,2,3];
alert(box instanceof Array);
var box2 = {};
alert(box instanceof Object);
var box3 = /g/;
alert(box3 instanceof RegExp);
*/

//基本类型 typeof
//非基本类型 instanceof

/*
var box = 'Lee';
function setBox() {
	return 123;
}

alert(window.box); //全局变量，最外围，属于window属性
alert(window.setBox());
*/

/*
var box = 'Lee';
function setBox() {
	function setColor() {
		return 456;	
	}
	return 123;
}
// alert(window.box);
// alert(window.setBox());
alert(window.setColor);
*/

/*
var box = 'Lee';
function setBox() {
 box = 'red';  //通过传参 替换了全局变量
}
setBox();
alert(box);
*/
/*  通过传参，也是局部变量，作用域在setBox()里
var box = 'Lee';
function setBox(box) {
	alert(box);
}
setBox('red');
alert(box);
*/


/*
var box = 'Lee';
function setBox() {
	function setColor() {
		var b = 'KKk';  
		return 123;
	}
	return setColor();
}
alert(setBox());
*/

//if跟for都没有封闭作用域的功能
// if (true) {
// 	var box = 'Lee';
// }
//  alert(box);

var box = 'Lee';

function setBox() {
	var box = 'red';
	return box;
}

box = null;

alert(setBox());






