// function Box() {}
// var box = new Box(){};
// alert(box.prototype);//实例对象无法访问到
// alert(box.__proto__);//只能访问指针
// alert(Box.prototype);//对象名可以

// function Box() {}

//使用字面量的方式创建原型对象 
/*
Box.prototype = {
	name:'Lee',
	age:100,
	run:function (){
		return this.name + this.age +'运行中...';
	}
};

//重写了原型对象
Box.prototype = {
	age:200
};//这里不会保留之前原型的任何信息
//把原来的原型对象和构造函数对象实例之前的关系切断了

var box = new Box();
alert(box.age);


// var box = new Box();
// // alert(box.name);
// alert(box.run());
*/

//数组排序
 // var box = [5,2,4,3,5,1,7];
 // alert(box.sort());
 /*
String.prototype.addstring = function () {
	return this+'，被添加了';
};

var box = 'Lee';
alert(box.addstring());
*/

//原型的缺点
// function Box() {
// }

// Box.prototype = {
//     constructor:Box;
//     name:'Lee',
//     age:100,
//     family:['哥哥','姐姐','妹妹'],
//     run:function () {
//     	return this.name+this.age+'运行中...';
//     }
// };

//为了解决构造传参和共享问题，可以组合构造函数+原型模式
// function Box(name,age) {      //不共享的使用原型模式
// 	this.name = name;
// 	this.age = age;
// 	this.family = ['父亲','母亲','妹妹'];
// };

// Box.prototype = {
// 	constructor:Box,
// 	run:function () {
// 		return this.name+this.age+this.family;
// 	}
// }

//动态原型模式

/*
function Box(name,age) {
	this.name = name;
	this.age = age;
	this.family = ['哥哥','姐姐','弟弟'];

	if (typeof this.run !='function') {
			Box.prototype.run = function () {
					return this.name+this.age+'运行中...';
				}
		}
	
};

var box1 = new Box('Lee',100);
var box2 = new Box('Jack',200);
alert(box2.run());
*/

//寄生构造函数 = 工厂模式 + 构造函数
// function Box(name,age) {
// 	var obj = new Object();
// 	obj.name = name;
// 	obj.age = age;
// 	obj.run = function () {
// 		return this.name + this.age + '运行中...';
// 	}
// 	return obj;
// }

// var box1 = new Box('张三',12);

// alert(box1.run());
/*
function Box() {
	this.name='Lee';
}

function Desk() {
	this.age = 100;
}

function Table() {
	this.level = 12;
}

//通过原型链继承，超类型实例化后的对象实例，赋值给子类型的原型属性
//new Box() 会将Box构造里的信息和原型里的信息都交给Desk


Desk.prototype = new Box();
Table.prototype = new Desk();

var desk = new Desk();
var table = new Table();

alert(table.name);
*/

/*
function Box
() {
	this.name='Gee';
}

Box.prototype.name = 'Jack';//原型里的

function Desk() {
	this.age = 100;
}

Desk.prototype = new Box();

var desk = new Desk();

alert(desk.name);//就近原则，实例里有，就返回，没有就去查找
*/


//使用对象冒充继承
/*
function Box(name,age) {
	this.name = name;
	this.age = age;
	this.family =['哥哥','姐姐','妹妹'];//引用类型，放在构造就不会被共享
}

Box.prototype.run = function () {
	return this.name+this.age+'运行中...';
}

// Box.prototype.family = '家庭';

function Desk(name,age) {
	Box.call(this,name,age);//对象冒充,只能继承构造里的信息
}

Desk.prototype = new Box();//原型链继承

var desk = new Desk('Lee',100);
alert(desk.run());


// var desk = new Desk('Lee',100);
// alert(desk.name);
// alert(desk.family);
// desk.family.push('弟弟');
// alert(desk.family);

// var desk2 = new Desk('Lee',100);
// alert(desk2.family);
*/

//原型式继承
/*
function obj(o) {   //o表示将要传递进入的一个对象
	function F() {} //F临时新建的对象 用来存储传递过来的对象
		F.prototype = o;
		return new F();
}

//这是字面量的声明方法 相当于var box = new Box();
var box = {
     name:'Lee',
     age:100,
     family:['哥哥','姐姐','妹妹']
};


// F.prototype = 0 其实就相当于 Desk.prototype = new Box();

//box1 = new F()
var box1 = obj(box);
alert(box1.name);
alert(box1.family);
box1.family.push('弟弟');
alert(box1.family);
var box2 = obj(box);
alert(box2.family);
*/

//寄生函数
// function obj(o) {   //o表示将要传递进入的一个对象
// 	function F() {} //F临时新建的对象 用来存储传递过来的对象
// 		F.prototype = o;
// 		return new F();
// }


// function create(o) {
// 	var f = obj(o);
// 	f.run = function () {
// 		return this.name+'方法';
// 	}
// 	return f;
// }

// var box = {
// 	name:'Lee',
// 	age:100,
// 	family:['哥哥','姐姐','妹妹']
// }

// var box1 = create(box);

// alert(box1.run());


function obj(o) {   //o表示将要传递进入的一个对象
	function F() {} //F临时新建的对象 用来存储传递过来的对象
		F.prototype = o;
		return new F();
}

 function create(box,desk) {
	var f = obj(box.prototype);
	f.constructor = desk;//调整原型构造指针
	desk.prototype = f;
}

function Box(name,age) {
	this.name = name;
	this.age = age;
}

Box.prototype.run = function () {
	return this.name + this.age + '运行中...';
}

function Desk(name,age) {
	Box.call(this,name,age);//对象冒充
}

create(Box,Desk);//这句话替换 Desk.prototype= new Box();

var desk = new Desk('Lee',100);
alert(desk.run());
alert(desk.constructor);























