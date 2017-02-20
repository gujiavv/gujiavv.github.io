
// var box = 3 < 2;
// alert(box);


// var box = '3'>22;
//如果只有一个数值字符串，那么会将他专换成数值，再比较
// alert(box);

// var box = '3'>'22';
// alert(box);
// 如果两个都是数值字符串，那么会比较进行第一个字符的比较 3>2 

// var box = 2 > {
//    toString:function () {
//    	  return 1;
//    }
// };

// alert(box);
/*
    1 第一个操作数是对象，则返回第二个操作数
    2 第二个操作数是对象，则第一个操作数返回true，才返回第二个操作数 否则返回false
    3 有一个操作数是null 则返回null
    4 有一个操作数是undefined 则返回indefined

*/

// var box = {} && 4 ;

// alert(box);

// var box = 100;
// box += 100;
// box -= 100;
// alert(box);

// var box = {
// 	1:2,
// 	3:4,
// 	5:6
// };

// alert(box[1]);
// var box = 5<4?'对':'错';
// alert(box);

// var box = {
// 	'name' :'张三',
// 	'age' : 12,
// 	'height' : 120
// };

// alert(box.name);

//with(box)可以将box.给省略掉
// with(box){
// 	var n = name;
// 	var a = age;
// 	var h = height;
// }

// alert(n+a+h);
// function box() {
// 	alert('我只有被调用才有用');
// }
// box();

// function box(name,age) {
// 	alert('你的姓名是：'+name +'你的年龄是'+age);
// };

// box('张三',12);

// function box(num) {
// 	if (num<5) return num;
// 	return 100;
// }

// alert(box(4));

// function box() {
// 	return arguments[0]+'|' + arguments[1] +'|' + arguments[2]
// };

// alert(box('张三',28,'计算器'));


// function box() {
// 	return arguments.length;
// };

// alert(box('张三',3));


// function box() {
// 	var sum = 0;
// 	for (var i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }

// alert(box(2,5,7,8,14));

// function box(num,a) {
// return num +100;
// }

// function box(num) {
// 	return num+200;
// }

// alert(box(50,1));
// js 不具备重载功能
//重载就是根据参数，选择相同函数名而参数不同的函数

//对象包含那些元素
//1. 属性
//2. 方法（函数）

// var box = new Object();//new关健字省略
// box.name = '张三';
// box.age = 12;

// var box = {}; //字面量创建的对象
// var box = {
//   name:'张三',
//   age:34
// };

// alert(box.name);

// var box = {};
// box.name = '李艳辉';
// alert(box.name);
// alert(box['name']);//'name' 必须加单引号

// function objrun() {
// 	return '123';
// }

// var box = new Object();
// box.name = '章撒';
// box.run = objrun();
// alert(box.run);

// var box = {
// 	name:'李艳辉',
// 	age:28,
// 	run:function () {  //匿名函数
// 		return '123';
// 	}
// }
// alert(box.run());

//调用方法(函数)，如果没有圆括号，会打印代码  有括号 才有返回值

// var box = {
// 	name:'张三'
// };

// alert(box.name);
// delete box.name; //删除属性
// alert(box.name);

// function box(name,age,height,address,love) {
// 	alert(name);
// 	alert(age);
// }

// box('李阳',23,263,'江苏','打球');


function box(obj){
	if(obj.name != undefined)alert(obj.name);
	if(obj.age != undefined)alert(obj.age);
	if(obj.love != undefined)alert(obj.love);
}

var obj = {
	name:'李艳辉',
	age:28,
	height:178,
	address:'山东'
};

box(obj);






















