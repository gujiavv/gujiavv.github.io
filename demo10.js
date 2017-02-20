
/*
var box1 = new Object();//创建对象
box1.name = 'Lee'; //添加属性
box1.age = 100;
box1.run = function () {
	return this.name+this.age+'运行中...';//this表示当前作用域的对象
}
//this 表示new Object()实例化出来的对象
//this 要放到一个作用域下 

var box2 = new Object();
box2.name = 'Jack'; //添加属性
box2.age = 10;
box2.run = function () {
	return this.name+this.age+'运行中...';//this表示当前作用域的对象
}
alert(box1.run());
alert(box2.run());
*/

/*
function createObject(name,age) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function () {
		return this.name+this.age+'运行中。。。'
	};
	return obj;
}

var box1 = createObject('Lee',100);
var box2 = createObject('Jack',200);
alert(box1.run());
alert(box2.run());
alert(box1 instanceof Object);
alert(box2 instanceof Object);
*/

/*
function Box(name,age) {
	this.name = name;
	this.age = age;
	this.run = function () {
		return this.name+this.age+'运行中。。。';
	};
}

var box1 = new Box('Lee',100);//实例化
var box2 = new Box('Jack',200);//实例化

alert(box1.run());
alert(box2.run());

构造函数不要用普通函数调用

var o = new Object();
Box.call(o,'Lee',100);//对象冒充
alert(o.run());
*/


// function Box(name,age) {
// 	this.name = name;
// 	this.age = age;
// 	this.run = function () {
// 		return this.name+this.age+'运行中。。。';
// 	};
// }

// var box1 = new Box('Lee',100);
// var box2 = new Box('Lee',100);
// alert(box1.run()==box2.run());
// alert(box1.run==box2.run);//实例化地址不一样



// function Box(name,age) {
// 	this.name = name;
// 	this.age = age;      //实力属性
// 	this.run = function(){ //实例方法
// 		return this.name + this.age + '运行中...';
// 	}
// }
/*
function Box(){}//构造函数函数体内什么都没有，这里如果有，叫做实力属性，实例方法

Box.prototype.name = 'Lee';//原型属性
Box.prototype.age = 100;//原型方法
Box.prototype.run = function () {//原型方法
	return this.name+this.age+'运行中...';
};

var box1 = new Box();
alert(box1.run());
//如果是实例方法，不同的实例化，他们的方法地址是不一样的 是唯一的
//如果是原型方法 那么他们的地址是共享的 大家都是一样
// alert(box1.run==box2.run);
alert(box1.constructor);//构造属性，可以获取构造函数本身   
 */                   
/*
function Box(){}
Box.prototype.name = 'Lee';
Box.prototype.age = 100;
Box.prototype.run = function () {
	return this.name+this.age+'运行中...';
};

var box1 = new Box();
box1.name ='Jack';//实例属性 并没有重写原型属性
alert(box1.name);//就近原则

var box2 = new Box();
alert(box2.name);//实例属性不会共享 只能访问原型属性

box1.name ='Jack';
alert(box1.name);
delete box1.name;
// delete Box.prototype.name; //删除原型属性
Box.prototype.name = 'll';
alert(box1.name);
*/

//判断只有原型中有的指定属性
function isProperty(object,property) {
	return !object.hasOwnProperty(property) && (property in object)
}

function Box(){}
Box.prototype.name = 'Lee';
Box.prototype.age = 100;
Box.prototype.run = function () {
	return this.name+this.age+'运行中...';
};
var box1 = new Box();
alert(box1.hasOwnProperty('name'));//判断实例中是否存在指定属性























