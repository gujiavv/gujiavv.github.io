

// //普通函数
// function Box() {
// 	return 'Lee';
// }

// //匿名函数
// function () {  //单独的匿名函数，是无法运行的
// 	return 'Lee';
// }

//匿名函数赋值给变量

/*
var box = function () {
	return 'Lee';
};

alert(box());
*/
/*
//通过自我执行来执行匿名函数
(function () {    //（匿名函数)() 第一个括号放匿名函数 
	 alert('Lee');
})();
*/

//自我执行后用alert打印
// alert((function () {
// 	return 'Lee';
// })());

// alert((function (age) {
// 	return age;
// })(100));

//函数里放一个匿名函数
// function box() {
// 	return function () {
// 		return 'Lee';
// 	}
// }
// alert(box()());


//通过闭包返回局部变量
/*
function box() {
	var age = 100;
	return age;
}

alert(box());

*/

/*
	var age = 100;
	function box() {
		age++;
	}
	box();
	alert(age)
*/

//使用匿名函数实现局部变量驻留内存中从而累加
/*
function box(){
	var age = 100;
	return function(){
		age++;
		return age;
	};
}

var b = box();
alert(b());
b = null;//接触引用 
*/
/*
function box() {
	var arr = [];

	for (var i = 0; i < 5; i++) {
		arr[i] = function () {
			return i;
		};
	}
	return arr;
}

var b = box();

for (var i = 0; i < 5; i++) {
	alert(b[i]());
}
*/

/*
function box() {
	var arr = [];

	for (var i = 0; i < 5; i++) {
		arr[i] = (function(num) {
			 return function () {
				return num;//因为闭包可以将变量驻留在内存中 
			}
		})(i);
	}
	return arr;
}

var b = box();

// alert(b);

for (var i = 0; i < 5; i++) {
	alert(b[i]());
}
*/

// var b = function () {
// 	alert('Lee');
// }

//关于this对象
/*
var user = 'The Window';
var box = {
	user:'The Box',
	getUser:function () {
		//这里作用域的this是Box
		var that = this
		return function () {
			//这里作用域是window
			return that.user;
		}
	}
};

alert(box.getUser()());
alert(box.getUser().call(box));
*/

/*
function box() {
	var oDiv = document.getElementById('oDiv');
	var text = oDiv.innerHTML;
	oDiv.onclick = function () {
		alert(text);
	}
	//oDiv = null;
}

box();
*/
/*
	//模仿块级作用域
	function box() {
		for (var i = 0; i <5; i++) 
		{

		}
	    alert(i);
	}

	box();
*/

// function box() {
// 		for (var i = 0; i <5; i++) 
// 		{
//            alert(i);
// 		}
// 		var i;
// 	    alert(i);
// 	}

// 	box();
/*
  (function () {
	var age = 200;
	alert(age);
})();

(function () {
	var a;
	var b;
})();

   function box() {
	var age = 100;//私有变量
}

function Box() {
	this.age = 100;        //属性 共有的
	this.run = function () {//方法
		return '运行中...';
	};
}

var box = new Box();
alert(box.age);
alert(box.run());

*/

/*
function Box() {
	var age = 100;
	function run() {
		return '运行中...';
	}
	this.publisGo = function () {
	       return age+run();	
	};
	this.getAge = function () {
		return age;
	}
}


var box = new Box();
alert(box.publisGo());
alert(box.getAge());
*/

//通过构造函数传参
/*
function Box(value) {
	var user = value;//私有变量
	this.getUser = function () {
		return user;
	};
}

var box = new Box('Lee');
alert(box.getUser());

var box2 = new Box('KKK');
alert(box2.getUser());

function Box(value) {
	var user = value;//私有变量
	this.getUser = function () {
		return user;
	};
	this.setUser = function (value) {
		user = value;
	};
}

var box = new Box('Lee');
alert(box.getUser());
box.setUser('OOO');
alert(box.getUser());

*/

/*
(function () {
	var user = '';
	Box = function (value) {  //构造函数，但在函数里写构造函数，不支持，因为私有作用域里的函数
		user = value;
		// this.getUser = function () {
		// 	return user;
		// }
	};//全局  构造函数
	Box.prototype.getUser = function () {
		return user;
	};
	Box.prototype.setUser = function (value) {
		user = value;
	}
})();

var box = new Box('Lee');
alert(box.getUser());
var box2 = new Box('kkk');
alert(box.getUser());
*/

//什么叫单例  就是永远只实例化一次 其实就是字面量声明方式
/*
  var box = {
	user:'Lee',
	run:function () {
		return '运行中。。。';
	}
};
*/

function Desk() {
	
}

var box = function () {
	var user = 'Lee';
	function run() {
		return '运行中...';
	}
	var desk = new Desk();
	desk.publicGo = function () {
		return user + run();
	}
	return desk;
	// var obj {
	// 	publicGo:function () { //对外公共接口的特权方法
	// 		return user+run();
	// 	}
	// }
	// return obj;
}();


alert(box.publicGo());























