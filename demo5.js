

/*
function box(num1,num2) {
	return num1+num2;
}
alert(box(1,2));

//普通函数的声明方式
*/

/*
var box = function(num1,num2){
	return num1+num2;
}
alert(box(1,2));
//使用变量初始化函数
*/

/*
var box = new Function('num1','num2','return num1+num2');
alert(box(1,2));
使用new的构造函数来初始化函数
*/

//函数可以传递函数


/*  这里传递的是函数的返回值，
function box(sum,num) {
  return sum+num;
}

function sum(num) {
	return num + 10;
}

var result = box(sum(10),10); //sum(10) 传递的时函数返回值
alert(result);
*/

/*
function box(sum,num) {
	return sum(num);
}

function sum(num) {
	return num+10;
}

var result = box(sum,10);

alert(result);

*/


/*
function box(num) {
	if (num<=1) {
		return 1;
	}else{
		return num *box(num-1);
	}
}
alert(box(4));
*/

/*
function box(num) {
	if (num<=1) {
		return 1;
	}else{
		return num*arguments.callee(num-1);//使用arguments.callee来调用自身
	}
}
alert(box(4));
*/
//window是一个对象 ，而且是js里面最大的对象 最外围的对象
// alert(this);//this 目前表示window 因为在window的范围下
/*
var color = '红色的';//这里的color就是全局变量，而这个变量又是window
alert(window.color);
*/
// var box = {
// 	color:'蓝色的',//这里的color 是box下地属性，也就是局部变量
// 	sayColor:function(){
// 		alert(this.color); //这里this，我们确定了是代表的box对象
// 	}
// }

// box.sayColor();

/*
function box(name,age) {
	return name + age;
}

alert(box.length);
*/

/*
function box(num1,num2) {
	return num1+num2;
}

function sum(num1,num2) {//apply call可以冒充另一个函数
	return box.apply(this,[num1,num2]);//this表示window作用域 []表示传递的参数
}

alert(sum(10,10));

function sum2(num1,num2) {
	return box.apply(this,arguments);
}

alert(sum2(10,10));//arguments 自身  当数组传递
*/

/*
function box(num1,num2) {
	return num1+num2;
}

function sum(num1,num2) {
	return box.call(this,num1,num2); //call只是传递参数不同，其他和apply一样
}

alert(sum(10,10));
*/

/*
var color = '红色的';//全局

var box = {
	color:'蓝色的'//局部的
};

function sayColor() {
	alert(this.color);
}

//sayColor();
//用call实线对象冒充，冒充box下 冒充windows
sayColor.call(box);
*/

































